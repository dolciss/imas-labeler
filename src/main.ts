import { CommitCreateEvent, CommitDeleteEvent, Jetstream } from '@skyware/jetstream';
import fs from 'node:fs';

import {
  CURSOR_UPDATE_INTERVAL,
  FIREHOSE_URL,
  METRICS_HOST,
  METRICS_PORT,
  WANTED_COLLECTION,
  getLabelerConfigs,
} from './config.js';
import { LabelerContext } from './label.js';
import logger from './logger.js';
import { startMetricsServer } from './metrics.js';

let cursor = 0;
let cursorUpdateInterval: NodeJS.Timeout;

function epochUsToDateTime(cursor: number): string {
  return new Date(cursor / 1000).toISOString();
}

try {
  logger.info('Trying to read cursor from cursor.txt...');
  cursor = Number(fs.readFileSync('cursor.txt', 'utf8'));
  logger.info(`Cursor found: ${cursor} (${epochUsToDateTime(cursor)})`);
} catch (error) {
  if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
    cursor = Math.floor(Date.now() * 1000);
    logger.info(`Cursor not found in cursor.txt, setting cursor to: ${cursor} (${epochUsToDateTime(cursor)})`);
    fs.writeFileSync('cursor.txt', cursor.toString(), 'utf8');
  } else {
    logger.error(error);
    process.exit(1);
  }
}

const jetstream = new Jetstream({
  wantedCollections: [WANTED_COLLECTION],
  endpoint: FIREHOSE_URL,
  cursor: cursor,
});

// Setup Labelers
const configs = getLabelerConfigs();
const labelers: LabelerContext[] = [];

if (configs.length === 0) {
  logger.error('No labeler configurations found. Please check .env or accounts.json');
  process.exit(1);
}

for (const config of configs) {
  logger.info(`Initializing labeler for ${config.did}`);
  const context = new LabelerContext(config);
  labelers.push(context);
}

jetstream.on('open', () => {
  logger.info(
    `Connected to Jetstream at ${FIREHOSE_URL} with cursor ${jetstream.cursor} (${epochUsToDateTime(jetstream.cursor!)})`,
  );
  cursorUpdateInterval = setInterval(() => {
    if (jetstream.cursor) {
      const diffMs = (Date.now() * 1000 - jetstream.cursor) / 1000;
      logger.info(
        `Cursor updated to: ${jetstream.cursor} (${epochUsToDateTime(jetstream.cursor)} : ${diffMs}ms delay)`,
      );
      fs.writeFile('cursor.txt', jetstream.cursor.toString(), (err) => {
        if (err) logger.error(err);
      });
    }
  }, CURSOR_UPDATE_INTERVAL);
});

jetstream.on('close', () => {
  clearInterval(cursorUpdateInterval);
  logger.info('Jetstream connection closed.');
});

jetstream.on('error', (error) => {
  logger.error(`Jetstream error: ${error.message}`);
});

jetstream.onCreate(WANTED_COLLECTION, (event: CommitCreateEvent<typeof WANTED_COLLECTION>) => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (event.commit?.record?.subject?.uri) {
    const subjectUri = event.commit.record.subject.uri;

    // Find which labeler this event targets
    for (const labeler of labelers) {
      if (subjectUri.includes(labeler.config.did)) {
        labeler.createLabel(event.did, event.commit.rkey, event.commit.record);
      }
    }
  }
});

jetstream.onDelete(WANTED_COLLECTION, (event: CommitDeleteEvent<typeof WANTED_COLLECTION>) => {
  for (const labeler of labelers) {
    labeler.deleteLabel(event.did, event.commit.rkey);
  }
});

const metricsServer = startMetricsServer(METRICS_PORT, METRICS_HOST);

for (const labeler of labelers) {
  const port = labeler.config.port ?? 4100;
  const host = labeler.config.host ?? '127.0.0.1';

  labeler.server.app.listen({ port, host }, (error, address) => {
    if (error) {
      logger.error(`Error starting server for ${labeler.config.did}: %s`, error);
    } else {
      logger.info(`Labeler server for ${labeler.config.did} listening on ${address}`);
    }
  });
}

jetstream.start();

function shutdown() {
  try {
    logger.info('Shutting down gracefully...');
    fs.writeFileSync('cursor.txt', jetstream.cursor!.toString(), 'utf8');
    jetstream.close();
    for (const labeler of labelers) {
      labeler.server.stop();
    }
    metricsServer.close();
  } catch (error) {
    logger.error(`Error shutting down gracefully: ${error}`);
    process.exit(1);
  }
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
