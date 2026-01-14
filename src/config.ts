import 'dotenv/config';
import fs from 'node:fs';

import { LabelerConfig } from './types.js';

export const PDS_URL = process.env.PDS_URL ?? 'https://bsky.social';
export const DEFAULT_LANGUAGE = process.env.DEFAULT_LANGUAGE ?? 'en';
export const POST_DATE = process.env.POST_DATE ? new Date(Date.parse(process.env.POST_DATE)) : new Date();
export const METRICS_PORT = process.env.METRICS_PORT ? Number(process.env.METRICS_PORT) : 4101;
export const FIREHOSE_URL = process.env.FIREHOSE_URL ?? 'wss://jetstream.atproto.tools/subscribe';
export const WANTED_COLLECTION = 'app.bsky.feed.like';
export const CURSOR_UPDATE_INTERVAL =
  process.env.CURSOR_UPDATE_INTERVAL ? Number(process.env.CURSOR_UPDATE_INTERVAL) : 60000;

export function getLabelerConfigs(): LabelerConfig[] {
  const configs: LabelerConfig[] = [];

  // Try to read from accounts.json
  if (fs.existsSync('accounts.json')) {
    try {
      const fileContent = fs.readFileSync('accounts.json', 'utf8');
      const jsonConfigs = JSON.parse(fileContent) as LabelerConfig[] | LabelerConfig;
      if (Array.isArray(jsonConfigs)) {
        configs.push(...jsonConfigs);
      } else {
        configs.push(jsonConfigs);
      }
    } catch (e) {
      console.error('Failed to parse accounts.json', e);
    }
  }

  if (configs.length === 0) {
    console.warn('No configurations found in accounts.json. Please ensure it exists and is valid.');
  }

  return configs;
}
