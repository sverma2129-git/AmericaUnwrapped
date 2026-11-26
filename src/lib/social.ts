import type { Metadata } from 'next';

/** Where the site lives, so link previews get absolute URLs. */
export const SITE_ORIGIN = process.env.GITHUB_ACTIONS ? 'https://sverma2129-git.github.io' : 'http://localhost:3000';
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/**
 * The link preview shown when a page is shared in Google Classroom, a group chat or social media.
 * `card` names an image in public/og (1200×630): 'site', 'study-guide' or a chapter id.
 */
export function socialMeta(title: string, description: string, card = 'site'): Pick<Metadata, 'openGraph' | 'twitter'> {
  const image = `${BASE_PATH}/og/${card}.jpg`;
  return {
    openGraph: {
      title,
      description,
      siteName: 'America Unwrapped',
      type: 'website',
      locale: 'en_US',
      images: [{ url: image, width: 1200, height: 630, alt: `${title}. America Unwrapped` }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}
