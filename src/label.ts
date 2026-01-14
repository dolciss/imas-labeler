import { LabelerServer } from '@skyware/labeler';

import { LABELS, getLabelsForHandle } from './constants.js';
import logger from './logger.js';
import { labelOperationsTotal } from './metrics.js';
import { LabelerConfig } from './types.js';

export class LabelerContext {
  public server: LabelerServer;
  public config: LabelerConfig;

  constructor(config: LabelerConfig) {
    this.config = config;
    this.server = new LabelerServer({ did: config.did, signingKey: config.signingKey });

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

  public createLabel(did: string, likeRkey: string, record: { subject: { uri: string } }) {
    logger.info(`[${this.config.did}] Received like (rkey: ${likeRkey}) from ${did}`);

    if (likeRkey === 'self') {
      logger.info(`[${this.config.did}] ${did} liked the labeler. Returning.`);
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
          `[${this.config.did}] New label not found: post rkey ${postRkey} (like rkey ${likeRkey}). Likely liked a post that's not one for labels.`,
        );
      }
      return;
    }
    logger.info(`[${this.config.did}] New label: ${newLabel.identifier} (post rkey: ${postRkey})`);

    try {
      this.server.createLabel({ uri: did, val: newLabel.identifier });

      // Store mapping: like record rkey -> identifier
      this.server.db
        .prepare('INSERT OR REPLACE INTO like_labels (rkey, did, labeler_did, identifier) VALUES (?, ?, ?, ?)')
        .run(likeRkey, did, this.config.did, newLabel.identifier);

      logger.info(`[${this.config.did}] Successfully labeled ${did} with ${newLabel.identifier}`);
      labelOperationsTotal.inc({
        action: 'add',
        status: 'success',
        labeler_did: this.config.did,
        identifier: newLabel.identifier,
      });
    } catch (error) {
      logger.error(`[${this.config.did}] Error in createLabel: ${error}`);
      labelOperationsTotal.inc({
        action: 'add',
        status: 'failure',
        labeler_did: this.config.did,
        identifier: newLabel.identifier,
      });
    }
  }

  public deleteLabel(did: string, rkey: string) {
    logger.info(`[${this.config.did}] Received unlike (rkey: ${rkey}) from ${did}`);

    const mapping = this.server.db
      .prepare('SELECT identifier FROM like_labels WHERE rkey = ? AND did = ? AND labeler_did = ?')
      .get(rkey, did, this.config.did) as { identifier: string } | undefined;

    if (!mapping) {
      logger.info(`[${this.config.did}] No label mapping found for rkey ${rkey}. Doing nothing.`);
      return;
    }

    try {
      this.server.createLabels({ uri: did }, { negate: [mapping.identifier] });
      this.server.db.prepare('DELETE FROM like_labels WHERE rkey = ?').run(rkey);

      logger.info(`[${this.config.did}] Successfully removed label ${mapping.identifier} from ${did}`);
      labelOperationsTotal.inc({
        action: 'remove',
        status: 'success',
        labeler_did: this.config.did,
        identifier: mapping.identifier,
      });
    } catch (error) {
      logger.error(`[${this.config.did}] Error in deleteLabel: ${error}`);
      labelOperationsTotal.inc({
        action: 'remove',
        status: 'failure',
        labeler_did: this.config.did,
        identifier: mapping.identifier,
      });
    }
  }
}
