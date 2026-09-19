import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { GWChatWidget } from "@/components/GWChatWidget";
import { PDF_BUCKETS } from "@/lib/downloads";
import { ACTIONS, DOCS, SITE } from "@/lib/nav";

export function SiteHeader({ showMasthead = false }: { showMasthead?: boolean }) {
  return (
    <header className={showMasthead ? "dab-header dab-header-hero" : "dab-header dab-header-inner"}>
      {showMasthead ? (
        <Image
          src="/art/mobile/masthead_390_compact.png"
          alt={SITE.title}
          width={390}
          height={389}
          className="dab-masthead"
          sizes="(min-width: 720px) 390px, 100vw"
          priority
        />
      ) : (
        <>
          <div className="dab-inner-rail" aria-hidden="true">
            <span className="dab-inner-rail-rule" />
            <span className="dab-fleuron" />
            <span className="dab-inner-rail-rule" />
          </div>
          <p className="dab-wordmark">{SITE.title}</p>
          <h1 className="dab-title-sr">{SITE.title}</h1>
        </>
      )}
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
      <div className="dab-footer-downloads">
        <p className="dab-footer-dl-kicker">
          PDF downloads ·{" "}
          <Link href="/sources">All on Sources</Link>
        </p>
        {PDF_BUCKETS.map((bucket) => (
          <div key={bucket.id} className="dab-footer-dl-group">
            <p className="dab-footer-dl-label">{bucket.title}</p>
            <div className="dab-downloads">
              {bucket.items.map((doc) => (
                <a key={doc.href} href={doc.href} download>
                  {doc.label}
                </a>
              ))}
            </div>
          </div>
        ))}
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
        className={[
          "dab-page",
          showMasthead ? "dab-page-home" : "dab-page-inner",
          current === "/sign" || current === "/involve" ? "dab-page-fab-clear" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="dab-shell">
          <SiteHeader showMasthead={showMasthead} />
          <p className="dab-update-note" role="status">
            {SITE.updateNote}
          </p>
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
