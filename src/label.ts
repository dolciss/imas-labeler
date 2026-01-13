import { ComAtprotoLabelDefs } from '@atcute/client/lexicons';
import { LabelerServer } from '@skyware/labeler';

import { DELETE, LABELS, LABEL_LIMIT, getDeleteRkeyForHandle, getLabelsForHandle } from './constants.js';
import logger from './logger.js';
import { LabelerConfig } from './types.js';

export class LabelerContext {
  public server: LabelerServer;
  public config: LabelerConfig;

  constructor(config: LabelerConfig) {
    this.config = config;
    this.server = new LabelerServer({ did: config.did, signingKey: config.signingKey });
  }

  public processLabel(did: string, rkey: string) {
    logger.info(`[${this.config.did}] Received rkey: ${rkey} for ${did}`);

    if (rkey === 'self') {
      logger.info(`[${this.config.did}] ${did} liked the labeler. Returning.`);
      return;
    }
    try {
      const labels = this.fetchCurrentLabels(did);

      const deleteRkey = getDeleteRkeyForHandle(this.config.bskyHandle);
      if (deleteRkey && rkey === deleteRkey) {
        this.deleteAllLabels(did, labels);
      } else {
        this.addOrUpdateLabel(did, rkey, labels);
      }
    } catch (error) {
      logger.error(`[${this.config.did}] Error in processLabel: ${error}`);
    }
  }

  private fetchCurrentLabels(did: string) {
    const query = this.server.db
      .prepare<string[]>(`SELECT * FROM labels WHERE uri = ?`)
      .all(did) as ComAtprotoLabelDefs.Label[];

    const labels = query.reduce((set, label) => {
      if (!label.neg) set.add(label.val);
      else set.delete(label.val);
      return set;
    }, new Set<string>());

    if (labels.size > 0) {
      logger.info(`[${this.config.did}] Current labels: ${Array.from(labels).join(', ')}`);
    }

    return labels;
  }

  private deleteAllLabels(did: string, labels: Set<string>) {
    const labelsToDelete: string[] = Array.from(labels);

    if (labelsToDelete.length === 0) {
      logger.info(`[${this.config.did}] No labels to delete`);
    } else {
      logger.info(`[${this.config.did}] Labels to delete: ${labelsToDelete.join(', ')}`);
      try {
        this.server.createLabels({ uri: did }, { negate: labelsToDelete });
        logger.info(`[${this.config.did}] Successfully deleted all labels`);
      } catch (error) {
        logger.error(`[${this.config.did}] Error deleting all labels: ${error}`);
      }
    }
  }

  private addOrUpdateLabel(did: string, rkey: string, labels: Set<string>) {
    const relevantLabels = getLabelsForHandle(this.config.bskyHandle);
    const newLabel = relevantLabels.find((label) => label.rkey === rkey);

    if (!newLabel) {
      // Check if it exists at all but filtered out
      const anyLabel = LABELS.find((label) => label.rkey === rkey);
      if (!anyLabel) {
        logger.warn(
          `[${this.config.did}] New label not found: ${rkey}. Likely liked a post that's not one for labels.`,
        );
      }
      return;
    }
    logger.info(`[${this.config.did}] New label: ${newLabel.identifier}`);

    if (labels.size >= LABEL_LIMIT) {
      try {
        this.server.createLabels({ uri: did }, { negate: Array.from(labels) });
        logger.info(`[${this.config.did}] Successfully negated existing labels: ${Array.from(labels).join(', ')}`);
      } catch (error) {
        logger.error(`[${this.config.did}] Error negating existing labels: ${error}`);
      }
    }

    try {
      this.server.createLabel({ uri: did, val: newLabel.identifier });
      logger.info(`[${this.config.did}] Successfully labeled ${did} with ${newLabel.identifier}`);
    } catch (error) {
      logger.error(`[${this.config.did}] Error adding new label: ${error}`);
    }
  }
}
