import { IMAS_LABELS } from './labels/imas.js';
import { IMASCG_LABELS, IMASCG_FEEDS } from './labels/imascg.js';
import { IMASML_LABELS, IMASML_FEEDS } from './labels/imasml.js';
import { SIDEM_LABELS, SIDEM_FEEDS } from './labels/sidem.js';
import { GKMAS_LABELS } from './labels/gkmas.js';
import { Label, FeedDefinition } from './types.js';

export const LABELS: Label[] = [...IMAS_LABELS, ...IMASCG_LABELS, ...IMASML_LABELS, ...SIDEM_LABELS, ...GKMAS_LABELS];
export const FEEDS: FeedDefinition[] = [...IMASCG_FEEDS, ...IMASML_FEEDS, ...SIDEM_FEEDS];

export function getLabelsForHandle(handle: string | undefined): Label[] {
  return LABELS.filter((label) => {
    if (label.targetHandle && handle) {
      return label.targetHandle === handle;
    }
    return true;
  });
}

export function getFeedShortNamesForHandle(handle: string | undefined): string[] {
  const labels = getLabelsForHandle(handle);
  const shortNames = labels.flatMap((label) => label.feedShortNames ?? []);
  return [...new Set(shortNames)];
}

export function getLabelsByFeedShortName(handle: string | undefined, shortName: string): Label[] {
  const labels = getLabelsForHandle(handle);
  return labels.filter((label) => label.feedShortNames?.includes(shortName));
}

export function getFeedsForHandle(handle: string | undefined): FeedDefinition[] {
  return FEEDS.filter((feed) => {
    if (feed.targetHandle && handle) {
      return feed.targetHandle === handle;
    }
    return true;
  });
}
