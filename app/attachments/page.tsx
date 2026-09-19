import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Supporting Materials",
};

export default function Page() {
  return (
    <SiteShell current="/attachments">
      <Link href="/" className="dab-back">
        ← Packet home
      </Link>
      <article className="dab-prose">
        <h2>Supporting Materials</h2>
        <h3 id="bylaws">Bylaws highlights — DAB ENERGY TRUST</h3>
        <div className="overflow-x-auto"><table><tbody>
            <tr>
              <th dangerouslySetInnerHTML={{ __html: "Article" }} />
              <th dangerouslySetInnerHTML={{ __html: "Highlight" }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>I \u2014 Name</strong>" }} />
              <td dangerouslySetInnerHTML={{ __html: "DAB ENERGY TRUST (Doubs \u00b7 Adamstown \u00b7 Buckeystown). Seat in Doubs, Adamstown, or Buckeystown \u2014 not confined to Winchester Hall." }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>II \u2014 Purpose</strong>" }} />
              <td dangerouslySetInnerHTML={{ __html: "Energy dividend to Tier 1 residential meters; funded by CDI load and infrastructure rent. ZIP codes are not the eligibility lock. Exclusive by design \u2014 not Frederick City." }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>III \u2014 Beneficiaries</strong>" }} />
              <td dangerouslySetInnerHTML={{ __html: "Adamstown CDP + Buckeystown CDP + published Doubs list. Hard Census: <strong>710 + 499 = 1,209</strong>. Doubs is not a CDP. Expansion only by board vote, new expansion ordinance, and elder consult where applicable." }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>IV \u2014 Board</strong>" }} />
              <td dangerouslySetInnerHTML={{ __html: "Five voting members; at least one seat per town; default <strong>2 / 2 / 1</strong>. Doubs interim seat until the Doubs list is adopted." }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>IV-A \u2014 Elections</strong>" }} />
              <td dangerouslySetInnerHTML={{ __html: "Weekend town hall; preferred location Adamstown Park or Buckeystown Park. Proof of residency: license, utility bill, or lease." }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>V\u2013VIII</strong>" }} />
              <td dangerouslySetInnerHTML={{ __html: "Duties (megawatt reports; publish by March 31); restricted funds; quarterly meetings under the Open Meetings Act; conflicts and recusal." }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>IX / IX-A</strong>" }} />
              <td dangerouslySetInnerHTML={{ __html: "Amendment lock; elder consult \u2014 ten residents age 65 or older with at least ten years in Doubs, Adamstown, or Buckeystown before Tier 1 geography-change votes; advisory, not a veto." }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>X \u2014 Dissolution</strong>" }} />
              <td dangerouslySetInnerHTML={{ __html: "Last dividend to Tier 1 meters; any residue only to energy-burden aid within Tier 1." }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>Schedule A</strong>" }} />
              <td dangerouslySetInnerHTML={{ __html: "Proposed floor <strong>$250</strong> per meter per year; <strong>$1/MWh</strong> of prior-twelve-month campus IT load between floor and cap; proposed cap <strong>$1,000</strong>; not enacted until Council adopts." }} />
            </tr>
          </tbody></table></div>
        <p dangerouslySetInnerHTML={{ __html: "When Council enacts the Trust, the January 20, 2026 grandfather cutoff and host-community rebate framing in this packet should be incorporated into Schedule A and Article III." }} />
        <h3 id="handout">Resident handout / script</h3>
        <p dangerouslySetInnerHTML={{ __html: "<strong>DAB ENERGY TRUST</strong> Doubs \u00b7 Adamstown \u00b7 Buckeystown \u2014 Our Home, Our Coalition" }} />
        <h3 id="script">Spoken remarks</h3>
        <p dangerouslySetInnerHTML={{ __html: "Why we\u2019re doing this \u2014 my wife pulls out of our driveway onto MD 85 with our six-month-old and has to time it like a gap in freeway traffic. That\u2019s not a statistic. That\u2019s our morning." }} />
        <p dangerouslySetInnerHTML={{ __html: "MD 85 is Buckeystown Pike \u2014 a state highway through the Buckeystown Historic District. We are Doubs, Adamstown, Buckeystown \u2014 Our Home, Our Coalition. We like it here. Keep Frederick looking like Frederick." }} />
        <p dangerouslySetInnerHTML={{ __html: "About twelve hundred census households in Adamstown and Buckeystown, plus Doubs on a published address list. The CDI overlay is mapped. Catellus is planned at two-point-four gigawatts. Construction is underway. About fifty-three million in Quantum-related recordation already collected \u2014 and it is not paying our electric bills." }} />
        <p dangerouslySetInnerHTML={{ __html: "No matter who you vote for, data centers are still going to be built here. A slogan does not stop steel. What we need is what we are due \u2014 a host-community rebate through a Trust we control: operator-funded meter credits. Nobody else generated this. Winchester Hall numbers came off Manor Woods ground." }} />
        <p dangerouslySetInnerHTML={{ __html: "Proposed floor two hundred fifty a year; proposed cap one thousand a year \u2014 dollar per megawatt-hour on prior-twelve-month campus IT load between those rails \u2014 not law until you pass it. Grandfather the buildings and lawful uses that existed on January twentieth, twenty twenty-six. No new buildings after that cutoff. Dividend is the floor; boundary is the wall \u2014 three communities only, not Frederick City." }} />
        <p dangerouslySetInnerHTML={{ __html: "Not a lawsuit. Not a protest. Not a political campaign. Neighbors with a plan." }} />
        <p dangerouslySetInnerHTML={{ __html: "Doubs, Adamstown, Buckeystown first. That is the ask." }} />
        <h3 id="summary">Summary table</h3>
        <div className="overflow-x-auto"><table><tbody>
            <tr>
              <th dangerouslySetInnerHTML={{ __html: "<strong>Who</strong>" }} />
              <th dangerouslySetInnerHTML={{ __html: "Residential meters in Adamstown CDP, Buckeystown CDP, or on the published Doubs list (Doubs is a hamlet, not a Census CDP). Not ZIP-locked. Grandfather: existing buildings, dwellings, and lawful uses as of <strong>January 20, 2026</strong> only." }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>How many</strong>" }} />
              <td dangerouslySetInnerHTML={{ __html: "Adamstown <strong>710</strong> + Buckeystown <strong>499</strong> = <strong>1,209</strong> Census households. No Doubs household count is asserted." }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>Campus</strong>" }} />
              <td dangerouslySetInnerHTML={{ __html: "Planned <strong>2.4 GW</strong> \u00b7 about <strong>17.4 million square feet</strong> \u00b7 about <strong>2,100 acres</strong> (CDI overlay about <strong>2,614.9 acres</strong>) \u00b7 construction underway" }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>County collected</strong>" }} />
              <td dangerouslySetInnerHTML={{ __html: "About <strong>$53 million</strong> Quantum-related recordation (HR&A $52.97 million). \u201c$110 million\u201d Catellus package rejected September 14, 2026. Countywide forecasts <strong>$41M / $68.8M / $215M</strong> are buildout forecasts, not DAB pocket money." }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>Proposed floor / cap</strong>" }} />
              <td dangerouslySetInnerHTML={{ __html: "<strong>$250 / $1,000</strong> per meter per year \u2014 <strong>$1/MWh</strong> between floor and cap \u2014 proposed, not enacted law" }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>Rebate</strong>" }} />
              <td dangerouslySetInnerHTML={{ __html: "Host-community rebate for site, grid edge, roads, rural buffer, and lived impact. Nobody else generated this. Winchester Hall numbers came off Manor Woods ground." }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>Three tools</strong>" }} />
              <td dangerouslySetInnerHTML={{ __html: "Energy Trust \u00b7 public infrastructure lease \u00b7 residual / state equity authority" }} />
            </tr>
            <tr>
              <td dangerouslySetInnerHTML={{ __html: "<strong>Boundary and board</strong>" }} />
              <td dangerouslySetInnerHTML={{ __html: "Expansion only by board vote, new ordinance, and elder consult. Board: five seats; each town at least one; default 2/2/1." }} />
            </tr>
          </tbody></table></div>
        <h3>Ask of candidates and officials</h3>
        <p dangerouslySetInnerHTML={{ __html: "I will put a DAB ENERGY TRUST dividend \u2014 megawatts to meters in Adamstown CDP, Buckeystown CDP, and on the Doubs list, with grandfather cutoff January 20, 2026 \u2014 ahead of any countywide data-center benefit or zoning freeze, and condition new CDI occupancy and any DRRA on that Trust." }} />
        <h3 id="letter">Resident proposal letter</h3>
        <p dangerouslySetInnerHTML={{ __html: "<strong>DAB ENERGY TRUST</strong> Doubs \u00b7 Adamstown \u00b7 Buckeystown \u2014 Our Home, Our Coalition" }} />
        <p dangerouslySetInnerHTML={{ __html: "A note to our neighbors in Doubs, Adamstown, and Buckeystown" }} />
        <p dangerouslySetInnerHTML={{ __html: "Friends\u2014" }} />
        <p dangerouslySetInnerHTML={{ __html: "I\u2019m a mechanic, not a speechwriter, so I\u2019ll keep this plain. Something big is landing on our edge of the county. No matter who you vote for, data centers are still going to be built here. The overlay is mapped. Construction is underway. A slogan does not stop steel." }} />
        <p dangerouslySetInnerHTML={{ __html: "So we carve out something for ourselves \u2014 because we absolutely should. It\u2019s our home. That carve-out is the <strong>DAB ENERGY TRUST</strong>: Doubs, Adamstown, and Buckeystown only \u2014 not Frederick City, not the whole county tagging along. Operators fund meter credits; we don\u2019t raise our tax rate. Proposed floor <strong>$250</strong> and cap <strong>$1,000</strong> per meter per year \u2014 the yearly credit follows prior-twelve-month campus IT load under the dollar-per-megawatt-hour rule, between those rails \u2014 proposed, not law yet." }} />
        <p dangerouslySetInnerHTML={{ __html: "We like it here. Keep Frederick looking like Frederick. Grandfather the buildings and lawful uses that already existed on <strong>January 20, 2026</strong>. No new construction after that cutoff gets Trust preference. And say it plain: host communities are why this revenue exists. About <strong>$53 million</strong> already collected on Quantum-related recordation is not a local meter credit. Countywide forecasts are Winchester Hall numbers \u2014 not Manor Woods numbers. Nobody else generated this. Winchester Hall numbers came off Manor Woods ground. That is a rebate and credit argument \u2014 not an accusation of crime." }} />
        <p dangerouslySetInnerHTML={{ __html: "Hard Census numbers for the two census places: Adamstown <strong>710</strong> + Buckeystown <strong>499</strong> = <strong>1,209</strong> households. Doubs is a small unincorporated hamlet, not a census place \u2014 homes there join only on a published address list Council adopts by ordinance. We are not inventing a Doubs count." }} />
        <p dangerouslySetInnerHTML={{ __html: "Even outside data centers, apartments tend to follow. A Trust we control gives us a business deal we can live with and a line against that next wave of sprawl. Keep home beautiful." }} />
        <p dangerouslySetInnerHTML={{ __html: "Not a lawsuit. Not a protest. Not a political campaign. Neighbors with a plan. I\u2019m very busy with my newborn; that doesn\u2019t mean I can\u2019t make a few minutes for this. If you\u2019re in Doubs, Adamstown, or Buckeystown, read this packet and help us get the ordinance introduced." }} />
        <p dangerouslySetInnerHTML={{ __html: "Our home. Our coalition." }} />
        <p dangerouslySetInnerHTML={{ __html: "Respectfully," }} />
        <p dangerouslySetInnerHTML={{ __html: "Nicholas Markoff" }} />
        <p dangerouslySetInnerHTML={{ __html: "Buckeystown / DAB area, Frederick County, MD" }} />
        <p dangerouslySetInnerHTML={{ __html: "P.S. Preferred town-hall location: Adamstown Park or Buckeystown Park. Bring a license, utility bill, or lease." }} />
      </article>
    </SiteShell>
  );
}
