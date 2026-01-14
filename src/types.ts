import { LabelValueDefinitionStrings } from '@atproto/api/dist/client/types/com/atproto/label/defs.js';

export interface Label {
  rkey: string;
  identifier: string;
  locales: LabelValueDefinitionStrings[];
  targetHandle?: string;
}

export interface LabelerConfig {
  did: string;
  signingKey: string;
  host?: string;
  port?: number;
  bskyHandle?: string;
  bskyPassword?: string;
}
