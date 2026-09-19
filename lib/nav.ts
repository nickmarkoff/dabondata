export const SITE = {
  title: "DAB ENERGY TRUST",
  subtitle: "Doubs · Adamstown · Buckeystown — Our Home, Our Coalition",
  coalition: "Doubs · Adamstown · Buckeystown — Our Home, Our Coalition",
  handle: "DAB on Data",
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

/** Six featured homepage cards only. */
export const FEATURED_CARDS: DocLink[] = [
  {
    href: "/statement",
    title: "Personal Statement",
    short: "Statement",
    blurb: "Nicholas Markoff — neighbors with a plan, not a campaign committee.",
  },
  {
    href: "/attachments#summary",
    title: "Plan summary",
    short: "Summary",
    blurb: "Who, how many, campus, floor/cap, rebate — the Summary table.",
  },
  {
    href: "/plan",
    title: "Memo and bylaws",
    short: "Plan",
    blurb:
      "Full Official Plan/Memo; bylaws highlights also under Supporting Materials.",
  },
  {
    href: "/attachments#handout",
    title: "Resident handouts",
    short: "Handout",
    blurb: "Resident handout / script for porch and neighbor share.",
  },
  {
    href: "/attachments#script",
    title: "Example script",
    short: "Script",
    blurb: "Spoken remarks / handout script from the packet — unchanged.",
  },
  {
    href: "/involve#example-email",
    title: "Example proposed email",
    short: "Email",
    blurb: "Sample message neighbors can send officials — same text the mail buttons use.",
  },
];

/** Homepage bullet links (not cards). */
export const OTHER_LINKS: DocLink[] = [
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
    href: "/sources",
    title: "Sources & Downloads",
    short: "Sources",
    blurb: "Download the September 18, 2026 packet (.md, .docx, .pdf).",
  },
  {
    href: "/involve",
    title: "How to Get Involved",
    short: "Get Involved",
    blurb: "Email County leaders — attach DAB ENERGY TRUST as a ride-on.",
  },
  {
    href: "/sign",
    title: "Public Signature Wall",
    short: "Sign",
    blurb: "Public cursive wall — Declaration style. Neighbors with a plan.",
  },
];

/** Packet sections used by SiteNav (short labels). */
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
