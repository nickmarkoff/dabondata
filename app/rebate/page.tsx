import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Host-Community Rebate",
};

export default function Page() {
  return (
    <SiteShell current="/rebate">
      <Link href="/" className="dab-back">
        ← Packet home
      </Link>
      <article className="dab-prose">
        <h2>Public Declaration — Host-Community Rebate</h2>
        <h3>Declaration</h3>
        <p dangerouslySetInnerHTML={{ __html: "<strong>Host communities Doubs, Adamstown, and Buckeystown are why this revenue exists.</strong> The campus sits on our doorstep \u2014 on the rural-industrial and grid edge we live next to. The rest of the county collects the benefit of a burden we live next to." }} />
        <p dangerouslySetInnerHTML={{ __html: "Sourced figures show about <strong>$53 million</strong> already collected on Quantum-related recordation transactions ($1.40M + $6.67M + $44.9M = $52.97M per HR&A). That money does not appear as a power-bill credit on DAB meters." }} />
        <p dangerouslySetInnerHTML={{ __html: "Countywide forecasts of about <strong>$41 million</strong>, <strong>$68.8 million</strong>, and <strong>$215 million</strong> annual fiscal revenue at buildout are <strong>countywide buildout forecasts</strong> \u2014 not money in DAB pockets. Those are Winchester Hall numbers, not Manor Woods numbers." }} />
        <p dangerouslySetInnerHTML={{ __html: "The Trust dividend is a <strong>rebate due host communities</strong> for site, grid edge, roads, rural buffer, and lived impact." }} />
        <p dangerouslySetInnerHTML={{ __html: "<strong>Nobody else generated this. Winchester Hall numbers came off Manor Woods ground.</strong>" }} />
        <h3>How to hear this argument</h3>
        <p dangerouslySetInnerHTML={{ __html: "This is a rebate and credit argument for host communities. It does not allege criminal theft or illegal conduct. Recordation and property-tax dollars follow county and state formula; the ask is that host communities receive an operator-funded meter credit and Trust structure because they carry the lived burden of the campus and overlay." }} />
        <p dangerouslySetInnerHTML={{ __html: "Neighbors with a plan. Not a lawsuit. Not a protest. Not a campaign committee." }} />
      </article>
    </SiteShell>
  );
}
