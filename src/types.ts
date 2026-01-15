import { LabelValueDefinitionStrings } from '@atproto/api/dist/client/types/com/atproto/label/defs.js';

export interface Label {
  rkey: string;
  identifier: string;
  locales: LabelValueDefinitionStrings[];
  targetHandle?: string;
  feedShortNames?: string[];
}

export interface LabelerConfig {
  did: string;
  signingKey: string;
  host?: string;
  port?: number;
  hostName?: string;
  bskyHandle?: string;
  bskyPassword?: string;
}
