import { LabelerServer } from '@skyware/labeler';
import type { FastifyReply, FastifyRequest } from 'fastify';

import { LABELS, getFeedShortNamesForHandle, getLabelsByFeedShortName, getLabelsForHandle } from './constants.js';
import logger from './logger.js';
import { labelOperationsTotal } from './metrics.js';
import { LabelerConfig } from './types.js';

export class LabelerContext {
  public server: LabelerServer;
  public config: LabelerConfig;

  constructor(config: LabelerConfig) {
    this.config = config;
    const dbName = config.bskyHandle ? config.bskyHandle.split('.')[0] : config.did.replace(/:/g, '_');
    this.server = new LabelerServer({
      did: config.did,
      signingKey: config.signingKey,
      dbPath: `./db/${dbName}.db`,
    });

    // Initialize mapping table for likes and labels
    this.server.db
      .prepare(
        `
      CREATE TABLE IF NOT EXISTS like_labels (
        rkey TEXT PRIMARY KEY,
        did TEXT,
        labeler_did TEXT,
        identifier TEXT
      )
    `,
      )
      .run();
  }

  public registerCustomRoutes() {
    void this.server.app.register(async (instance) => {
      instance.get('/.well-known/did.json', (req, rep) => this.wellKnownDidHandler(req, rep));
      instance.get('/.well-known/atproto-did', (req, rep) => this.wellKnownAtprotoDidHandler(req, rep));
      instance.get('/xrpc/app.bsky.feed.describeFeedGenerator', (req, rep) =>
        this.describeFeedGeneratorHandler(req, rep),
      );
      instance.get('/xrpc/app.bsky.feed.getFeedSkeleton', (req, rep) => this.getFeedSkeletonHandler(req, rep));
      logger.info(`[${this.config.bskyHandle}] Custom routes registered.`);
    });
  }

  public createLabel(did: string, likeRkey: string, record: { subject: { uri: string } }) {
    logger.info(`[${this.config.bskyHandle}] Received like (rkey: ${likeRkey}) from ${did}`);

    if (likeRkey === 'self') {
      logger.info(`[${this.config.bskyHandle}] ${did} liked the labeler. Returning.`);
      return;
    }

    const subjectUri = record.subject.uri;
    const postRkey = subjectUri.split('/').pop()!;

    const relevantLabels = getLabelsForHandle(this.config.bskyHandle);
    const newLabel = relevantLabels.find((label) => label.rkey === postRkey);

    if (!newLabel) {
      // Check if it exists at all but filtered out
      const anyLabel = LABELS.find((label) => label.rkey === postRkey);
      if (!anyLabel) {
        logger.warn(
          `[${this.config.bskyHandle}] New label not found: post rkey ${postRkey} (like rkey ${likeRkey}). Likely liked a post that's not one for labels.`,
        );
      }
      return;
    }
    logger.info(`[${this.config.bskyHandle}] New label: ${newLabel.identifier} (post rkey: ${postRkey})`);

    try {
      this.server.createLabel({ uri: did, val: newLabel.identifier });

      // Store mapping: like record rkey -> identifier
      this.server.db
        .prepare('INSERT OR REPLACE INTO like_labels (rkey, did, labeler_did, identifier) VALUES (?, ?, ?, ?)')
        .run(likeRkey, did, this.config.did, newLabel.identifier);

      logger.info(`[${this.config.bskyHandle}] Successfully labeled ${did} with ${newLabel.identifier}`);
      labelOperationsTotal.inc({
        action: 'add',
        status: 'success',
        handle: this.config.bskyHandle,
        identifier: newLabel.identifier,
      });
    } catch (error) {
      logger.error(`[${this.config.bskyHandle}] Error in createLabel: ${error}`);
      labelOperationsTotal.inc({
        action: 'add',
        status: 'failure',
        handle: this.config.bskyHandle,
        identifier: newLabel.identifier,
      });
    }
  }

  public deleteLabel(did: string, rkey: string) {
    //logger.info(`[${this.config.did}] Received unlike (rkey: ${rkey}) from ${did}`);

    const mapping = this.server.db
      .prepare('SELECT identifier FROM like_labels WHERE rkey = ? AND did = ? AND labeler_did = ?')
      .get(rkey, did, this.config.did) as { identifier: string } | undefined;

    if (!mapping) {
      //logger.info(`[${this.config.did}] No label mapping found for rkey ${rkey}. Doing nothing.`);
      return;
    }

    try {
      this.server.createLabels({ uri: did }, { negate: [mapping.identifier] });
      this.server.db.prepare('DELETE FROM like_labels WHERE rkey = ?').run(rkey);

      logger.info(`[${this.config.bskyHandle}] Successfully removed label ${mapping.identifier} from ${did}`);
      labelOperationsTotal.inc({
        action: 'remove',
        status: 'success',
        handle: this.config.bskyHandle,
        identifier: mapping.identifier,
      });
    } catch (error) {
      logger.error(`[${this.config.bskyHandle}] Error in deleteLabel: ${error}`);
      labelOperationsTotal.inc({
        action: 'remove',
        status: 'failure',
        handle: this.config.bskyHandle,
        identifier: mapping.identifier,
      });
    }
  }

  private async wellKnownDidHandler(req: FastifyRequest, rep: FastifyReply) {
    if (!this.config.hostName?.endsWith(req.hostname)) {
      void rep.status(404).send({ error: 'NotFound' });
      return;
    }
    const didDocument = {
      '@context': ['https://www.w3.org/ns/did/v1'],
      id: `did:web:${this.config.hostName}`,
      service: [
        {
          id: '#bsky_fg',
          type: 'BskyFeedGenerator',
          serviceEndpoint: `https://${this.config.bskyHandle}`,
        },
      ],
    };
    return rep.header('Content-Type', 'application/json').send(didDocument);
  }

  private async wellKnownAtprotoDidHandler(req: FastifyRequest, rep: FastifyReply) {
    if (!this.config.hostName?.endsWith(req.hostname)) {
      void rep.status(404).send({ error: 'NotFound' });
      return;
    }
    return rep.header('Content-Type', 'text/plain').send(this.config.did);
  }

  private async describeFeedGeneratorHandler(req: FastifyRequest, rep: FastifyReply) {
    if (!this.config.hostName?.endsWith(req.hostname)) {
      void rep.status(404).send({ error: 'NotFound' });
      return;
    }
    const shortNames = getFeedShortNamesForHandle(this.config.bskyHandle);
    const feeds = shortNames.map((shortName) => {
      return {
        uri: `at://${this.config.did}/app.bsky.feed.generator/${shortName}`,
      };
    });
    const feedGenerator = {
      did: `did:web:${this.config.hostName}`,
      feeds,
    };
    return rep.header('Content-Type', 'application/json').send(feedGenerator);
  }

  private async getFeedSkeletonHandler(req: FastifyRequest, rep: FastifyReply) {
    if (!this.config.hostName?.endsWith(req.hostname)) {
      void rep.status(404).send({ error: 'NotFound' });
      return;
    }

    const { feed, cursor, limit } = req.query as { feed?: string; cursor?: string; limit?: string };
    const parts = feed?.split('/') ?? [];
    if (!feed || parts.length !== 5 || parts[2] !== this.config.did || parts[3] !== 'app.bsky.feed.generator') {
      void rep.status(400).send({ error: 'Invalid feed request' });
      return;
    }

    const shortName = parts[4];
    const targetLabels = getLabelsByFeedShortName(this.config.bskyHandle, shortName);

    // Pagination
    const limitNum = limit ? Math.min(parseInt(limit, 10), 100) : 50;
    const cursorIdx = cursor ? parseInt(cursor, 10) : 0;
    const slice = targetLabels.slice(cursorIdx, cursorIdx + limitNum);
    const nextCursor = cursorIdx + limitNum < targetLabels.length ? (cursorIdx + limitNum).toString() : undefined;

    return rep.header('Content-Type', 'application/json').send({
      feed: slice.map((label) => ({ post: `at://${this.config.did}/app.bsky.feed.post/${label.rkey}` })),
      cursor: nextCursor,
    });
  }
}
