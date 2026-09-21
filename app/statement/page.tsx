import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Personal Statement",
};

export default function Page() {
  return (
    <SiteShell current="/statement">
      <Link href="/" className="dab-back">
        ← Packet home
      </Link>
      <article className="dab-prose">
        <h2>Personal Statement — Nicholas M.</h2>
        <p dangerouslySetInnerHTML={{ __html: "I live in the Buckeystown / DAB area of Frederick County, Maryland. I am a working neighbor, not a candidate for office." }} />
        <p dangerouslySetInnerHTML={{ __html: "My vote in the local election will be tied solely to attaching this Memo to the datacenter agreement." }} />
        <p dangerouslySetInnerHTML={{ __html: "I am offering a clear path. No other candidate I have seen is offering one." }} />
        <p dangerouslySetInnerHTML={{ __html: "I am not running for office." }} />
        <p dangerouslySetInnerHTML={{ __html: "I am fighting for my community anyway." }} />
        <p dangerouslySetInnerHTML={{ __html: "This packet is that path: a DAB ENERGY TRUST for Doubs, Adamstown, and Buckeystown \u2014 operator-funded meter credits for the host communities that live next to the Critical Digital Infrastructure overlay, with a grandfather clause that rewards keeping the Frederick we already have, and a public declaration that the host-community rebate is due because Winchester Hall\u2019s numbers came off Manor Woods ground." }} />
        <p dangerouslySetInnerHTML={{ __html: "Neighbors with a plan. Not a lawsuit. Not a protest. Not a campaign committee." }} />
        <p dangerouslySetInnerHTML={{ __html: "All we need is emails and signatures these days, no muskets! So, are there really any excuses?" }} />
        <p dangerouslySetInnerHTML={{ __html: "Respectfully," }} />
        <p dangerouslySetInnerHTML={{ __html: "<strong>Nicholas M.</strong>" }} />
        <p dangerouslySetInnerHTML={{ __html: "Buckeystown / DAB area, Frederick County, MD" }} />
        <p dangerouslySetInnerHTML={{ __html: "September 18, 2026" }} />
      </article>
    </SiteShell>
  );
}
