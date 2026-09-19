/** Public site URL for mailto bodies and share links. */
export const SITE_PUBLIC_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://dab-on-data.vercel.app";

/**
 * Shareable packet link for officials.
 * Prefer a Google Doc URL via NEXT_PUBLIC_PACKET_DOC_URL when available.
 */
export const PACKET_DOC_URL =
  process.env.NEXT_PUBLIC_PACKET_DOC_URL ??
  "https://docs.google.com/document/d/15ifSVpIhhCVNS66ktWEa4OfE3nwl3jU-/edit";
