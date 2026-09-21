import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Official Plan / Memo",
};

export default function Page() {
  return (
    <SiteShell current="/plan">
      <Link href="/" className="dab-back">
        ← Packet home
      </Link>
      <article className="dab-prose">
        <h2>Memorandum for Public Filing</h2>
        <p>
          Download the{" "}
          <a href="/docs/DAB_Energy_Trust_Memo.pdf" download>
            official memo (PDF)
          </a>{" "}
          and the{" "}
          <a href="/docs/DAB_Energy_Trust_Bylaws.pdf" download>
            full bylaws (PDF)
          </a>
          .
        </p>
        <p dangerouslySetInnerHTML={{ __html: "<strong>FREDERICK COUNTY, MARYLAND</strong>" }} />
        <p dangerouslySetInnerHTML={{ __html: "<strong>TO:</strong> County Executive; County Council; Planning Commission <strong>FROM:</strong> Nicholas M., DAB ENERGY TRUST (Doubs \u00b7 Adamstown \u00b7 Buckeystown), Frederick County, MD <strong>DATE:</strong> September 18, 2026 <strong>RE:</strong> DAB ENERGY TRUST \u2014 condition new CDI load and any DRRA on a local energy dividend, infrastructure leasehold, and residual interest for Doubs, Adamstown, and Buckeystown only <strong>ACTION:</strong> Introduce, enact, and attach to any revived Quantum / Catellus DRRA or site plan" }} />
        <p dangerouslySetInnerHTML={{ __html: "<strong>Subtitle:</strong> Doubs \u00b7 Adamstown \u00b7 Buckeystown \u2014 Our Home, Our Coalition" }} />
        <h3>1. Request</h3>
        <p dangerouslySetInnerHTML={{ __html: "Enact a <strong>DAB ENERGY TRUST</strong> for residential electric meters whose service address lies within:" }} />
        <ul>
          <li dangerouslySetInnerHTML={{ __html: "(a) the <strong>Adamstown Census Designated Place (CDP)</strong>," }} />
          <li dangerouslySetInnerHTML={{ __html: "(b) the <strong>Buckeystown CDP</strong> (2020 Census places), or" }} />
          <li dangerouslySetInnerHTML={{ __html: "(c) a <strong>Doubs</strong> service address on a <strong>published Doubs parcel / service-address list</strong> to be adopted by County Council ordinance." }} />
        </ul>
        <p dangerouslySetInnerHTML={{ __html: "<strong>Doubs is an unincorporated populated place / hamlet (GNIS Class U6), not a Census CDP.</strong> Until that Doubs list exists, public materials may describe Tier 1 as: Adamstown CDP + Buckeystown CDP (<strong>1,209 Census households</strong>) plus Doubs addresses on the published Doubs list." }} />
        <p dangerouslySetInnerHTML={{ __html: "Condition certificates of occupancy for additional Critical Digital Infrastructure (CDI) electrical load, and any Development Rights and Responsibilities Agreement, on three tools:" }} />
        <ul>
          <li dangerouslySetInnerHTML={{ __html: "<strong>A. Energy Trust</strong> \u2014 operators pay per energized megawatt; 100 percent of the dividend goes to eligible DAB meters until the proposed ordinance floor is met." }} />
          <li dangerouslySetInnerHTML={{ __html: "<strong>C. Infrastructure stake</strong> \u2014 county or co-op holds title or a recorded lease on campus-serving water, sewer, roads, and right-of-way pads the public pays for; rent to the Trust." }} />
          <li dangerouslySetInnerHTML={{ __html: "<strong>D. Residual / equity</strong> \u2014 covenant on land rezoned into LI or GI inside the overlay after January 20, 2026; seek 2027 state authority for a non-voting economic interest in CDI projects over 50 MW, dedicated to this Trust." }} />
        </ul>
        <p dangerouslySetInnerHTML={{ __html: "<strong>Do not</strong> fund the dividend by raising the real-property tax rate in these three communities. <strong>Do not</strong> exchange a multi-year zoning freeze for a one-time community-benefits package." }} />
        <p dangerouslySetInnerHTML={{ __html: "<strong>Exclusive by design.</strong> This Trust is for Doubs, Adamstown, and Buckeystown only \u2014 <strong>not Frederick City</strong>. No freeloader expansion without a board vote <strong>AND</strong> a new County Council ordinance titled as an expansion (plus elder consult under Article IX-A). No matter who residents vote for, data centers are still going to be built here \u2014 a slogan does not stop steel. Get what is due: operator-funded meter credits (more money in household pockets) and a boundary that protects these places from freeloaders and the apartment/sprawl wave that tends to follow. Dividend = floor; boundary = wall." }} />
        <p dangerouslySetInnerHTML={{ __html: "<strong>Elder consult on geography changes (bylaws Article IX-A).</strong> Before the board votes on any Tier 1 geography change \u2014 adopting or majorly amending the Doubs list, expanding Tier 1 to another community, or otherwise amending the Article III geography lock \u2014 it must consult in good faith with ten residents age 65 or older who have lived in Doubs, Adamstown, or Buckeystown for at least ten years. The consult is advisory, on the record, and not a veto; a short summary goes with the minutes. It does not apply to routine clerical addressing corrections that do not enlarge Tier 1, or to automatic Census sync of Adamstown/Buckeystown CDP lines." }} />
        <p dangerouslySetInnerHTML={{ __html: "<strong>Board representation lock (bylaws Article IV).</strong> Five voting members; each of the three communities must hold at least one voting seat at all times. Default apportionment 2 Adamstown / 2 Buckeystown / 1 Doubs; Council may change the split by ordinance only if each town still has at least one seat. Until the Doubs list is adopted, the Doubs seat may be held on an interim basis by a Doubs-hamlet-area resident; once the list is live, that seat is Doubs-list only." }} />
        <h3>2. Why these three communities</h3>
        <p dangerouslySetInnerHTML={{ __html: "Ordinance <strong>26-01-001</strong> (effective <strong>January 20, 2026</strong>) mapped the CDI overlay \u2014 approximately <strong>2,614.9 acres</strong> (Maryland Supreme Court figure) \u2014 onto the former Eastalco plant north of Adamstown. Those acres are roughly described by the industrial and grid edge around New Design Road, Manor Woods Road, Adamstown Road, Ballenger Creek Pike, and Digital Drive (see the Ord. 26-01-001 map exhibit). Buckeystown and Doubs (unincorporated populated place / hamlet, not a Census CDP) sit on that same rural-industrial and grid edge." }} />
        <p dangerouslySetInnerHTML={{ __html: "This is not for city folk up in Frederick who have been moving in and changing everything. It is for people who actually live here \u2014 Doubs, Adamstown, Buckeystown \u2014 Our Home, Our Coalition. We are neighbors with a plan, not a protest." }} />
        <p dangerouslySetInnerHTML={{ __html: "Lived impact in Buckeystown is not a sterile statistic. MD 85 is Buckeystown Pike \u2014 a state highway through the Buckeystown Historic District. Residents pull out onto that road the way you would time a gap in freeway traffic. That is morning life on the overlay\u2019s doorstep." }} />
        <p dangerouslySetInnerHTML={{ __html: "<strong>Tier 1:</strong> residential meters in the Adamstown CDP, Buckeystown CDP, or on the published Doubs list. Hard Census total for the two CDPs: <strong>710 + 499 = 1,209</strong> households. No Doubs household count is asserted in this filing." }} />
        <p dangerouslySetInnerHTML={{ __html: "<strong>ZIP codes are not the eligibility lock.</strong> ZIP 21710 may roughly track Adamstown street delivery, but ZIP 21717 is a USPS PO Box\u2013only ZIP and does not cover Buckeystown street addresses. Many Buckeystown street addresses use ZIP 21704, a large delivery area with thousands of households \u2014 far too broad for a three-community Trust. Before the first payment, the County Council shall publish a meter eligibility list mapped to Adamstown and Buckeystown CDP boundaries and parcels, and to the adopted Doubs list." }} />
        <h3>3. Money already collected — not a local energy credit</h3>
        <p dangerouslySetInnerHTML={{ __html: "HR&A Advisors (October 30, 2025), Tables 3 and 14, report Quantum-related recordation tax through 2025 year-to-date as follows: <strong>$1.40 million</strong> on the Eastalco purchase, <strong>$6.67 million</strong> on tenant sales, and <strong>$44.9 million</strong> on debt service \u2014 <strong>$52.97 million</strong> in total, or about <strong>$53 million</strong>. County Executive Jessica Fitzwater testified that the project had already generated \u201cover $50 million in recordation tax revenue as of November 2025\u201d (SB 427 testimony, February 18, 2026). The same HR&A tables report $2.24 million in real property tax on land through 2025 YTD. This filing does not claim a June 30, 2026 county ledger total." }} />
        <p dangerouslySetInnerHTML={{ __html: "Recordation is split by formula among agricultural preservation, parks, schools, housing, and the general fund; a 2 percent transit share begins in FY2027 under Bill 26-03. That money does not appear as a power-bill credit on Adamstown, Buckeystown, or Doubs meters." }} />
        <p dangerouslySetInnerHTML={{ __html: "On <strong>September 1, 2026</strong>, the County Executive announced a Catellus community-benefits package headlined as <strong>\u201c$110 million\u201d</strong> and tied to a proposed Development Rights and Responsibilities Agreement. The published line items were $30 million for Carroll Manor Elementary School renovations; $40 million for a community center and recreational space; $14.5 million for workforce development and career and technical education; $10.5 million for agricultural land preservation; $10 million for perimeter berming, planting, and trails; $5 million for a community solar project to reduce energy bills for Adamstown residents; and $1 million for a fire engine for the Carroll Manor Volunteer Fire Company \u2014 <strong>$111.0 million</strong> if those figures are added as printed \u2014 together with roughly a 20 percent reduction in planned square footage, an 80 percent reduction in potable water use, and a 433-acre nature reserve on campus. This filing uses the county\u2019s \u201c$110 million\u201d headline and notes the $111.0 million line-item sum. The County Executive <strong>rejected</strong> that package on <strong>September 14, 2026</strong>. New CDI applications remain paused through July 1, 2027 (executive-order extension of September 14, 2026). Vested and under-construction work continues." }} />
        <p dangerouslySetInnerHTML={{ __html: "The Trust is a different instrument: an ongoing, megawatt-funded meter credit for the three host communities, not a one-time DRRA package. This filing does not propose exchanging a multi-year zoning freeze for that package or any successor one-time list." }} />
        <h3>4. Campus scale used for the formula</h3>
        <p dangerouslySetInnerHTML={{ __html: "Published program for Quantum Frederick / the Catellus lead-developer campus: planned <strong>2.4 gigawatts</strong>, about <strong>17.4 million square feet</strong>, on about <strong>2,100 acres</strong>. That campus figure is not the same number as the CDI overlay acreage (~<strong>2,614.9 acres</strong>)." }} />
        <p dangerouslySetInnerHTML={{ __html: "The campus was not at stabilized operations as of mid-2026; construction is underway. Aligned Data Centers: about <strong>264 MW</strong> planned across the campus; building IAD-04 (about <strong>72 MW</strong>) topped out in January 2026. Rowan Digital / AWS Bauxite construction is underway." }} />
        <p dangerouslySetInnerHTML={{ __html: "<strong>Countywide annual forecasts at full buildout / stabilization</strong> (not meter credits in Doubs, Adamstown, or Buckeystown):" }} />
        <ul>
          <li dangerouslySetInnerHTML={{ __html: "Sage Policy Group (October 2023): about <strong>$40.9 million</strong> (about <strong>$41 million</strong>) annual county fiscal revenue \u2014 about $37.7 million real property plus about $3.2 million income tax." }} />
          <li dangerouslySetInnerHTML={{ __html: "County Executive SB 427 testimony (February 18, 2026): \u201capproximately <strong>$68.8 million</strong> annually in real property taxes\u201d for the already-approved project." }} />
          <li dangerouslySetInnerHTML={{ __html: "HR&A Table 16 (October 30, 2025): about <strong>$215 million</strong> annual fiscal revenue ($195 million real property on improvements + $13.2 million real property on land + $4.74 million personal income tax + $2.04 million stormwater fee; table total $214.98 million)." }} />
        </ul>
        <p dangerouslySetInnerHTML={{ __html: "<strong>Those are Winchester Hall numbers, not Manor Woods numbers.</strong>" }} />
        <h3>5. Proposed dividend (policy illustration — not enacted law)</h3>
        <p dangerouslySetInnerHTML={{ __html: "The <strong>$250 floor</strong> and <strong>$1,000 cap</strong> below are a <strong>proposed</strong> ordinance floor and cap for Council to enact. They are <strong>not current law</strong>." }} />
        <div className="overflow-x-auto"><table><tbody>
            <tr>
              <th dangerouslySetInnerHTML={{ __html: "Rule" }} />
              <th dangerouslySetInnerHTML={{ __html: "About 1,209 CDP homes (Adamstown + Buckeystown); Doubs meters TBD on published list" }} />
              <th dangerouslySetInnerHTML={{ __html: "Notes" }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "Proposed floor <strong>$250</strong> / meter / year after first hall energized" }} />
              <td dangerouslySetInnerHTML={{ __html: "\u2248 $302,250 \u2248 $302,000 / year to the two CDPs alone (Doubs add-on when list exists)" }} />
              <td dangerouslySetInnerHTML={{ __html: "Proposed ordinance floor (annual)" }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>$1 per MWh</strong> of campus IT load, eligible DAB meters only" }} />
              <td dangerouslySetInnerHTML={{ __html: "72 MW hall @ 70% load \u2248 $441,000 (\u2248 $365 / meter if only the 1,209 CDP meters)" }} />
              <td dangerouslySetInnerHTML={{ __html: "Illustration, not a tariff \u2014 annual credit tracks prior-12-month campus IT load between floor and cap" }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "Proposed cap <strong>$1,000</strong> / meter until Council raises it" }} />
              <td dangerouslySetInnerHTML={{ __html: "\u2248 $1,209,000 \u2248 $1.21 million / year on CDP-only base" }} />
              <td dangerouslySetInnerHTML={{ __html: "Proposed ordinance cap (annual)" }} />
            </tr>
          </tbody></table></div>
        <p dangerouslySetInnerHTML={{ __html: "Pay as a utility-bill credit if the county obtains a rider; otherwise a county rebate or property-tax credit labeled DAB Energy Dividend (Doubs \u00b7 Adamstown \u00b7 Buckeystown)." }} />
        <h3>6. Zoning and DRRA hook</h3>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: "\u00a7 1-19-10.1100 CDI overlay; LI/GI only; overlay less than 1% of county land." }} />
          <li dangerouslySetInnerHTML={{ __html: "\u00a7 1-19-8.402 / 8.403 facilities and substations; 500-foot setback if abutting residential." }} />
          <li dangerouslySetInnerHTML={{ __html: "Chapter 1-25 DRRA must list enhanced public benefits and their value \u2014 put the dividend and infrastructure lease in that paragraph." }} />
          <li dangerouslySetInnerHTML={{ __html: "Maryland Supreme Court (opinion filed July 24, 2026): the overlay map is not a referendum subject. Change the map only by new plan and zoning acts." }} />
          <li dangerouslySetInnerHTML={{ __html: "Aim conditions at new load, new map amendments, and any new DRRA. Do not claim confiscation of 2021 vested rights." }} />
        </ul>
        <h3>7. What this filing is not</h3>
        <p dangerouslySetInnerHTML={{ __html: "Not a lawsuit. Not a protest. Not a political campaign. Neighbors with a plan \u2014 working people who fix what is broken, not politicians, activists, or consultants with a binder." }} />
        <p dangerouslySetInnerHTML={{ __html: "Not a request to raise taxes in Doubs, Adamstown, or Buckeystown. Not a ZIP-code subsidy. Not a substitute for a state data-center personal-property tax (support that separately and dedicate first dollars to this Trust). Not an invitation for Frederick City or other communities to freeload onto Tier 1 without a board vote AND a new ordinance titled as an expansion. Not legal advice. Ask the County Attorney which of A and C can be enacted under the Charter without a state bill, and publish the answer." }} />
        <h3>8. Prayer</h3>
        <p dangerouslySetInnerHTML={{ __html: "Introduce the DAB ENERGY TRUST ordinance, attach the Trust bylaws as the governing instrument, and refuse any DRRA that omits the dividend, gifts public infrastructure, or freezes zoning for a term of years. Keep the three communities exclusive by design. Keep the boundary the wall. Incorporate the Grandfather Clause and the Public Declaration \u2014 Host-Community Rebate as stated in this packet." }} />
        <p dangerouslySetInnerHTML={{ __html: "Respectfully submitted," }} />
        <p dangerouslySetInnerHTML={{ __html: "Nicholas M." }} />
        <p dangerouslySetInnerHTML={{ __html: "Buckeystown / DAB area, Frederick County, MD" }} />
        <p dangerouslySetInnerHTML={{ __html: "I\u2019m very busy with my newborn, but that doesn\u2019t mean I can\u2019t make a few minutes of my time available to quickly handle this. A mechanic\u2019s habit: when something is broken on our road home, you fix it \u2014 you don\u2019t wait for Winchester Hall to invent a feeling about it." }} />
        <h3>Sources (selected)</h3>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: "Maryland Supreme Court opinion (July 24, 2026), In re Frederick County Data Center Referendum Committee, No. 67, Sept. Term 2025" }} />
          <li dangerouslySetInnerHTML={{ __html: "Frederick County CDI Overlay (Ord. 26-01-001)" }} />
          <li dangerouslySetInnerHTML={{ __html: "County Executive rejects Catellus community-benefits agreement (Sept. 14, 2026)" }} />
          <li dangerouslySetInnerHTML={{ __html: "Catellus $110M community-benefit announcement (Sept. 1, 2026)" }} />
          <li dangerouslySetInnerHTML={{ __html: "HR&A Advisors, Quantum Frederick Data Center Development Impact Analysis (Oct. 30, 2025)" }} />
          <li dangerouslySetInnerHTML={{ __html: "County Executive Jessica Fitzwater, SB 427 testimony (Feb. 18, 2026)" }} />
          <li dangerouslySetInnerHTML={{ __html: "Sage Policy Group / Maryland Tech Council, Data Center Impact Report (Oct. 2023)" }} />
          <li dangerouslySetInnerHTML={{ __html: "Maryland State Data Center \u2014 Adamstown CDP 2020 Census profile (710 households)" }} />
          <li dangerouslySetInnerHTML={{ __html: "Frederick County \u2014 Buckeystown CDP 2020 Census Profile (499 households)" }} />
          <li dangerouslySetInnerHTML={{ __html: "Frederick County Data Centers page (application pause)" }} />
          <li dangerouslySetInnerHTML={{ __html: "Catellus hyperscale campus program (2.4 GW / 17.4M SF / ~2,100 acres)" }} />
        </ul>
      </article>
    </SiteShell>
  );
}
