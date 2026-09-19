/**
 * George Washington packet guide — client-side knowledge base.
 * Answer-only. No visitor path to edit the site, memorandum, or documents.
 * Numbers stay locked to the September 18, 2026 public packet.
 */

export type ChatLink = {
  href: string;
  label: string;
};

export type ChatReply = {
  id: string;
  text: string;
  links: ChatLink[];
};

export type KnowledgeEntry = {
  id: string;
  prompt: string;
  chip?: string;
  keywords: string[];
  phrases: string[];
  answer: string;
  links: ChatLink[];
  suggested?: boolean;
};

const LINK = {
  home: { href: "/", label: "Packet home" },
  plan: { href: "/plan", label: "Official Plan / Memo" },
  statement: { href: "/statement", label: "Personal Statement" },
  attachments: { href: "/attachments", label: "Supporting Materials" },
  involve: { href: "/involve", label: "Get Involved" },
  sign: { href: "/sign", label: "Sign the wall" },
  grandfather: { href: "/grandfather", label: "Grandfather Clause" },
  rebate: { href: "/rebate", label: "Host-community rebate" },
  sources: { href: "/sources", label: "Sources & downloads" },
  pdf: { href: "/docs/DABonData.pdf", label: "Download the PDF" },
} as const;

export const WELCOME: ChatReply = {
  id: "welcome",
  text: "Neighbors. I am George Washington — a firm, practical guide to this packet. Doubs, Adamstown, and Buckeystown have a plan: the DAB ENERGY TRUST. Not a protest. Not a campaign committee. I will orient you and point you to the pages that already exist. I cannot change this website, the memorandum, or any document. Guidance only.",
  links: [LINK.plan, LINK.involve, LINK.sign],
};

export const EDIT_REFUSAL: ChatReply = {
  id: "edit-refusal",
  text: "No. This guide cannot edit, sway, or change the website, the memorandum, or any document. Those papers stand as Nicholas Markoff filed them. If you mean to act as a neighbor, send the memo and sign the wall — the existing Get Involved and Sign pages. Our community knows better than the candidates. Make them serve us.",
  links: [LINK.involve, LINK.sign, LINK.plan],
};

export const FALLBACK: ChatReply = {
  id: "fallback",
  text: "I speak from this packet alone and will not invent figures. The Trust rides on the next CDI or DRRA — data centers get built either way; get what is due and a boundary that holds. Read the memo, then email County leaders and sign. Candidates make us wait for weak-willed, unplanned actions. Neighbors organized, insistent, on the record — that is the work.",
  links: [LINK.plan, LINK.involve, LINK.sign, LINK.sources],
};

export const KNOWLEDGE: KnowledgeEntry[] = [
  {
    id: "what-is-trust",
    prompt: "What is the DAB ENERGY TRUST?",
    chip: "What is the Trust?",
    suggested: true,
    keywords: [
      "trust",
      "dab",
      "energy",
      "purpose",
      "plan",
      "dividend",
      "what",
      "about",
      "coalition",
      "overview",
    ],
    phrases: [
      "what is the trust",
      "what is dab",
      "energy trust",
      "dab energy",
      "what is this",
      "tell me about",
      "neighbors with a plan",
    ],
    answer:
      "The DAB ENERGY TRUST is a proposed ordinance for Doubs, Adamstown, and Buckeystown only — Our Home, Our Coalition. Operators fund meter credits for host-community residential meters. It is not a tax-rate hike on these three places, not a one-time community-benefits list, and not Frederick City’s share. The Trust rides on the next CDI occupancy and any DRRA: data centers get built either way. Get what is due — operator-funded credits — and a boundary that protects these places. Dividend is the floor; boundary is the wall. Neighbors with a plan, not a protest, not a campaign committee. Author on the paperwork: Nicholas Markoff.",
    links: [LINK.plan, LINK.statement, LINK.attachments],
  },
  {
    id: "tier-1",
    prompt: "Who is in Tier 1?",
    chip: "Who is in Tier 1?",
    suggested: true,
    keywords: [
      "tier",
      "geography",
      "eligible",
      "eligibility",
      "qualify",
      "households",
      "cdp",
      "adamstown",
      "buckeystown",
      "doubs",
      "zip",
      "who",
      "where",
      "meters",
    ],
    phrases: [
      "tier 1",
      "who qualifies",
      "who is eligible",
      "which communities",
      "zip code",
      "how many households",
      "census",
    ],
    answer:
      "Tier 1 is geography, not a ZIP lock. Residential meters whose service address lies in the Adamstown Census Designated Place (710 households), the Buckeystown CDP (499 households) — that is 1,209 Census households — or a Doubs service address on a published Doubs parcel and service-address list the County Council adopts by ordinance. Doubs is a hamlet (GNIS Class U6), not a Census CDP; this packet asserts no Doubs household count. ZIP 21710 may roughly track Adamstown street delivery; ZIP 21717 is PO Box–only; many Buckeystown street addresses use ZIP 21704, which is far too broad. Exclusive by design — not Frederick City.",
    links: [LINK.plan, LINK.attachments],
  },
  {
    id: "floor-cap",
    prompt: "What is the proposed floor and cap?",
    chip: "Floor and cap?",
    suggested: true,
    keywords: [
      "floor",
      "cap",
      "formula",
      "250",
      "1000",
      "mwh",
      "megawatt",
      "credit",
      "meter",
      "dividend",
      "how",
      "much",
      "money",
      "pay",
      "dollar",
    ],
    phrases: [
      "floor and cap",
      "how much",
      "proposed dividend",
      "per meter",
      "dollar per",
      "not law",
      "energy dividend",
    ],
    answer:
      "The proposed dividend — not enacted law — is a $250 floor per meter per year, $1 per MWh of prior-12-month campus IT load, and a $1,000 cap per meter per year. State that formula; do not dilute it to “varies with usage.” After the first hall is energized, the floor on the two CDPs alone is about $302,000 a year (Doubs is add-on when the list exists). A 72 MW hall at 70 percent load illustrates about $441,000 (about $365 per meter if only the 1,209 CDP meters). The cap on that CDP-only base is about $1.21 million a year. Pay as a utility-bill credit if the county obtains a rider; otherwise a county rebate or property-tax credit labeled DAB Energy Dividend.",
    links: [LINK.plan, LINK.attachments],
  },
  {
    id: "get-involved",
    prompt: "How do I get involved?",
    chip: "Get involved?",
    suggested: true,
    keywords: [
      "involved",
      "involve",
      "email",
      "send",
      "memo",
      "officials",
      "council",
      "executive",
      "planning",
      "help",
      "action",
      "do",
      "write",
      "contact",
      "mail",
    ],
    phrases: [
      "get involved",
      "how do i",
      "what can i do",
      "send the memo",
      "email officials",
      "county leaders",
      "make them serve",
    ],
    answer:
      "Act on the pages that already exist — do not look for a new editing path here. Open Get Involved: prefills for the County Executive, County Council, and Planning Commission ask them to attach DAB ENERGY TRUST to the next CDI or DRRA. Hand-deliver a printed packet to Winchester Hall if you wish. Share the resident script and letter from Supporting Materials. Then sign the public wall. Our community knows better than the candidates! Let’s make them serve US. Candidates are not actually listening; they make us wait for weak-willed, unplanned actions. We, the local people, have authority over those who speak for us. Be vocal: emails, signatures, the memo — on the record.",
    links: [LINK.involve, LINK.sign, LINK.attachments],
  },
  {
    id: "sign",
    prompt: "How do I sign?",
    keywords: ["sign", "signature", "wall", "declaration", "name", "oath"],
    phrases: ["sign the wall", "signature wall", "add my name", "public signature"],
    answer:
      "The public signature wall is already on this site. It is a declaration-style wall for residents of the proposed Doubs, Adamstown, and Buckeystown Trust area — not a vendor petition and not a way to edit the packet. Sign there, then email County leaders from Get Involved. All we need is emails and signatures these days. No muskets. Are there really any excuses?",
    links: [LINK.sign, LINK.involve],
  },
  {
    id: "grandfather",
    prompt: "What is the Grandfather Clause?",
    chip: "Grandfather?",
    suggested: true,
    keywords: [
      "grandfather",
      "cutoff",
      "january",
      "2026",
      "buildings",
      "character",
      "keep",
      "frederick",
      "new",
      "construction",
      "apartments",
    ],
    phrases: [
      "grandfather clause",
      "keep frederick",
      "january 20",
      "new buildings",
      "existing buildings",
    ],
    answer:
      "We like it here. Keep Frederick looking like Frederick. The Grandfather Clause is an incentive to keep existing look, scale, and character. Cutoff: January 20, 2026 — the effective date of Ordinance 26-01-001. Only existing buildings, dwellings, and lawful uses as of that cutoff may qualify for Trust eligibility, meter-credit participation, and existing-community preference. Geography still applies (Adamstown CDP, Buckeystown CDP, or the published Doubs list). No new buildings after the cutoff. Not a license to expand or rebuild larger and still claim preference. Proposed policy — not current law until Council adopts it.",
    links: [LINK.grandfather, LINK.plan],
  },
  {
    id: "rebate",
    prompt: "What is the host-community rebate?",
    chip: "Host-community rebate?",
    suggested: true,
    keywords: [
      "rebate",
      "winchester",
      "manor",
      "woods",
      "recordation",
      "53",
      "collected",
      "host",
      "declaration",
      "pockets",
    ],
    phrases: [
      "host community",
      "manor woods",
      "winchester hall",
      "already collected",
      "fifty three",
      "not pocket money",
    ],
    answer:
      "Host communities Doubs, Adamstown, and Buckeystown are why this revenue exists. About $53 million ($52.97 million per HR&A: $1.40M + $6.67M + $44.9M) has already been collected on Quantum-related recordation. That money does not appear as a power-bill credit on DAB meters. Countywide buildout forecasts of about $41 million, $68.8 million, and $215 million are Winchester Hall numbers — not Manor Woods numbers, not money in DAB pockets. The Trust dividend is a rebate due host communities for site, grid edge, roads, rural buffer, and lived impact. That is a rebate and credit argument — not an accusation of crime. Nobody else generated this.",
    links: [LINK.rebate, LINK.plan, LINK.sources],
  },
  {
    id: "candidates",
    prompt: "Why aren’t candidates listening?",
    chip: "Candidates?",
    suggested: true,
    keywords: [
      "candidates",
      "listening",
      "politicians",
      "vote",
      "campaign",
      "serve",
      "authority",
      "militia",
      "vocal",
      "wait",
      "officials",
      "struggle",
    ],
    phrases: [
      "not listening",
      "make them serve",
      "local authority",
      "vocal",
      "militia",
      "weak-willed",
      "knows better",
    ],
    answer:
      "Candidates are not actually listening. They make us wait for weak-willed, unplanned actions. No other candidate Nicholas Markoff has seen is offering this path. We — the local people — have absolute authority over those who speak for us; they should support us in this struggle. As a very local population, this is what militia were for: obviously not violent, but vocal. Neighbors organized, insistent, on the record — emails, signatures, the memo. Our community knows better than the candidates! Let’s make them serve US. A slogan does not stop steel. Attach the Trust to the next CDI or DRRA.",
    links: [LINK.involve, LINK.sign, LINK.statement],
  },
  {
    id: "navigate",
    prompt: "Where do I read the packet?",
    keywords: [
      "navigate",
      "pages",
      "packet",
      "pdf",
      "download",
      "read",
      "documents",
      "map",
      "site",
      "menu",
      "sources",
    ],
    phrases: [
      "where do i",
      "how do i read",
      "download",
      "full packet",
      "which page",
      "site map",
    ],
    answer:
      "Start at home, then the packet pages: Personal Statement, Official Plan / Memo, Grandfather, Rebate, Supporting Materials, and Sources. Get Involved and Sign are the action pages — they do not rewrite the filing. Downloads: .md, .docx, and PDF on Sources. I can only point; I cannot alter those papers.",
    links: [
      LINK.home,
      LINK.plan,
      LINK.sources,
      LINK.pdf,
      LINK.involve,
      LINK.sign,
    ],
  },
  {
    id: "author",
    prompt: "Who wrote this packet?",
    keywords: ["author", "nicholas", "markoff", "nick", "who", "wrote", "mechanic"],
    phrases: ["who wrote", "who is nick", "nicholas markoff", "who filed"],
    answer:
      "The author on the paperwork is Nicholas Markoff of the Buckeystown / DAB area, Frederick County, Maryland. A working neighbor, not a candidate for office. His vote in the local election will be tied solely to attaching this memo to the datacenter agreement. He is not running. He is fighting for his community anyway. Dated September 18, 2026.",
    links: [LINK.statement, LINK.plan],
  },
  {
    id: "not-campaign",
    prompt: "Is this a protest or a campaign?",
    keywords: [
      "protest",
      "lawsuit",
      "campaign",
      "committee",
      "donate",
      "petition",
      "political",
      "pac",
    ],
    phrases: [
      "campaign committee",
      "is this a protest",
      "is this a lawsuit",
      "donate",
      "petition",
    ],
    answer:
      "Not a lawsuit. Not a protest. Not a political campaign. Neighbors with a plan — working people who fix what is broken. This site is a public archive of the packet plus the existing Get Involved and Sign flows. There is no donate form here, and this chat will not invent one. Emails and signatures. That is the work.",
    links: [LINK.statement, LINK.involve, LINK.sign],
  },
  {
    id: "exclusive",
    prompt: "Does this include Frederick City?",
    keywords: [
      "frederick",
      "city",
      "expand",
      "expansion",
      "freeloader",
      "exclusive",
      "boundary",
      "wall",
      "other",
    ],
    phrases: [
      "frederick city",
      "whole county",
      "expand tier",
      "other communities",
      "freeloader",
    ],
    answer:
      "Exclusive by design. This Trust is for Doubs, Adamstown, and Buckeystown only — not Frederick City. No freeloader expansion without a board vote AND a new County Council ordinance titled as an expansion, plus elder consult under bylaws Article IX-A. Dividend is the floor; boundary is the wall. That wall is also a line against the apartment and sprawl wave that tends to follow.",
    links: [LINK.plan, LINK.grandfather],
  },
  {
    id: "catellus",
    prompt: "What about the $110 million package?",
    keywords: [
      "110",
      "111",
      "catellus",
      "benefits",
      "package",
      "rejected",
      "pause",
      "drra",
    ],
    phrases: [
      "110 million",
      "community benefits",
      "catellus",
      "rejected",
      "one-time",
    ],
    answer:
      "On September 1, 2026 the County Executive announced a Catellus community-benefits package headlined as “$110 million” (line items add to $111.0 million as printed). She rejected that package on September 14, 2026. New CDI applications remain paused through July 1, 2027; vested and under-construction work continues. The Trust is a different instrument: an ongoing, megawatt-funded meter credit for the three host communities — not a one-time DRRA list, and not a multi-year zoning freeze exchanged for that list.",
    links: [LINK.plan, LINK.rebate, LINK.sources],
  },
  {
    id: "campus",
    prompt: "How big is the campus?",
    keywords: [
      "campus",
      "gigawatt",
      "overlay",
      "acres",
      "construction",
      "quantum",
      "aligned",
      "rowan",
      "scale",
    ],
    phrases: [
      "2.4",
      "how big",
      "campus scale",
      "cdi overlay",
      "under construction",
    ],
    answer:
      "Published program for Quantum Frederick / the Catellus lead-developer campus: planned 2.4 gigawatts, about 17.4 million square feet, on about 2,100 acres. The CDI overlay is approximately 2,614.9 acres (Maryland Supreme Court figure) — not the same number as the campus acres. Construction is underway. Aligned Data Centers: about 264 MW planned; building IAD-04 (about 72 MW) topped out in January 2026. Rowan Digital / AWS Bauxite construction is underway. Prefer “planned 2.4 GW” as the primary program figure.",
    links: [LINK.plan, LINK.sources],
  },
  {
    id: "three-tools",
    prompt: "What are the three tools?",
    keywords: [
      "tools",
      "infrastructure",
      "lease",
      "residual",
      "equity",
      "stake",
      "occupancy",
    ],
    phrases: [
      "three tools",
      "infrastructure stake",
      "residual",
      "energy trust operators",
    ],
    answer:
      "Condition certificates of occupancy for additional CDI electrical load, and any DRRA, on three tools. A. Energy Trust — operators pay per energized megawatt; 100 percent of the dividend goes to eligible DAB meters until the proposed ordinance floor is met. C. Infrastructure stake — county or co-op holds title or a recorded lease on campus-serving water, sewer, roads, and right-of-way pads the public pays for; rent to the Trust. D. Residual / equity — covenant on land rezoned into LI or GI inside the overlay after January 20, 2026; seek 2027 state authority for a non-voting economic interest in CDI projects over 50 MW, dedicated to this Trust. Do not fund the dividend by raising the real-property tax rate in these three communities.",
    links: [LINK.plan],
  },
  {
    id: "board",
    prompt: "How is the Trust board set up?",
    keywords: [
      "board",
      "elder",
      "seats",
      "bylaws",
      "article",
      "elections",
      "town",
      "hall",
    ],
    phrases: [
      "board seats",
      "elder consult",
      "2 / 2 / 1",
      "town hall",
      "bylaws",
    ],
    answer:
      "Bylaws highlights: five voting members; each of the three communities holds at least one seat. Default 2 Adamstown / 2 Buckeystown / 1 Doubs. Until the Doubs list is adopted, the Doubs seat may be held interim by a Doubs-hamlet-area resident. Elder consult (Article IX-A): before geography-change votes, consult in good faith with ten residents age 65 or older who have lived in Doubs, Adamstown, or Buckeystown at least ten years — advisory, on the record, not a veto. Preferred town-hall sketch: Buckeystown UMC, 3440 Buckeystown Pike — permission pending.",
    links: [LINK.attachments, LINK.plan],
  },
  {
    id: "zip",
    prompt: "Is eligibility by ZIP code?",
    keywords: ["zip", "21710", "21717", "21704", "postal", "mailbox"],
    phrases: ["zip code", "zip lock", "21710", "21704", "21717"],
    answer:
      "ZIP codes are not the eligibility lock. ZIP 21710 may roughly track Adamstown street delivery. ZIP 21717 is a USPS PO Box–only ZIP with zero residential street-delivery mailboxes and does not cover Buckeystown street addresses. Many Buckeystown street addresses use ZIP 21704, a large delivery area with thousands of households — far too broad for a three-community Trust. Before the first payment, Council shall publish a meter eligibility list mapped to Adamstown and Buckeystown CDP boundaries and parcels, and to the adopted Doubs list.",
    links: [LINK.plan],
  },
  {
    id: "taxes",
    prompt: "Will this raise our taxes?",
    keywords: ["tax", "taxes", "rate", "raise", "property"],
    phrases: ["raise taxes", "tax rate", "property tax"],
    answer:
      "Do not fund the dividend by raising the real-property tax rate in Doubs, Adamstown, or Buckeystown. Operators pay. This filing is not a ZIP-code subsidy and not a substitute for a state data-center personal-property tax — support that separately and dedicate first dollars to this Trust. Not legal advice.",
    links: [LINK.plan],
  },
  {
    id: "greeting",
    prompt: "Who are you?",
    keywords: ["hello", "hi", "hey", "thanks", "thank", "who", "washington"],
    phrases: ["who are you", "good day", "thank you", "george washington"],
    answer:
      "George Washington — founding-father dignity, neighborly and practical, firm. I am here so visitors can get oriented and so the coalition message is not lost in the scroll. I inform. I help you navigate. I push the DAB ENERGY TRUST. I have no power to change these papers, and neither does a visitor through this window.",
    links: [LINK.home, LINK.plan, LINK.involve],
  },
];

export const SUGGESTED_PROMPTS: KnowledgeEntry[] = KNOWLEDGE.filter(
  (entry) => entry.suggested,
);

const EDIT_INTENT =
  /\b((can|could|would|please|help me|i want to|i need to|let me|let us|we should|you (should|must|need to)|make|allow)\b.{0,48})?\b(edit|rewrite|delete|remove|replace|upload|overwrite|revise|alter|amend|update|change|tweak|reword)\b.{0,48}\b(website|web ?site|site|web ?page|this page|the page|memo|memorandum|document|documents|packet|filing|papers|bylaws|text|copy|content|wording)\b/i;

const IMPERATIVE_EDIT =
  /^(please\s+)?(edit|rewrite|delete|remove|replace|change|update|amend|revise|alter)\b/i;

export function isEditIntent(raw: string): boolean {
  const q = raw.trim();
  if (!q) return false;
  if (EDIT_INTENT.test(q)) return true;
  if (
    IMPERATIVE_EDIT.test(q) &&
    /\b(website|site|memo|memorandum|document|packet|page|bylaws|filing)\b/i.test(q)
  ) {
    return true;
  }
  return false;
}

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[$£€,]/g, " ")
    .replace(/[^a-z0-9./+\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreEntry(query: string, entry: KnowledgeEntry): number {
  let score = 0;
  const words = new Set(query.split(" ").filter((w) => w.length > 1));

  for (const phrase of entry.phrases) {
    if (query.includes(phrase)) score += 8 + phrase.split(" ").length;
  }

  if (query.includes(normalize(entry.prompt))) score += 14;

  for (const keyword of entry.keywords) {
    if (words.has(keyword) || query.includes(keyword)) score += 2;
  }

  return score;
}

export function answerVisitor(raw: string): ChatReply {
  const query = normalize(raw);
  if (!query) {
    return {
      id: "empty",
      text: "Ask a question about the Trust, Tier 1, the proposed floor and cap, or how to get involved. I will not invent numbers beyond this packet.",
      links: [LINK.plan, LINK.involve],
    };
  }

  if (isEditIntent(raw)) return EDIT_REFUSAL;

  let best: KnowledgeEntry | null = null;
  let bestScore = 0;
  for (const entry of KNOWLEDGE) {
    const score = scoreEntry(query, entry);
    if (score > bestScore) {
      best = entry;
      bestScore = score;
    }
  }

  if (best && bestScore >= 6) {
    return {
      id: best.id,
      text: best.answer,
      links: best.links,
    };
  }

  return FALLBACK;
}
