import type { Metadata, Viewport } from "next";
import { EB_Garamond, Libre_Caslon_Text, Libre_Baskerville, Italianno } from "next/font/google";
import { SITE } from "@/lib/nav";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-caslon",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-scribe",
  display: "swap",
});

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: `${SITE.title} — ${SITE.subtitle}`,
    template: `%s · ${SITE.title}`,
  },
  description: `${SITE.coalition}. ${SITE.tag} Compiled packet by ${SITE.author}, ${SITE.date}. Site handle: ${SITE.handle}.`,
  authors: [{ name: SITE.author }],
  openGraph: {
    title: `${SITE.title} — ${SITE.subtitle}`,
    description: SITE.tag,
    type: "website",
  },
  icons: {
    icon: "/art/ornaments/bulb_medallion_128.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} ${libreCaslon.variable} ${libreBaskerville.variable} ${italianno.variable} antialiased`}
        style={{
          ["--font-display" as string]:
            "var(--font-eb-garamond), var(--font-libre-baskerville), var(--font-libre-caslon), Georgia, serif",
          ["--font-body" as string]:
            "var(--font-libre-caslon), var(--font-eb-garamond), var(--font-libre-baskerville), Georgia, serif",
          ["--font-signature" as string]: "var(--font-scribe), cursive",
        }}
      >
        {children}
      </body>
    </html>
  );
}
