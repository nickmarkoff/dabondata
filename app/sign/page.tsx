import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { SignatureWall } from "@/components/SignatureWall";

export const metadata: Metadata = {
  title: "Public Signature Wall",
};

export default function SignPage() {
  return (
    <SiteShell current="/sign">
      <Link href="/" className="dab-back">
        ← Packet home
      </Link>
      <article className="dab-prose">
        <h2>Public Signature Wall</h2>
        <p>
          Neighbors with a plan. Read the affirmation, then add your name in the
          spirit of a declaration — not a vendor petition. This wall is for
          residents of the proposed Doubs · Adamstown · Buckeystown Trust area.
          Then{" "}
          <Link href="/involve">email County leaders</Link> and ask them to attach{" "}
          <strong>DAB ENERGY TRUST (DABonData)</strong> to the next CDI/DRRA
          community-benefits agreement.
        </p>
        <SignatureWall />
      </article>
    </SiteShell>
  );
}
