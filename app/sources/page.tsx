import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Sources & Downloads",
};

export default function SourcesPage() {
  return (
    <SiteShell current="/sources">
      <Link href="/" className="dab-back">
        ← Packet home
      </Link>
      <article className="dab-prose">
        <h2>Sources &amp; Downloads</h2>
        <p>
          The full <strong>DAB on Data</strong> packet by Nicholas Markoff
          (September 18, 2026) is available below. Official text for County Executive,
          County Council, Planning Commission, and residents.
        </p>
        <div className="dab-downloads" style={{ justifyContent: "flex-start" }}>
          <a href="/docs/DABonData.md" download>
            Full packet (.md)
          </a>
          <a href="/docs/DABonData.docx" download>
            Full packet (.docx)
          </a>
          <a href="/docs/DABonData.pdf" download>
            Full packet (.pdf)
          </a>
        </div>
      </article>
    </SiteShell>
  );
}
