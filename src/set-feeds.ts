import { Bot } from '@skyware/bot';

import { DEFAULT_LANGUAGE, PDS_URL, getLabelerConfigs } from './config.js';
import { getFeedsForHandle } from './constants.js';

const bot = new Bot({ service: PDS_URL, langs: [DEFAULT_LANGUAGE] });
const configs = getLabelerConfigs();

const targetHandle = process.argv[2];
const targetConfig =
  targetHandle ? configs.find((c) => c.did === targetHandle || c.bskyHandle === targetHandle) : configs[0];

if (!targetConfig) {
  console.error('No labeler configuration found. Please check accounts.json or .env');
  process.exit(1);
}

if (!targetConfig.bskyHandle || !targetConfig.bskyPassword) {
  console.error(`Missing credentials for ${targetConfig.did}`);
  process.exit(1);
}
if (!targetConfig.hostName) {
  console.error(`hostName is missing for ${targetConfig.bskyHandle}. This is required for did:web.`);
  process.exit(1);
}

console.log(`Using account: ${targetConfig.bskyHandle}`);

try {
  await bot.login({
    identifier: targetConfig.bskyHandle,
    password: targetConfig.bskyPassword,
  });
} catch (error) {
  console.error('Error logging in: ', error);
  process.exit(1);
}

const feeds = getFeedsForHandle(targetConfig.bskyHandle);

for (const feed of feeds) {
  console.log(`Registering feed: ${feed.shortName} (${feed.displayName})`);
  await bot.putRecord(
    'app.bsky.feed.generator',
    {
      did: `did:web:${targetConfig.hostName}`,
      displayName: feed.displayName,
      description: feed.description,
      createdAt: new Date().toISOString(),
    },
    feed.shortName,
  );
}

console.log('Done!');
process.exit(0);
