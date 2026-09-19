import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { PDF_BUCKETS } from "@/lib/downloads";

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
          PDF downloads only — three packets for County Executive, County
          Council, Planning Commission, and residents. The September 18, 2026{" "}
          <strong>DAB on Data</strong> compiled packet is a summary; the memo
          and bylaws below are the letterhead originals.
        </p>
        {PDF_BUCKETS.map((bucket) => (
          <section
            key={bucket.id}
            id={bucket.id}
            className="dab-download-group"
            aria-labelledby={`dl-${bucket.id}`}
          >
            <h3 id={`dl-${bucket.id}`}>{bucket.title}</h3>
            <p>{bucket.blurb}</p>
            <div className="dab-downloads" style={{ justifyContent: "flex-start" }}>
              {bucket.items.map((doc) => (
                <a key={doc.href} href={doc.href} download>
                  {doc.label}
                </a>
              ))}
            </div>
          </section>
        ))}
      </article>
    </SiteShell>
  );
}
