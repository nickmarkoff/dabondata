import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { GWChatWidget } from "@/components/GWChatWidget";
import { ACTIONS, DOCS, SITE } from "@/lib/nav";

export function SiteHeader({ showMasthead = false }: { showMasthead?: boolean }) {
  return (
    <header>
      <Image
        src="/art/mobile/masthead_390_compact.png"
        alt={showMasthead ? SITE.title : ""}
        width={390}
        height={105}
        className="dab-masthead"
        priority
      />
      {showMasthead ? null : <h1 className="dab-title-sr">{SITE.title}</h1>}
      <Image
        src="/art/dividers/divider_ink_rule_340.png"
        alt=""
        width={340}
        height={28}
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
      <p style={{ marginTop: "0.35rem" }}>{SITE.handle}</p>
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
    <>
      <div
        className={
          current === "/sign" || current === "/involve"
            ? "dab-page dab-page-fab-clear"
            : "dab-page"
        }
      >
        <div className="dab-shell">
          <SiteHeader showMasthead={showMasthead} />
          <SiteNav current={current} />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </div>
      <Suspense fallback={null}>
        <GWChatWidget />
      </Suspense>
    </>
  );
}
