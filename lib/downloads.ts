/** Public PDF downloads — three buckets. No .md / .docx. */

export type PdfDoc = {
  href: string;
  label: string;
};

export type PdfBucket = {
  id: string;
  title: string;
  blurb: string;
  items: PdfDoc[];
};

export const PDF_MEMO: PdfDoc = {
  href: "/docs/DAB_Energy_Trust_Memo.pdf",
  label: "Official memo (PDF)",
};

export const PDF_BYLAWS: PdfDoc = {
  href: "/docs/DAB_Energy_Trust_Bylaws.pdf",
  label: "Full bylaws (PDF)",
};

export const PDF_BUCKETS: PdfBucket[] = [
  {
    id: "summary",
    title: "Summary packet",
    blurb:
      "The compiled September 18, 2026 DAB on Data packet — a summary of the filing, not the letterhead originals.",
    items: [
      {
        href: "/docs/DABonData.pdf",
        label: "Compiled packet (PDF)",
      },
    ],
  },
  {
    id: "emails",
    title: "Example emails & letters",
    blurb:
      "Printable neighbor letter, spoken-remarks handout, and the same example email used on Get Involved.",
    items: [
      {
        href: "/docs/DAB_Resident_Proposal_Letter.pdf",
        label: "Resident proposal letter (PDF)",
      },
      {
        href: "/docs/DAB_Script_Handout.pdf",
        label: "Script / handout (PDF)",
      },
      {
        href: "/docs/DAB_Example_Email.pdf",
        label: "Example proposed email (PDF)",
      },
    ],
  },
  {
    id: "official",
    title: "Official memo & bylaws",
    blurb:
      "Letterhead originals for County Executive, County Council, and Planning Commission.",
    items: [PDF_MEMO, PDF_BYLAWS],
  },
];

export const ALL_PDF_DOCS: PdfDoc[] = PDF_BUCKETS.flatMap((bucket) => bucket.items);
