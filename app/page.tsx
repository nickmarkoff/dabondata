import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { DOCS, SITE } from "@/lib/nav";

export default function HomePage() {
  return (
    <SiteShell current="/" showMasthead>
      <p className="text-center text-[0.85rem] text-[var(--color-ink-soft)] mb-3">
        Public archive of the {SITE.date} <strong>DAB on Data</strong> packet.
        Neighbors with a plan — not a campaign committee.
      </p>
      <p className="involve-banner" style={{ marginBottom: "1rem" }}>
        Our community knows better than the candidates! Let’s make them serve{" "}
        <em>US</em>.
      </p>
      <p className="involve-actions" style={{ marginBottom: "1.25rem" }}>
        <Link className="involve-btn primary" href="/involve">
          Get Involved
        </Link>{" "}
        <Link className="involve-btn" href="/sign">
          Sign the Declaration
        </Link>
      </p>
      <ul className="dab-doc-list">
        {DOCS.map((doc) => (
          <li key={doc.href}>
            <Link href={doc.href} className="dab-doc-card">
              <h3>{doc.title}</h3>
              <p>{doc.blurb}</p>
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-center text-[0.78rem] text-[var(--color-ink-soft)]">
        Simple hierarchy only — no county seal, no county letterhead, no clip-art.
      </p>
    </SiteShell>
  );
}
