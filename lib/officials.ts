/** Sourced from frederickcountymd.gov elected officials / County Council pages. */

export type Official = {
  name: string;
  role: string;
  email: string;
};

export const COUNTY_EXECUTIVE: Official = {
  name: "Jessica Fitzwater",
  role: "County Executive",
  email: "jfitzwater@frederickcountymd.gov",
};

/** Constituent services inbox (County Executive office). */
export const CONSTITUENT_SERVICES_EMAIL =
  "constituentservices@frederickcountymd.gov";

/** Shared County Council inbox. */
export const COUNCIL_GROUP_EMAIL = "councilmembers@frederickcountymd.gov";

/** Planning Commission staff inbox. */
export const PLANNING_COMMISSION_EMAIL =
  "PlanningCommission@FrederickCountyMD.gov";

export const COUNCIL_MEMBERS: Official[] = [
  {
    name: "Brad Young",
    role: "Council President (At-Large)",
    email: "byoung@frederickcountymd.gov",
  },
  {
    name: "Jerry Donald",
    role: "Council Member (District 1)",
    email: "jdonald@frederickcountymd.gov",
  },
  {
    name: "Steve McKay",
    role: "Council Member (District 2)",
    email: "smckay@frederickcountymd.gov",
  },
  {
    name: "M.C. Keegan-Ayer",
    role: "Council Member (District 3)",
    email: "mckeegan-ayer@frederickcountymd.gov",
  },
  {
    name: "Kavonté Duckett",
    role: "Council Vice President (District 4)",
    email: "kduckett@frederickcountymd.gov",
  },
  {
    name: "Mason Carter",
    role: "Council Member (District 5)",
    email: "mcarter@frederickcountymd.gov",
  },
  {
    name: "Renee Knapp",
    role: "Council Member (At-Large)",
    email: "rknapp@frederickcountymd.gov",
  },
];

export const MAIL_SUBJECT =
  "Attach DAB ENERGY TRUST (DABonData) to the next CDI/DRRA community-benefits agreement";

export function mailBody(siteUrl: string, pdfUrl: string): string {
  return [
    "Dear County leaders,",
    "",
    "Please attach the DAB ENERGY TRUST (DABonData) meter-credit Trust as a ride-on to the next datacenter agreement / community-benefits package (DRRA) for Critical Digital Infrastructure in Frederick County.",
    "",
    "Host communities Doubs, Adamstown, and Buckeystown are asking for operator-funded meter credits and a grandfather clause that keeps Frederick looking like Frederick.",
    "",
    `Site: ${siteUrl}`,
    "Packet PDF (public on the site — download, attach, or forward):",
    pdfUrl,
    "",
    "Thank you,",
    "",
  ].join("\n");
}

export function mailtoHref(
  to: string | string[],
  siteUrl: string,
  pdfUrl: string,
  cc?: string[],
): string {
  const recipients = Array.isArray(to) ? to.join(",") : to;
  const params = new URLSearchParams();
  params.set("subject", MAIL_SUBJECT);
  params.set("body", mailBody(siteUrl, pdfUrl));
  if (cc?.length) params.set("cc", cc.join(","));
  return `mailto:${recipients}?${params.toString()}`;
}
