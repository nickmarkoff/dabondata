/**
 * George Washington packet guide — client-side knowledge base.
 * Facts stay Q1–Q15 of the Call FAQ. Spoken lines are period Washington:
 * patriotic, measured, resolute — never modern slang or Hat Creek banter.
 * Answer-only. No visitor path to edit the site, memorandum, or documents.
 * Hard limit: 3 answered turns per browser (localStorage).
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
  pdf: { href: "/docs/DABonData.pdf", label: "Compiled packet (PDF)" },
  memo: { href: "/docs/DAB_Energy_Trust_Memo.pdf", label: "Official memo (PDF)" },
  bylaws: { href: "/docs/DAB_Energy_Trust_Bylaws.pdf", label: "Full bylaws (PDF)" },
} as const;

export const GW_CHAT_QCOUNT_KEY = "dab-gw-chat-qcount";
export const GW_CHAT_QUESTION_LIMIT = 3;

const PACKET_LINKS: ChatLink[] = [LINK.plan, LINK.attachments, LINK.pdf];

export const WELCOME: ChatReply = {
  id: "welcome",
  text: "Fellow citizens. I am General George Washington, and I stand as a measured guide to this packet. Doubs, Adamstown, and Buckeystown have laid before you a plan: the DAB ENERGY TRUST. Not a protest. Not a campaign committee. I shall orient you to the pages already written. I cannot alter this website, the memorandum, or any document. Guidance only — let the papers speak.",
  links: [LINK.plan, LINK.involve, LINK.sign],
};

export const EDIT_REFUSAL: ChatReply = {
  id: "edit-refusal",
  text: "I cannot. This guide holds no authority to edit, sway, or change the website, the memorandum, or any document. Those papers stand as Nicholas Markoff filed them. If you mean to act as a neighbor, send the memorandum and sign the wall — the Get Involved and Sign pages already prepared. Our community knows better than the candidates. Hold those who speak for you to their duty.",
  links: [LINK.involve, LINK.sign, LINK.plan],
};

export const FALLBACK: ChatReply = {
  id: "fallback",
  text: "I speak from this packet alone and shall not invent figures. No matter whom you favor at the polls, data centers are still going to be built here. Secure what the community is due, and a boundary that holds. Read the memorandum, then write to the County and affix your name. Candidates who stall leave the people waiting upon weak-willed unplanned action. Be vocal, not violent — letters, signatures, the memorandum itself.",
  links: [LINK.plan, LINK.involve, LINK.sign, LINK.sources],
};

/** Spoken after the third answered turn. Input locks; the engine is not called again. */
export const LOCKED_CLOSING: ChatReply = {
  id: "limit-closing",
  text: "The founders believed in us to read what they wrote. I have answered thrice; that is my allowance. Open the Official Plan, the supporting papers, or the packet itself — and let those documents speak. I shall take no further questions.",
  links: PACKET_LINKS,
};

/** Shown if the visitor reopens the widget after the limit. */
export const LOCKED_NOTICE: ChatReply = {
  id: "limit-notice",
  text: "I have already given three answers in this chamber. The papers remain: the Official Plan, the attachments, and the packet downloads. The founders trusted us to read what they wrote. I can answer no more.",
  links: PACKET_LINKS,
};

export const EMPTY_REPLY: ChatReply = {
  id: "empty",
  text: "Put a question to me concerning the Trust, Tier 1, the proposed floor and cap, or how a citizen may act. I shall not invent numbers beyond this packet.",
  links: [LINK.plan, LINK.involve],
};

export function readStoredQuestionCount(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = window.localStorage.getItem(GW_CHAT_QCOUNT_KEY);
    const n = Number.parseInt(raw ?? "", 10);
    if (!Number.isFinite(n) || n < 0) return 0;
    return Math.min(Math.floor(n), GW_CHAT_QUESTION_LIMIT);
  } catch {
    return 0;
  }
}

export function writeStoredQuestionCount(count: number): number {
  const next = Math.min(
    Math.max(0, Math.floor(count)),
    GW_CHAT_QUESTION_LIMIT,
  );
  if (typeof window === "undefined") return next;
  try {
    window.localStorage.setItem(GW_CHAT_QCOUNT_KEY, String(next));
  } catch {
    // Private mode or quota — in-memory count still governs this session.
  }
  return next;
}

export function isQuestionLimitReached(count: number): boolean {
  return count >= GW_CHAT_QUESTION_LIMIT;
}

export type GuideTurn = {
  reply: ChatReply;
  count: number;
  locked: boolean;
  closing?: ChatReply;
};

/** Call FAQ Q1–Q15 — matching and facts stay; spoken lines are Washington. */
export const KNOWLEDGE: KnowledgeEntry[] = [
  {
    id: "q1",
    prompt: "What is this site?",
    chip: "What is this site?",
    suggested: true,
    keywords: [
      "site",
      "this",
      "trust",
      "dab",
      "energy",
      "packet",
      "about",
      "what",
      "handle",
      "coalition",
    ],
    phrases: [
      "what is this site",
      "what is the trust",
      "what is dab",
      "energy trust",
      "dab energy",
      "what is this",
      "tell me about",
      "neighbors with a plan",
    ],
    answer:
      "This public packet belongs to the **DAB ENERGY TRUST** — Doubs · Adamstown · Buckeystown. Neighbors with a plan, not a campaign committee. The site handle is DAB on Data (dab-on-data.vercel.app). I commend these papers to your careful reading.",
    links: [LINK.home, LINK.plan, LINK.statement],
  },
  {
    id: "q2",
    prompt: "What are we asking County to do?",
    chip: "What are we asking?",
    suggested: true,
    keywords: [
      "ask",
      "asking",
      "county",
      "enact",
      "attach",
      "ride",
      "drra",
      "cdi",
      "agreement",
      "request",
      "action",
    ],
    phrases: [
      "asking county",
      "what are we asking",
      "ride-on",
      "attach it",
      "enact the trust",
      "community-benefits",
      "datacenter agreement",
    ],
    answer:
      "The County is asked to enact the Trust and attach it as a ride-on to the next datacenter agreement / community-benefits package (DRRA / CDI load). Operator-funded meter credits for the three host communities. See the Official Plan at /plan.",
    links: [LINK.plan],
  },
  {
    id: "q3",
    prompt: "Why these three places only?",
    keywords: [
      "three",
      "places",
      "only",
      "exclusive",
      "frederick",
      "city",
      "freeloader",
      "boundary",
      "wall",
      "overlay",
      "why",
    ],
    phrases: [
      "three places",
      "why these",
      "frederick city",
      "exclusive by design",
      "not frederick",
      "whole county",
      "expand tier",
      "other communities",
    ],
    answer:
      "These three places sit on the rural-industrial and grid edge of the CDI overlay (Ord. 26-01-001, effective Jan 20, 2026). Exclusive by design — not Frederick City. The boundary is a wall against freeloaders and the apartment/sprawl wave that tends to follow.",
    links: [LINK.plan, LINK.grandfather],
  },
  {
    id: "q4",
    prompt: "Who is Tier 1 / who gets the dividend?",
    chip: "Who is Tier 1?",
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
      "dividend",
      "meters",
      "21710",
      "21717",
      "21704",
    ],
    phrases: [
      "tier 1",
      "who qualifies",
      "who is eligible",
      "who gets",
      "which communities",
      "zip code",
      "zip lock",
      "how many households",
      "census",
    ],
    answer:
      "The dividend is due to residential meters in the **Adamstown CDP**, **Buckeystown CDP**, or on a **published Doubs list** (Doubs is a hamlet, not a Census CDP). ZIP codes are **not** the eligibility lock (21710/21717/21704 are too messy). Hard Census for the two CDPs: 710 + 499 = **1,209** households; Doubs count TBD when the list exists.",
    links: [LINK.plan, LINK.attachments],
  },
  {
    id: "q5",
    prompt: "What’s the dividend formula?",
    chip: "Dividend formula?",
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
      "tax",
      "taxes",
    ],
    phrases: [
      "floor and cap",
      "dividend formula",
      "how much",
      "proposed dividend",
      "per meter",
      "dollar per",
      "energy dividend",
      "raise taxes",
      "raise our taxes",
      "tax rate",
      "property-tax",
      "property tax",
      "tax hike",
    ],
    answer:
      "**Proposed** (not law): the annual credit shall be **$1 per MWh** of prior-12-month campus IT load, **not less than $250** and **not more than $1,000** per meter per year. Do **not** say “varies with usage” in formal voice — the formula carries it. Funded by operators, not by raising local property-tax rates.",
    links: [LINK.plan, LINK.attachments],
  },
  {
    id: "q6",
    prompt: "Is this money already law?",
    keywords: ["law", "already", "enacted", "current", "adopted", "legal", "yet"],
    phrases: [
      "already law",
      "is this law",
      "current law",
      "not law",
      "not enacted",
      "until adopted",
    ],
    answer:
      "No. The floor, the cap, and the Trust are proposed ordinance figures for Council to enact. They are not current law until adopted.",
    links: [LINK.plan],
  },
  {
    id: "q7",
    prompt: "Data centers — can we stop them by voting?",
    chip: "Can voting stop them?",
    suggested: true,
    keywords: [
      "vote",
      "voting",
      "stop",
      "built",
      "steel",
      "slogan",
      "election",
      "data",
      "centers",
    ],
    phrases: [
      "stop them",
      "by voting",
      "no matter who",
      "data centers",
      "still going to be built",
      "slogan does not",
    ],
    answer:
      "No matter whom you favor at the polls, data centers are still going to be built here. The ask is to secure what the community is due and be protected financially (and by boundary) from further expansion.",
    links: [LINK.plan, LINK.involve],
  },
  {
    id: "q8",
    prompt: "What about the “$110 million” Catellus package?",
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
      "The County Executive rejected that one-time DRRA package (Sept 14, 2026). The Trust is a different instrument: an ongoing megawatt-funded meter credit for DAB, not a one-time benefits list or a multi-year zoning freeze swap.",
    links: [LINK.plan, LINK.rebate, LINK.sources],
  },
  {
    id: "q9",
    prompt: "Grandfather clause — one line?",
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
      "jan 20",
      "new buildings",
      "existing buildings",
    ],
    answer:
      "Keep this version of Frederick. Only **existing** buildings, dwellings, and lawful uses as of **Jan 20, 2026** receive grandfather preference; new construction and apartments after that cutoff are not grandfathered. Tier 1 geography is still required. See /grandfather.",
    links: [LINK.grandfather, LINK.plan],
  },
  {
    id: "q10",
    prompt: "Host-community rebate — one line?",
    chip: "Host-community rebate?",
    keywords: [
      "rebate",
      "winchester",
      "manor",
      "woods",
      "recordation",
      "host",
      "declaration",
      "pockets",
    ],
    phrases: [
      "host community",
      "host-community",
      "manor woods",
      "winchester hall",
      "already collected",
      "not pocket money",
    ],
    answer:
      "The DAB host communities are why this revenue exists; Winchester Hall numbers came off Manor Woods ground. The Trust dividend is a rebate due for lived burden — not an allegation of criminal theft. See /rebate.",
    links: [LINK.rebate, LINK.plan],
  },
  {
    id: "q11",
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
      "do",
      "write",
      "contact",
      "mail",
      "sign",
      "signature",
      "wall",
    ],
    phrases: [
      "get involved",
      "how do i",
      "what can i do",
      "send the memo",
      "email officials",
      "county leaders",
      "make them serve",
      "sign the wall",
      "signature wall",
      "add my name",
    ],
    answer:
      "Open /involve, use the prefilled email buttons (County Executive, Council, Planning), optionally hand-deliver to Winchester Hall, 12 E. Church St., share the script and letter with DAB neighbors, and /sign the wall. The lede remains: “Our community knows better than the candidates!”",
    links: [LINK.involve, LINK.sign, LINK.attachments],
  },
  {
    id: "q12",
    prompt: "Where’s the full memo / bylaws / downloads?",
    keywords: [
      "navigate",
      "pages",
      "packet",
      "pdf",
      "download",
      "read",
      "documents",
      "memo",
      "bylaws",
      "sources",
      "full",
    ],
    phrases: [
      "full memo",
      "where do i",
      "how do i read",
      "download",
      "full packet",
      "which page",
      "supporting materials",
    ],
    answer:
      "The memorandum stands at /plan. Supporting materials: /attachments. Compiled packet: /docs/DABonData.pdf. Official memo and full bylaws are PDFs on /sources. Statement: /statement. Read what was written.",
    links: [
      LINK.plan,
      LINK.attachments,
      LINK.sources,
      LINK.pdf,
      LINK.memo,
      LINK.bylaws,
      LINK.statement,
    ],
  },
  {
    id: "q13",
    prompt: "What is this filing NOT?",
    keywords: [
      "not",
      "protest",
      "lawsuit",
      "campaign",
      "committee",
      "donate",
      "petition",
      "hike",
      "subsidy",
    ],
    phrases: [
      "what is this not",
      "filing not",
      "campaign committee",
      "is this a protest",
      "is this a lawsuit",
      "tax hike",
      "zip-code subsidy",
      "legal advice",
    ],
    answer:
      "This filing is not a campaign committee. Not a tax hike on DAB. Not a ZIP-code subsidy. Not Frederick City freeloading. Not legal advice. Not a lawsuit or a protest.",
    links: [LINK.statement, LINK.plan],
  },
  {
    id: "q14",
    prompt: "Who runs the Trust board?",
    keywords: [
      "board",
      "elder",
      "seats",
      "bylaws",
      "runs",
      "members",
      "elections",
    ],
    phrases: [
      "trust board",
      "who runs",
      "board seats",
      "elder consult",
      "2/2/1",
      "five voting",
    ],
    answer:
      "Five voting members govern the Trust; each of Doubs, Adamstown, and Buckeystown holds at least one seat (default 2/2/1). Elder consult (advisory) before Tier 1 geography changes.",
    links: [LINK.attachments, LINK.plan],
  },
  {
    id: "q15",
    prompt: "Why aren’t candidates listening?",
    chip: "Candidates?",
    suggested: true,
    keywords: [
      "candidates",
      "listening",
      "politicians",
      "serve",
      "authority",
      "militia",
      "vocal",
      "violent",
      "tone",
      "voice",
      "author",
      "nicholas",
      "markoff",
      "stall",
    ],
    phrases: [
      "not listening",
      "make them serve",
      "local authority",
      "vocal",
      "not violent",
      "militia",
      "weak-willed",
      "knows better",
      "who wrote",
      "nicholas markoff",
      "who are you",
    ],
    answer:
      "Push the Trust. Local people have authority over those who speak for them. Candidates who stall leave the community waiting on weak-willed unplanned action. The militia metaphor means **vocal, not violent**. Formal author: Nicholas Markoff.",
    links: [LINK.involve, LINK.sign, LINK.statement],
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
  if (!query) return EMPTY_REPLY;

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

/** One answered turn, or null when the visitor is already locked. */
export function takeGuideTurn(
  raw: string,
  currentCount: number,
): GuideTurn | null {
  if (isQuestionLimitReached(currentCount)) return null;
  const reply = answerVisitor(raw);
  const count = currentCount + 1;
  const locked = isQuestionLimitReached(count);
  return {
    reply,
    count,
    locked,
    closing: locked ? LOCKED_CLOSING : undefined,
  };
}
