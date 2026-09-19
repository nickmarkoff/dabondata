export const SITE = {
  title: "DAB on Data",
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
    title: "Supporting Materials",
    short: "Attachments",
    blurb: "Bylaws highlights, resident handout and script, proposal letter.",
  },
  {
    href: "/sources",
    title: "Sources & Downloads",
    short: "Sources",
    blurb: "Download the September 18, 2026 packet (.md, .docx, .pdf).",
  },
];

/** Action pages (not packet docs). */
export const ACTIONS: DocLink[] = [
  {
    href: "/involve",
    title: "How to Get Involved",
    short: "Get Involved",
    blurb: "Email County leaders — attach DAB ENERGY TRUST as a ride-on to the next datacenter / DRRA agreement.",
  },
  {
    href: "/sign",
    title: "Public Signature Wall",
    short: "Sign",
    blurb: "Public cursive wall — Declaration style. Neighbors with a plan.",
  },
];
