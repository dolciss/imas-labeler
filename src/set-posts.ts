import { Bot } from '@skyware/bot';

import { getLabelerConfigs } from './config.js';
import { getLabelsForHandle } from './constants.js';

const bot = new Bot();
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

process.stdout.write('WARNING: This will delete all posts in your profile. Are you sure you want to continue? (y/n) ');

const answer = await new Promise((resolve) => {
  process.stdin.once('data', (data) => {
    resolve(data.toString().trim().toLowerCase());
  });
});

if (answer === 'y') {
  const postsToDelete = await bot.profile.getPosts();
  for (const post of postsToDelete.posts) {
    await post.delete();
  }
  console.log('All posts have been deleted.');
} else {
  console.log('Operation cancelled.');
  process.exit(0);
}

const post = await bot.post({
  text: 'Like the replies to this post to receive labels.',
  threadgate: { allowLists: [] },
});

const labelNames = getLabelsForHandle(targetConfig.bskyHandle).map((label) =>
  label.locales.map((locale) => locale.name).join(' | '),
);
const labelRkeys: Record<string, string> = {};
for (const labelName of labelNames) {
  const labelPost = await post.reply({ text: labelName });
  labelRkeys[labelName] = labelPost.uri.split('/').pop()!;
}

console.log(`Label rkeys for ${targetConfig.bskyHandle}:`);
for (const [name, rkey] of Object.entries(labelRkeys)) {
  console.log(`    name: '${name}',`);
  console.log(`    rkey: '${rkey}',`);
}

const deletePost = await bot.post({ text: 'Like this post to delete all labels.' });
const deletePostRkey = deletePost.uri.split('/').pop()!;
console.log('Delete post rkey:');
console.log('Add the following to DELETE array in constants.ts:');
console.log(`  {`);
console.log(`    rkey: '${deletePostRkey}',`);
if (targetConfig.bskyHandle) {
  console.log(`    targetHandle: '${targetConfig.bskyHandle}',`);
}
console.log(`  },`);

process.exit(0);
