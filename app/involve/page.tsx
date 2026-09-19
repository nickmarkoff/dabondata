import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { PACKET_DOC_URL, SITE_PUBLIC_URL } from "@/lib/links";
import {
  CONSTITUENT_SERVICES_EMAIL,
  COUNCIL_GROUP_EMAIL,
  COUNCIL_MEMBERS,
  COUNTY_EXECUTIVE,
  PLANNING_COMMISSION_EMAIL,
  mailtoHref,
} from "@/lib/officials";

export const metadata: Metadata = {
  title: "How to Get Involved",
};

export default function InvolvePage() {
  const execMail = mailtoHref(
    [COUNTY_EXECUTIVE.email, CONSTITUENT_SERVICES_EMAIL],
    SITE_PUBLIC_URL,
    PACKET_DOC_URL,
  );
  const councilGroupMail = mailtoHref(
    COUNCIL_GROUP_EMAIL,
    SITE_PUBLIC_URL,
    PACKET_DOC_URL,
  );
  const allCouncilMail = mailtoHref(
    COUNCIL_MEMBERS.map((m) => m.email),
    SITE_PUBLIC_URL,
    PACKET_DOC_URL,
    [COUNCIL_GROUP_EMAIL],
  );
  const planningMail = mailtoHref(
    PLANNING_COMMISSION_EMAIL,
    SITE_PUBLIC_URL,
    PACKET_DOC_URL,
  );

  return (
    <SiteShell current="/involve">
      <Link href="/" className="dab-back">
        ← Packet home
      </Link>
      <article className="dab-prose">
        <h2>How to Get Involved</h2>
        <p className="dab-involve-lede">
          Our community knows better than the candidates! Let’s make them serve{" "}
          <em>US</em>!
        </p>
        <p>
          Ask Frederick County leaders to attach this{" "}
          <strong>DABonData / DAB ENERGY TRUST</strong> ride-on to the next
          datacenter agreement / community-benefits package (DRRA). Operator-funded
          meter credits for Doubs, Adamstown, and Buckeystown — neighbors with a
          plan, not a campaign committee.
        </p>
        <p>
          Prefills open in your email app with subject and body ready. Each message
          points officials to the public site and the packet (Google Doc / PDF).
        </p>

        <h3>County Executive</h3>
        <div className="dab-mail-grid">
          <a className="dab-mail-btn" href={execMail}>
            Email Jessica Fitzwater
            <span>
              {COUNTY_EXECUTIVE.email}
              <br />
              + {CONSTITUENT_SERVICES_EMAIL}
            </span>
          </a>
        </div>

        <h3>County Council — group inbox</h3>
        <div className="dab-mail-grid">
          <a className="dab-mail-btn" href={councilGroupMail}>
            Email all councilmembers
            <span>{COUNCIL_GROUP_EMAIL}</span>
          </a>
          <a className="dab-mail-btn dab-mail-btn-secondary" href={allCouncilMail}>
            Email every member (To: all seats)
            <span>CC group inbox</span>
          </a>
        </div>

        <h3>County Council — by member</h3>
        <div className="dab-mail-grid">
          {COUNCIL_MEMBERS.map((m) => (
            <a
              key={m.email}
              className="dab-mail-btn"
              href={mailtoHref(m.email, SITE_PUBLIC_URL, PACKET_DOC_URL)}
            >
              {m.name}
              <span>
                {m.role}
                <br />
                {m.email}
              </span>
            </a>
          ))}
        </div>

        <h3>Planning Commission</h3>
        <div className="dab-mail-grid">
          <a className="dab-mail-btn" href={planningMail}>
            Email Planning Commission
            <span>{PLANNING_COMMISSION_EMAIL}</span>
          </a>
        </div>

        <h3>Sign the wall</h3>
        <p>
          Add your name next to your neighbors — public signatures in the spirit of a
          declaration, not a petition vendor form.
        </p>
        <p>
          <Link href="/sign" className="dab-mail-btn" style={{ display: "inline-flex" }}>
            Go to the signature wall →
          </Link>
        </p>
        <p className="dab-cite">
          Official emails sourced from{" "}
          <a
            href="https://www.frederickcountymd.gov/1649/Elected-Officials-List"
            target="_blank"
            rel="noopener noreferrer"
          >
            frederickcountymd.gov elected officials
          </a>{" "}
          and{" "}
          <a
            href="https://www.frederickcountymd.gov/591/County-Council"
            target="_blank"
            rel="noopener noreferrer"
          >
            County Council
          </a>{" "}
          pages.
        </p>
      </article>
    </SiteShell>
  );
}
