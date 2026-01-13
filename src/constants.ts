import { DeletePost, Label } from './types.js';

export const LABEL_LIMIT = 1;
// Define delete post rkeys here.
export const DELETE: DeletePost[] = [
  {
    rkey: 'insert-rkey-of-delete-post-here',
    targetHandle: 'bot1.bsky.social',
  },
];

export function getDeleteRkeyForHandle(handle: string | undefined): string | undefined {
  const deletePost = DELETE.find((d) => {
    if (d.targetHandle && handle) {
      return d.targetHandle === handle;
    }
    return true;
  });
  return deletePost?.rkey;
}
// Add 'targetHandle' to specify which account should host the label.
// If 'targetHandle' is omitted, the label implies it is shared or default.
export const LABELS: Label[] = [
  {
    rkey: 'insert-rkey-here',
    identifier: 'earth',
    locales: [
      { lang: 'en', name: 'Earth 🌎', description: 'Earth' },
      { lang: 'pt-BR', name: 'Terra 🌎', description: 'Terra' },
    ],
    targetHandle: 'bot1.bsky.social',
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'fire',
    locales: [
      { lang: 'en', name: 'Fire 🔥', description: 'Fire' },
      { lang: 'pt-BR', name: 'Fogo 🔥', description: 'Fogo' },
    ],
    targetHandle: 'bot1.bsky.social',
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'air',
    locales: [
      { lang: 'en', name: 'Air 💨', description: 'Air' },
      { lang: 'pt-BR', name: 'Ar 💨', description: 'Ar' },
    ],
    targetHandle: 'bot1.bsky.social',
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'water',
    locales: [
      { lang: 'en', name: 'Water 💧', description: 'Water' },
      { lang: 'pt-BR', name: 'Água 💧', description: 'Água' },
    ],
    targetHandle: 'bot1.bsky.social',
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'love',
    locales: [
      { lang: 'en', name: 'Love 💞', description: 'Love' },
      { lang: 'pt-BR', name: 'Amor 💞', description: 'Amor' },
    ],
    targetHandle: 'bot1.bsky.social',
  },
];

export function getLabelsForHandle(handle: string | undefined): Label[] {
  return LABELS.filter((label) => {
    if (label.targetHandle && handle) {
      return label.targetHandle === handle;
    }
    return true;
  });
}
