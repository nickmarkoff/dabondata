import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { DOCS, SITE } from "@/lib/nav";

export default function HomePage() {
  return (
    <SiteShell current="/" showMasthead>
      <p className="text-center text-[0.85rem] text-[var(--color-ink-soft)] mb-4">
        Docs-only public archive of the {SITE.date} <strong>DAB on Data</strong> packet.
        No petition. No donate form. Neighbors with a plan.
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
