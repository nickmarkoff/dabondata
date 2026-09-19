import Link from "next/link";
import Image from "next/image";
import { ACTIONS, DOCS, SITE } from "@/lib/nav";

export function SiteHeader({ showMasthead = false }: { showMasthead?: boolean }) {
  return (
    <header>
      <Image
        src="/art/ornaments/bulb_medallion_128.png"
        alt=""
        width={64}
        height={64}
        className="dab-medallion"
        priority
      />
      {showMasthead ? (
        <Image
          src="/art/mastheads/masthead_dabondata_390.jpg"
          alt={SITE.title}
          width={390}
          height={120}
          className="mx-auto mb-2 h-auto w-full max-w-[340px]"
          priority
        />
      ) : null}
      <h1 className="dab-title">{SITE.title}</h1>
      <p className="dab-subtitle">{SITE.subtitle}</p>
      <p className="dab-coalition">{SITE.coalition}</p>
      <p className="dab-tag">{SITE.tag}</p>
      <p className="dab-date">{SITE.date}</p>
      <Image
        src="/art/dividers/divider_gilt_electric.jpg"
        alt=""
        width={340}
        height={24}
        className="dab-divider"
      />
    </header>
  );
}

export function SiteNav({ current }: { current?: string }) {
  return (
    <nav className="dab-nav" aria-label="Packet sections">
      <Link href="/" aria-current={current === "/" ? "page" : undefined}>
        Home
      </Link>
      {DOCS.map((d) => (
        <Link
          key={d.href}
          href={d.href}
          aria-current={current === d.href ? "page" : undefined}
        >
          {d.short}
        </Link>
      ))}
      <span className="dab-nav-sep" aria-hidden>
        ·
      </span>
      {ACTIONS.map((d) => (
        <Link
          key={d.href}
          href={d.href}
          className="dab-nav-action"
          aria-current={current === d.href ? "page" : undefined}
        >
          {d.short}
        </Link>
      ))}
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="dab-footer">
      <p>{SITE.footer}</p>
      <p style={{ marginTop: "0.45rem" }}>
        {SITE.author} · Buckeystown / DAB area, Frederick County, MD · {SITE.date}
      </p>
      <div className="dab-downloads">
        <a href="/docs/DABonData.md" download>
          Download .md
        </a>
        <a href="/docs/DABonData.docx" download>
          Download .docx
        </a>
        <a href="/docs/DABonData.pdf" download>
          Download .pdf
        </a>
      </div>
    </footer>
  );
}

export function SiteShell({
  children,
  current,
  showMasthead = false,
}: {
  children: React.ReactNode;
  current?: string;
  showMasthead?: boolean;
}) {
  return (
    <div className="dab-page">
      <div className="dab-shell">
        <div className="dab-corners" aria-hidden>
          <span className="c tl" />
          <span className="c tr" />
          <span className="c bl" />
          <span className="c br" />
        </div>
        <SiteHeader showMasthead={showMasthead} />
        <SiteNav current={current} />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
