export const SITE = {
  title: "DABonData",
  subtitle: "DAB ENERGY TRUST",
  coalition: "Doubs · Adamstown · Buckeystown — Our Home, Our Coalition",
  tag: "We like it here. Keep Frederick looking like Frederick.",
  date: "Sept 18, 2026",
  footer:
    "Compiled packet for County Executive, County Council, Planning Commission, and residents. Not a campaign committee filing.",
  author: "Nicholas Markoff",
} as const;

export type DocLink = {
  href: string;
  title: string;
  short: string;
  blurb: string;
};

export const DOCS: DocLink[] = [
  {
    href: "/statement",
    title: "Personal Statement",
    short: "Statement",
    blurb: "Nicholas Markoff — neighbors with a plan, not a campaign committee.",
  },
  {
    href: "/plan",
    title: "Official Plan / Memo",
    short: "Plan",
    blurb: "DAB ENERGY TRUST request, geography, money, dividend, zoning hook, prayer.",
  },
  {
    href: "/grandfather",
    title: "Grandfather Clause",
    short: "Grandfather",
    blurb: "Keep this version of Frederick — cutoff January 20, 2026.",
  },
  {
    href: "/rebate",
    title: "Host-Community Rebate",
    short: "Rebate",
    blurb: "Winchester Hall numbers came off Manor Woods ground.",
  },
  {
    href: "/attachments",
    title: "Attachments",
    short: "Attachments",
    blurb: "Bylaws highlights, resident handout/script, proposal letter, change log.",
  },
  {
    href: "/sources",
    title: "Sources",
    short: "Sources",
    blurb: "Selected authorities for the September 18, 2026 compilation.",
  },
];
