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
        <p dangerouslySetInnerHTML={{ __html: "<strong>TO:</strong> County Executive; County Council; Planning Commission <strong>FROM:</strong> Nicholas M., DAB ENERGY TRUST (Doubs \u00b7 Adamstown \u00b7 Buckeystown), Frederick County, MD <strong>DATE:</strong> September 18, 2026 <strong>RE:</strong> DAB ENERGY TRUST \u2014 condition new CDI load and any DRRA on a local energy dividend, infrastructure leasehold, and residual interest for the rural host-community road-box of Doubs, Adamstown, and Buckeystown only <strong>ACTION:</strong> Introduce, enact, and attach to any revived Quantum / Catellus DRRA or site plan" }} />
        <p dangerouslySetInnerHTML={{ __html: "<strong>Subtitle:</strong> Doubs \u00b7 Adamstown \u00b7 Buckeystown \u2014 Our Home, Our Coalition" }} />
        <h3>1. Request</h3>
        <p dangerouslySetInnerHTML={{ __html: "Enact a <strong>DAB ENERGY TRUST</strong> for residential electric meters whose service address sits in the tight rural host-community road-box \u2014 west <strong>Basford Road</strong>, east the <strong>Monocacy River</strong>, south <strong>Tuscarora Road</strong>, north the <strong>Elmer Derr Rd / Harshman Way / New Design Rd / Lime Kiln Rd</strong> belt \u2014 covering <strong>Doubs, Adamstown, and Buckeystown</strong>, and staying short of the Ballenger Creek suburban mass. <strong>Lime Kiln Run</strong> is a creek, not a road." }} />
        <p dangerouslySetInnerHTML={{ __html: "Condition certificates of occupancy for additional Critical Digital Infrastructure (CDI) electrical load, and any Development Rights and Responsibilities Agreement, on three tools:" }} />
        <ul>
          <li dangerouslySetInnerHTML={{ __html: "<strong>A. Energy Trust</strong> \u2014 operators pay per energized megawatt; 100 percent of the dividend goes to eligible DAB meters until the proposed ordinance floor is met." }} />
          <li dangerouslySetInnerHTML={{ __html: "<strong>C. Infrastructure stake</strong> \u2014 county or co-op holds title or a recorded lease on campus-serving water, sewer, roads, and right-of-way pads the public pays for; rent to the Trust." }} />
          <li dangerouslySetInnerHTML={{ __html: "<strong>D. Residual / equity</strong> \u2014 covenant on land rezoned into LI or GI inside the overlay after January 20, 2026; seek 2027 state authority for a non-voting economic interest in CDI projects over 50 MW, dedicated to this Trust." }} />
        </ul>
        <p dangerouslySetInnerHTML={{ __html: "<strong>Do not</strong> fund the dividend by raising the real-property tax rate in these three communities. <strong>Do not</strong> exchange a multi-year zoning freeze for a one-time community-benefits package." }} />
        <p dangerouslySetInnerHTML={{ __html: "<strong>Purpose.</strong> Keep Frederick rural. The Trust pays operator-funded meter credits to host-community households so farmers and rural residents can <strong>remain in their homes</strong> and are less pressed to put land or houses up for sale under sprawl and data-center edge pressure. Grandfather = <strong>stay incentive</strong>, not a growth subsidy. <strong>Exclusive by design.</strong> Credits for meters in this rural road-box only \u2014 the CDI overlay sits here \u2014 <strong>not Frederick City</strong>. No freeloader expansion without a board vote <strong>AND</strong> a new County Council ordinance titled as an expansion (plus elder consult under Article IX-A). No matter who residents vote for, data centers are still going to be built here \u2014 a slogan does not stop steel. Get what is due: operator-funded meter credits (more money in household pockets) and a boundary that protects these places from freeloaders and the apartment/sprawl wave that tends to follow. Dividend = floor; boundary = wall." }} />
        <p dangerouslySetInnerHTML={{ __html: "<strong>Elder consult on geography changes (bylaws Article IX-A).</strong> Before the board votes on any Tier 1 geography change \u2014 expanding Tier 1 beyond this rural road-box, or otherwise amending the Article III geography lock \u2014 it must consult in good faith with ten residents age 65 or older who have lived in Doubs, Adamstown, or Buckeystown for at least ten years. The consult is advisory, on the record, and not a veto; a short summary goes with the minutes. It does not apply to routine clerical addressing corrections that do not enlarge Tier 1." }} />
        <p dangerouslySetInnerHTML={{ __html: "<strong>Board representation lock (bylaws Article IV).</strong> Five voting members; each of the three communities must hold at least one voting seat at all times. Default apportionment 2 Adamstown / 2 Buckeystown / 1 Doubs; Council may change the split by ordinance only if each town still has at least one seat. The Doubs seat is held by a resident of Doubs inside the road-box. Doubs is folded into the box with Adamstown and Buckeystown. This filing does not state a separate Doubs-only census count." }} />
        <h3>2. Why these three communities</h3>
        <p dangerouslySetInnerHTML={{ __html: "Ordinance <strong>26-01-001</strong> (effective <strong>January 20, 2026</strong>) placed the CDI overlay \u2014 approximately <strong>2,614.9 acres</strong> (Maryland Supreme Court figure) \u2014 on the former Eastalco plant north of Adamstown. Those acres are roughly described by the industrial and grid edge around New Design Road, Manor Woods Road, Adamstown Road, Ballenger Creek Pike, and Digital Drive. Buckeystown and Doubs (unincorporated populated place / hamlet, not a Census CDP) sit on that same rural-industrial and grid edge. The road-box that hosts them is described in words in \u00a71 and under Tier 1 below." }} />
        <p dangerouslySetInnerHTML={{ __html: "This is not for city folk up in Frederick who have been moving in and changing everything. It is for people who actually live here \u2014 Doubs, Adamstown, Buckeystown \u2014 Our Home, Our Coalition. We are neighbors with a plan, not a protest." }} />
        <p dangerouslySetInnerHTML={{ __html: "Lived impact in Buckeystown is not a sterile statistic. MD 85 is Buckeystown Pike \u2014 a state highway through the Buckeystown Historic District. Residents pull out onto that road the way you would time a gap in freeway traffic. That is morning life on the overlay\u2019s doorstep." }} />
        <p dangerouslySetInnerHTML={{ __html: "<strong>Tier 1:</strong> residential meters whose service address sits in the tight rural host-community road-box \u2014 west <strong>Basford Road</strong>, east the <strong>Monocacy River</strong>, south <strong>Tuscarora Road</strong>, north the <strong>Elmer Derr Rd / Harshman Way / New Design Rd / Lime Kiln Rd</strong> belt \u2014 covering <strong>Doubs, Adamstown, and Buckeystown</strong>, and staying short of the Ballenger Creek suburban mass. <strong>Lime Kiln Run</strong> is a creek line, not a road. The CDI overlay (~<strong>2,612</strong> acres) and the Quantum / Catellus campus (~<strong>2,100</strong> acres) sit inside this box. About <strong>2,000</strong> homes and about <strong>5,500</strong> residents (Medium confidence; exact GIS clip pending). <strong>ZIP codes are not the eligibility lock</strong> \u2014 including ZIP <strong>21704</strong>, which is far too broad." }} />
        <p dangerouslySetInnerHTML={{ __html: "<em>CDP note (not Trust base):</em> Adamstown CDP <strong>710</strong> + Buckeystown CDP <strong>499</strong> = <strong>1,209</strong> Census households remain <strong>place statistics only</strong> \u2014 Adamstown / Buckeystown CDP 2020 stats (not the Trust base). Doubs is a hamlet, not a Census CDP, and is folded into the road-box." }} />
        <p dangerouslySetInnerHTML={{ __html: "Roughly <strong>1,700\u20132,500</strong> housing units and <strong>4,600\u20136,700</strong> residents until the exact clip. Working print: about <strong>2,000</strong> homes / about <strong>5,500</strong> residents. Not any ZIP. Rates below are proposed, not enacted law; do not lower the <strong>$250</strong> floor or the <strong>$1,000</strong> cap. The 72 MW hall figure is an illustration, not a tariff. Road-box framing uses about <strong>2,612</strong> acres for the overlay; the court figure remains about <strong>2,614.9</strong> acres." }} />
        <p dangerouslySetInnerHTML={{ __html: "<strong>ZIP codes are not the eligibility lock.</strong> ZIP 21710 may roughly track Adamstown street delivery, but ZIP 21717 is a USPS PO Box\u2013only ZIP and does not cover Buckeystown street addresses. Many Buckeystown street addresses use ZIP 21704, a large delivery area with thousands of households \u2014 far too broad for this Trust. Eligibility is the road-box, not any ZIP. Before the first payment, the County Council shall publish a meter eligibility list mapped to the road-box (and any parcel refinements by ordinance)." }} />
        <h3>3. Money already collected — not a local energy credit</h3>
        <p dangerouslySetInnerHTML={{ __html: "HR&A Advisors (October 30, 2025), Tables 3 and 14, report Quantum-related recordation tax through 2025 year-to-date as follows: <strong>$1.40 million</strong> on the Eastalco purchase, <strong>$6.67 million</strong> on tenant sales, and <strong>$44.9 million</strong> on debt service \u2014 <strong>$52.97 million</strong> in total, or about <strong>$53 million</strong>. County Executive Jessica Fitzwater testified that the project had already generated \u201cover $50 million in recordation tax revenue as of November 2025\u201d (SB 427 testimony, February 18, 2026). The same HR&A tables report $2.24 million in real property tax on land through 2025 YTD. This filing does not claim a June 30, 2026 county ledger total." }} />
        <p dangerouslySetInnerHTML={{ __html: "Recordation is split by formula among agricultural preservation, parks, schools, housing, and the general fund; a 2 percent transit share begins in FY2027 under Bill 26-03. That money does not appear as a power-bill credit on Adamstown, Buckeystown, or Doubs meters." }} />
        <p dangerouslySetInnerHTML={{ __html: "On <strong>September 1, 2026</strong>, the County Executive announced a Catellus community-benefits package headlined as <strong>\u201c$110 million\u201d</strong> and tied to a proposed Development Rights and Responsibilities Agreement. The published line items were $30 million for Carroll Manor Elementary School renovations; $40 million for a community center and recreational space; $14.5 million for workforce development and career and technical education; $10.5 million for agricultural land preservation; $10 million for perimeter berming, planting, and trails; $5 million for a community solar project to reduce energy bills for Adamstown residents; and $1 million for a fire engine for the Carroll Manor Volunteer Fire Company \u2014 <strong>$111.0 million</strong> if those figures are added as printed \u2014 together with roughly a 20 percent reduction in planned square footage, an 80 percent reduction in potable water use, and a 433-acre nature reserve on campus. This filing uses the county\u2019s \u201c$110 million\u201d headline and notes the $111.0 million line-item sum. The County Executive <strong>rejected</strong> that package on <strong>September 14, 2026</strong>. New CDI applications remain paused through July 1, 2027 (executive-order extension of September 14, 2026). Vested and under-construction work continues." }} />
        <h3>Estimate — what $5M of solar would cover</h3>
        <p dangerouslySetInnerHTML={{ __html: "The $5 million community solar project in that rejected package was never sized. As an estimate, $5 million buys about 2\u20133 MW of solar (assumes roughly $1.7\u2013$2.5 per watt installed), making about 3,000\u20134,500 MWh a year in Maryland (assumes ~17% capacity factor)." }} />
        <p dangerouslySetInnerHTML={{ __html: "Under those assumptions, that estimate covers roughly 14\u201320% of the about 2,000 homes\u2019 own use (assumes ~11 MWh per home per year), about 0.7\u20131% of one 72 MW hall at 70% load (~441,500 MWh/yr), and about 0.02\u20130.03% of the full 2.4 GW campus at 70% load (~14.7 million MWh/yr)." }} />
        <p dangerouslySetInnerHTML={{ __html: "A one-time solar grant does not offset the host burden. An ongoing meter credit is the fix." }} />
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
        <p dangerouslySetInnerHTML={{ __html: "The <strong>$250 floor</strong> and <strong>$1,000 cap</strong> below are a <strong>proposed</strong> ordinance floor and cap for Council to enact. They are <strong>not current law</strong>. Rates are not lowered for passage." }} />
        <div className="overflow-x-auto"><table><tbody>
            <tr>
              <th dangerouslySetInnerHTML={{ __html: "Rule" }} />
              <th dangerouslySetInnerHTML={{ __html: "About <strong>2,000</strong> eligible meters in the rural road-box (Doubs \u00b7 Adamstown \u00b7 Buckeystown)" }} />
              <th dangerouslySetInnerHTML={{ __html: "Notes" }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "Proposed floor <strong>$250</strong> / meter / year after first hall energized" }} />
              <td dangerouslySetInnerHTML={{ __html: "\u2248 <strong>$500,000</strong> / year" }} />
              <td dangerouslySetInnerHTML={{ __html: "Proposed ordinance floor (annual)" }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>$1 per MWh</strong> of campus IT load, eligible host-community meters only" }} />
              <td dangerouslySetInnerHTML={{ __html: "72 MW hall @ 70% load \u2248 <strong>$441,000</strong> / year (company-side) (\u2248 <strong>$221</strong> / meter if only ~2,000 meters)" }} />
              <td dangerouslySetInnerHTML={{ __html: "Illustration, not a tariff \u2014 annual credit tracks prior-12-month campus IT load between floor and cap" }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "Proposed cap <strong>$1,000</strong> / meter until Council raises it" }} />
              <td dangerouslySetInnerHTML={{ __html: "\u2248 <strong>$2,000,000</strong> / year" }} />
              <td dangerouslySetInnerHTML={{ __html: "Proposed ordinance cap (annual)" }} />
            </tr>
          </tbody></table></div>
        <p dangerouslySetInnerHTML={{ __html: "Proposed floor <strong>$250</strong> and cap <strong>$1,000</strong> per eligible meter per year; <strong>$1 per MWh</strong> of campus IT load between those rails. On about <strong>2,000</strong> meters: floor pool \u2248 <strong>$500,000</strong>/yr; cap pool \u2248 <strong>$2,000,000</strong>/yr. Illustration: one <strong>72 MW</strong> hall at <strong>70%</strong> load \u2248 <strong>$441,000</strong>/yr company-side (\u2248 <strong>$221</strong>/meter on the ~2,000-meter base). <strong>Not law until Council enacts.</strong> Do not fund by raising the local real-property tax rate." }} />
        <p dangerouslySetInnerHTML={{ __html: "Pay as a utility-bill credit if the county obtains a rider; otherwise a county rebate or property-tax credit labeled DAB Energy Dividend (Doubs \u00b7 Adamstown \u00b7 Buckeystown). Exclusive host-community meter credits \u2014 because the overlay sits in this rural box." }} />
        <p dangerouslySetInnerHTML={{ __html: "Medium confidence on the home and resident print; exact GIS clip pending. Roughly <strong>1,700\u20132,500</strong> housing units and <strong>4,600\u20136,700</strong> residents. Not ZIP <strong>21704</strong>, and not any ZIP. Adamstown <strong>710</strong> + Buckeystown <strong>499</strong> = <strong>1,209</strong> are Adamstown / Buckeystown CDP 2020 stats (not the Trust base). Doubs is a hamlet, not a Census CDP, included via the road-box, not via an invented Doubs CDP count. <strong>Lime Kiln Run</strong> is a creek. Stay short of the Ballenger Creek suburban mass. The 72 MW hall at 70% is an illustration, not a tariff." }} />
        <h3>6. Zoning and DRRA hook</h3>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: "\u00a7 1-19-10.1100 CDI overlay; LI/GI only; overlay less than 1% of county land." }} />
          <li dangerouslySetInnerHTML={{ __html: "\u00a7 1-19-8.402 / 8.403 facilities and substations; 500-foot setback if abutting residential." }} />
          <li dangerouslySetInnerHTML={{ __html: "Chapter 1-25 DRRA must list enhanced public benefits and their value \u2014 put the dividend and infrastructure lease in that paragraph." }} />
          <li dangerouslySetInnerHTML={{ __html: "Maryland Supreme Court (opinion filed July 24, 2026): the overlay map is not a referendum subject. Change the map only by new plan and zoning acts." }} />
          <li dangerouslySetInnerHTML={{ __html: "Aim conditions at new load, new map amendments, and any new DRRA. Do not claim confiscation of 2021 vested rights." }} />
        </ul>
        <section id="legal-authority-and-risk">
          <h2>Legal Authority and Risk</h2>
          <p>
            The Trust rests on tools Maryland already gives counties — Development
            Rights and Responsibilities Agreements, local DRRA code, utility
            cost-allocation law, and recent high-court guidance on the CDI
            overlay. The citations below are for County Attorney and Council
            review; this section is research for the packet, not legal advice.
          </p>
          <h3>Maryland Land Use Article §§ 7-301 to 7-306 (DRRA statute)</h3>
          <ul>
            <li>
              <strong>§ 7-301</strong> — Definitions for development rights and
              responsibilities agreements.
            </li>
            <li>
              <strong>§ 7-302</strong> — County authority to enter a DRRA.
            </li>
            <li>
              <strong>§ 7-303</strong> — Required contents, including
              public-welfare conditions and public-facility financing (the
              natural home for a local energy dividend, infrastructure leasehold
              language, and residual-interest covenants tied to new load).
            </li>
            <li>
              <strong>§ 7-304</strong> — Freeze of local laws for the
              agreement’s term (why this filing refuses a multi-year zoning
              freeze traded for a one-time benefits list).
            </li>
            <li>
              <strong>§ 7-305</strong> — Procedures for adoption and
              administration.
            </li>
            <li>
              <strong>§ 7-306</strong> — No forced agreements; a DRRA is
              voluntary.
            </li>
          </ul>
          <h3>Frederick County Code Chapter 1-25</h3>
          <ul>
            <li>
              <strong>§ 1-25-2</strong> — Authority / public principal: the
              County Executive negotiates, executes, and enforces an agreement;
              the County Council holds the hearing and approves or rejects it.
            </li>
            <li>
              <strong>§ 1-25-4</strong> — Contents of a local DRRA — enhanced
              public benefits and their value belong in the agreement text
              (dividend + infrastructure lease + residual tools).
            </li>
          </ul>
          <h3>Public Utilities Article § 4-212</h3>
          <p>
            Residential customers must not bear large-load financial risks. Data
            centers and other large loads must cover their own buildout costs.
            This is the cost-allocation spine for any county utility rider or
            large-load surcharge that funds host-community meter credits without
            shifting grid costs onto ordinary households.
          </p>
          <h3>2026 Utility RELIEF Act</h3>
          <p>
            Lowered the large-load threshold to <strong>25 MW</strong> and
            strengthened Public Service Commission oversight. Brings more
            CDI-scale load squarely under PSC review when financing or tariff
            tools are used.
          </p>
          <h3>
            Maryland Supreme Court,{" "}
            <em>In re Frederick County Data Center Referendum Committee</em>,
            No. 67, Sept. Term 2025 (argued June 30, 2026; opinion filed
            July 24, 2026)
          </h3>
          <p>
            The CDI overlay is <strong>not</strong> subject to referendum. Map
            fights stay in plan-and-zoning acts; community benefit and Trust
            conditions attach through ordinance, DRRA, and site conditions — not
            a ballot veto of the overlay map.
          </p>
          <h3>Louisiana Act 434 (2026)</h3>
          <p>
            State enabling legislation before local tax credits drawn from
            data-center revenue. Useful precedent when Maryland needs a{" "}
            <strong>2027 state bill</strong> to clear a county utility rider or
            a residual equity interest dedicated to a host-community trust.
          </p>
          <h3>Legal Risk</h3>
          <p>
            The county utility rider and any residual equity interest likely
            need <strong>PSC approval</strong> and/or a{" "}
            <strong>2027 state enabling bill</strong>. Conditioning only{" "}
            <strong>new load</strong> and <strong>new DRRAs</strong> — not
            confiscating 2021 vested rights — is the path that avoids takings
            claims on vested entitlements.
          </p>
          <p>
            The Catellus <strong>$110 million</strong> community-benefits
            package was <strong>rejected September 14, 2026</strong>. New CDI
            applications remain <strong>paused through July 1, 2027</strong>. The
            Trust is a different instrument: an ongoing, megawatt-funded meter
            credit for Doubs, Adamstown, and Buckeystown — not a one-time DRRA
            package.
          </p>
        </section>
        <h3>7. What this filing is not</h3>
        <p dangerouslySetInnerHTML={{ __html: "Not a lawsuit. Not a protest. Not a political campaign. Neighbors with a plan \u2014 working people who fix what is broken, not politicians, activists, or consultants with a binder." }} />
        <p dangerouslySetInnerHTML={{ __html: "Not a request to raise taxes in Doubs, Adamstown, or Buckeystown. Not a ZIP-code subsidy. Not a substitute for a state data-center personal-property tax (support that separately and dedicate first dollars to this Trust). Not an invitation for Frederick City or other communities to freeload onto Tier 1 without a board vote AND a new ordinance titled as an expansion. Not legal advice. Ask the County Attorney which of A and C can be enacted under the Charter without a state bill, and publish the answer." }} />
        <h3>8. Prayer</h3>
        <p dangerouslySetInnerHTML={{ __html: "Introduce the DAB ENERGY TRUST ordinance, attach the Trust bylaws as the governing instrument, and refuse any DRRA that omits the dividend, gifts public infrastructure, or freezes zoning for a term of years. Keep the three communities exclusive by design. Keep the boundary the wall. Incorporate the Grandfather Clause and the Public Declaration \u2014 Host-Community Rebate as stated in this packet." }} />
        <p dangerouslySetInnerHTML={{ __html: "Respectfully submitted," }} />
        <p dangerouslySetInnerHTML={{ __html: "Nicholas M." }} />
        <p dangerouslySetInnerHTML={{ __html: "Buckeystown / DAB area, Frederick County, MD" }} />
        <p dangerouslySetInnerHTML={{ __html: "I\u2019m very busy with my six-month-old, but that doesn\u2019t mean I can\u2019t make a few minutes of my time available to quickly handle this. A mechanic\u2019s habit: when something is broken on our road home, you fix it \u2014 you don\u2019t wait for Winchester Hall to invent a feeling about it." }} />
        <h3>Sources (selected)</h3>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: "Maryland Supreme Court opinion (July 24, 2026), In re Frederick County Data Center Referendum Committee, No. 67, Sept. Term 2025" }} />
          <li dangerouslySetInnerHTML={{ __html: "Frederick County CDI Overlay (Ord. 26-01-001)" }} />
          <li dangerouslySetInnerHTML={{ __html: "County Executive rejects Catellus community-benefits agreement (Sept. 14, 2026)" }} />
          <li dangerouslySetInnerHTML={{ __html: "Catellus $110M community-benefit announcement (Sept. 1, 2026)" }} />
          <li dangerouslySetInnerHTML={{ __html: "HR&A Advisors, Quantum Frederick Data Center Development Impact Analysis (Oct. 30, 2025)" }} />
          <li dangerouslySetInnerHTML={{ __html: "County Executive Jessica Fitzwater, SB 427 testimony (Feb. 18, 2026)" }} />
          <li dangerouslySetInnerHTML={{ __html: "Sage Policy Group / Maryland Tech Council, Data Center Impact Report (Oct. 2023)" }} />
          <li dangerouslySetInnerHTML={{ __html: "Maryland State Data Center \u2014 Adamstown CDP 2020 Census profile (710 households; Adamstown / Buckeystown CDP 2020 stats, not the Trust base)" }} />
          <li dangerouslySetInnerHTML={{ __html: "Frederick County \u2014 Buckeystown CDP 2020 Census Profile (499 households; Adamstown / Buckeystown CDP 2020 stats, not the Trust base)" }} />
          <li dangerouslySetInnerHTML={{ __html: "Frederick County Data Centers page (application pause)" }} />
          <li dangerouslySetInnerHTML={{ __html: "Catellus hyperscale campus program (2.4 GW / 17.4M SF / ~2,100 acres)" }} />
        </ul>
      </article>
    </SiteShell>
  );
}
