import { GKMAS_LABELS } from './labels/gkmas.js';
import { SIDEM_LABELS, SIDEM_FEEDS } from './labels/sidem.js';
import { Label, FeedDefinition } from './types.js';

export const LABELS: Label[] = [...SIDEM_LABELS, ...GKMAS_LABELS];
export const FEEDS: FeedDefinition[] = [...SIDEM_FEEDS];

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
