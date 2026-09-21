/** Public site URL for mailto bodies and share links. */
export const SITE_PUBLIC_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://dab-on-data.vercel.app";

/**
 * Public compiled packet PDF. Absolute so mailto bodies work in an email app.
 * The same file is served same-origin at /docs/DABonData.pdf.
 */
export const PACKET_PDF_URL = `${SITE_PUBLIC_URL}/docs/DABonData.pdf`;
