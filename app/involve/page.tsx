import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { PACKET_DOC_URL, SITE_PUBLIC_URL } from "@/lib/links";
import {
  CONSTITUENT_SERVICES_EMAIL,
  COUNCIL_GROUP_EMAIL,
  COUNCIL_MEMBERS,
  COUNTY_EXECUTIVE,
  MAIL_SUBJECT,
  PLANNING_COMMISSION_EMAIL,
  mailBody,
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
  const exampleBody = mailBody(SITE_PUBLIC_URL, PACKET_DOC_URL);

  return (
    <SiteShell current="/involve">
      <Link href="/" className="dab-back">
        ← Packet home
      </Link>
      <article className="dab-prose">
        <h2>How to Get Involved</h2>
        <p className="dab-involve-lede">
          <span className="dab-iron-phrase">
            Our community knows better than the candidates!
          </span>
          <span className="dab-iron-follow">
            Let’s make them serve <em>US</em>!
          </span>
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
        <p className="involve-actions">
          <Link className="involve-btn primary" href="/involve/ads">
            Share these ads
          </Link>
        </p>

        <h3>Where and how to send these (basic steps)</h3>
        <ol className="dab-involve-ways" role="list" aria-label="Ways to get involved">
          <li>Open your email app (phone or computer).</li>
          <li>
            Use the buttons below to email the County Executive, County Council,
            and/or Planning Commission — they prefill subject/body and link the
            public site + packet Google Doc.
          </li>
          <li>
            Attach or paste the link to the packet (Google Doc / PDF from{" "}
            <Link href="/sources">Sources</Link>) if your mail app doesn’t keep the
            link.
          </li>
          <li>
            Optional: hand-deliver a printed packet to Winchester Hall, 12 E. Church
            St., Frederick (County offices).
          </li>
          <li>
            For neighbors: share the{" "}
            <Link href="/attachments#script">example script (spoken remarks)</Link>{" "}
            and{" "}
            <Link href="/attachments#letter">resident proposal letter</Link> from
            Supporting Materials — porch, text, or email to people in
            Doubs/Adamstown/Buckeystown.
          </li>
          <li>
            <Link href="/sign">Sign the public signature wall</Link>.
          </li>
          <li>
            Download and share the{" "}
            <Link href="/involve/ads">shareable ads</Link> — posters neighbors
            can save to a phone and pass along.
          </li>
        </ol>

        <h3 id="example-email">Example proposed email</h3>
        <p>
          This is the same subject and body the buttons below open prefilled.
          Neighbors can send it as written, or tweak the closing with their own
          name. It is an example — not a new political message.
        </p>
        <p>
          <strong>Subject:</strong> {MAIL_SUBJECT}
        </p>
        <blockquote className="dab-example-email">
          <pre>{exampleBody}</pre>
        </blockquote>
        <p>
          Script and letter for neighbors:{" "}
          <Link href="/attachments#script">spoken remarks</Link> ·{" "}
          <Link href="/attachments#letter">proposal letter</Link>.
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
