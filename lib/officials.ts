export type Official = {
  name: string;
  role: string;
  email: string;
};

/** Public directory contacts — Frederick County, MD (county websites). */
export const OFFICIALS: Official[] = [
  {
    name: "Jessica Fitzwater",
    role: "County Executive",
    email: "jfitzwater@frederickcountymd.gov",
  },
  {
    name: "Constituent Services",
    role: "County Executive Office",
    email: "constituentservices@frederickcountymd.gov",
  },
  {
    name: "County Council (group)",
    role: "All Councilmembers",
    email: "councilmembers@frederickcountymd.gov",
  },
  {
    name: "Brad Young",
    role: "Council President",
    email: "byoung@frederickcountymd.gov",
  },
  {
    name: "Jerry Donald",
    role: "Councilmember",
    email: "jdonald@frederickcountymd.gov",
  },
  {
    name: "Steve McKay",
    role: "Councilmember",
    email: "smckay@frederickcountymd.gov",
  },
  {
    name: "M.C. Keegan-Ayer",
    role: "Councilmember",
    email: "mckeegan-ayer@frederickcountymd.gov",
  },
  {
    name: "Kavonté Duckett",
    role: "Councilmember",
    email: "kduckett@frederickcountymd.gov",
  },
  {
    name: "Mason Carter",
    role: "Councilmember",
    email: "mcarter@frederickcountymd.gov",
  },
  {
    name: "Renee Knapp",
    role: "Councilmember",
    email: "rknapp@frederickcountymd.gov",
  },
  {
    name: "Planning Commission",
    role: "Staff / Commission inbox",
    email: "PlanningCommission@FrederickCountyMD.gov",
  },
];

export const ASK_SUBJECT =
  "Attach DAB ENERGY TRUST to the next datacenter / community-benefits (DRRA) agreement";

export const ASK_BODY = `Hello,

I am writing as a Frederick County resident about the Quantum / Manor Woods datacenter campus and related agreements.

Please attach the DAB on Data / DAB ENERGY TRUST packet as a ride-on to the next datacenter and community-benefits (DRRA) agreement — so host-community protections and the residential-meter dividend are part of the deal, not an afterthought.

Our community knows better than the candidates. Let’s make them serve US.

Packet: https://docs.google.com/document/d/15ifSVpIhhCVNS66ktWEa4OfE3nwl3jU-/edit
Site: https://dab-on-data.vercel.app

Thank you.`;

export function mailtoHref(email: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(ASK_SUBJECT)}&body=${encodeURIComponent(ASK_BODY)}`;
}

export function mailtoAllCouncil(): string {
  const emails = OFFICIALS.filter(
    (o) =>
      o.email.includes("councilmembers") ||
      ["byoung", "jdonald", "smckay", "mckeegan-ayer", "kduckett", "mcarter", "rknapp"].some(
        (p) => o.email.startsWith(p),
      ),
  )
    .map((o) => o.email)
    .filter((e, i, a) => a.indexOf(e) === i);
  return `mailto:${emails.join(",")}?subject=${encodeURIComponent(ASK_SUBJECT)}&body=${encodeURIComponent(ASK_BODY)}`;
}
