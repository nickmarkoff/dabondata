import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Grandfather Clause",
};

export default function Page() {
  return (
    <SiteShell current="/grandfather">
      <Link href="/" className="dab-back">
        ← Packet home
      </Link>
      <article className="dab-prose">
        <h2>Grandfather Clause — Keep This Version of Frederick</h2>
        <h3>Purpose</h3>
        <p dangerouslySetInnerHTML={{ __html: "We like it here. Keep Frederick looking like Frederick." }} />
        <p dangerouslySetInnerHTML={{ __html: "<strong>Grandfather \u2014 Keep This Version of Frederick.</strong> Stay incentive, not growth subsidy. Existing homes and lawful uses as of January 20, 2026; no new construction after the cutoff rides the Trust preference." }} />
        <p dangerouslySetInnerHTML={{ __html: "We want farmers and rural neighbors to <strong>remain in their homes</strong> \u2014 not put land or houses up for sale because the overlay and the sprawl wave make selling look like the only move. The Grandfather Clause rewards the Frederick that already exists (cutoff <strong>January 20, 2026</strong>), not a subsidy for new pads after that date. Exclusive host-community meter credits belong here because the CDI overlay sits in this rural road-box; keep Frederick rural, keep the boundary the wall." }} />
        <h3>Cutoff date</h3>
        <p dangerouslySetInnerHTML={{ __html: "<strong>January 20, 2026</strong> \u2014 the effective date of Ordinance 26-01-001 (CDI overlay)." }} />
        <h3>Who may qualify</h3>
        <p dangerouslySetInnerHTML={{ __html: "Only <strong>existing buildings, dwellings, and lawful uses as of the cutoff</strong> may qualify for Trust eligibility, meter-credit / DAB Energy Dividend participation, and existing-community preference under Trust administration." }} />
        <p dangerouslySetInnerHTML={{ __html: "Eligibility also requires a qualifying Tier 1 service address inside the rural road-box \u2014 west Basford Road, east the Monocacy River, south Tuscarora Road, north the Elmer Derr / Harshman / New Design / Lime Kiln Road belt, with Doubs folded in alongside Adamstown and Buckeystown, and staying short of the Ballenger Creek suburban mass \u2014 and the meter rules in the bylaws. Lime Kiln Run is a creek, not a road. ZIP codes are not the lock. The Grandfather Clause is an additional existing-community filter tied to the cutoff \u2014 a stay incentive, not a substitute for geography, and not a growth subsidy." }} />
        <h3>What does not qualify</h3>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: "<strong>No new buildings qualify.</strong>" }} />
          <li dangerouslySetInnerHTML={{ __html: "New construction, subdivisions, apartments, and commercial pads <strong>after</strong> the January 20, 2026 cutoff are <strong>not grandfathered</strong>." }} />
          <li dangerouslySetInnerHTML={{ __html: "This clause is <strong>not</strong> a license to expand, intensify, or rebuild larger after the cutoff and still claim grandfathered Trust preference." }} />
          <li dangerouslySetInnerHTML={{ __html: "It is an incentive to <strong>keep what we have</strong>, not a growth subsidy." }} />
        </ul>
        <p dangerouslySetInnerHTML={{ __html: "This section is proposed ordinance language for Council to enact with the DAB ENERGY TRUST. It is not current law until adopted." }} />
      </article>
    </SiteShell>
  );
}
