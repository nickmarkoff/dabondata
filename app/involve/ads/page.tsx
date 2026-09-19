import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { SHAREABLE_ADS } from "@/lib/ads";

export const metadata: Metadata = {
  title: "Shareable ads",
};

export default function InvolveAdsPage() {
  return (
    <SiteShell current="/involve/ads">
      <Link href="/involve" className="dab-back">
        ← How to Get Involved
      </Link>
      <article className="dab-prose">
        <h2>Shareable ads</h2>
        <p>
          Neighbors can download these posters to spread the{" "}
          <strong>DAB ENERGY TRUST</strong> message in Doubs, Adamstown, and
          Buckeystown. Neighbors with a plan — not a campaign committee.
        </p>
        <p>
          The campus gets built either way. Get what’s due, and the protections
          that go with it. Save a JPG to your phone, then text or post it.
        </p>

        <ul className="dab-ads-grid" role="list" aria-label="Shareable ads">
          {SHAREABLE_ADS.map((ad, index) => (
            <li key={ad.id} className="dab-ads-card">
              <figure className="dab-ads-figure">
                <Image
                  src={ad.src}
                  alt={ad.alt}
                  width={ad.width}
                  height={ad.height}
                  className="dab-ads-preview"
                  sizes="(min-width: 960px) 280px, (min-width: 720px) 44vw, 100vw"
                  priority={index === 0}
                />
                <figcaption>
                  <h3 className="dab-ads-title">{ad.title}</h3>
                </figcaption>
              </figure>
              <a className="dab-ads-download" href={ad.src} download={ad.filename}>
                Download
              </a>
            </li>
          ))}
        </ul>
      </article>
    </SiteShell>
  );
}
