import { type ComAtprotoLabelDefs } from '@atproto/api';
import { type LoginCredentials, setLabelerLabelDefinitions } from '@skyware/labeler/scripts';

import { PDS_URL, getLabelerConfigs } from './config.js';
import { getLabelsForHandle } from './constants.js';
import logger from './logger.js';

const configs = getLabelerConfigs();

const targetHandle = process.argv[2];
const filteredConfigs =
  targetHandle ? configs.filter((c) => c.did === targetHandle || c.bskyHandle === targetHandle) : configs;

if (filteredConfigs.length === 0) {
  logger.error(`No configuration found for "${targetHandle}".`);
  process.exit(1);
}

for (const config of filteredConfigs) {
  if (!config.bskyHandle || !config.bskyPassword) {
    logger.warn(`Skipping ${config.did}: Missing BlueSky identifier or password.`);
    continue;
  }

  const loginCredentials: LoginCredentials = {
    pds: PDS_URL,
    identifier: config.bskyHandle,
    password: config.bskyPassword,
  };

  const labelDefinitions: ComAtprotoLabelDefs.LabelValueDefinition[] = [];

  const relevantLabels = getLabelsForHandle(config.bskyHandle);

  for (const label of relevantLabels) {
    const labelValueDefinition: ComAtprotoLabelDefs.LabelValueDefinition = {
      identifier: label.identifier,
      severity: 'inform',
      blurs: 'none',
      defaultSetting: 'warn',
      adultOnly: false,
      locales: label.locales,
    };

    labelDefinitions.push(labelValueDefinition);
  }

  try {
    logger.info(`Setting labels for ${config.bskyHandle}...`);
    await setLabelerLabelDefinitions(loginCredentials, labelDefinitions);
    logger.info(`Label definitions set successfully for ${config.bskyHandle}.`);
  } catch (error) {
    logger.error(`Error setting label definitions for ${config.bskyHandle}: ${error}`);
  }
}
