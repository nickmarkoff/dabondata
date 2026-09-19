import type { Metadata } from "next";
import { EB_Garamond, Libre_Caslon_Text, Libre_Baskerville, Great_Vibes } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/nav";

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

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cursive",
  display: "swap",
});

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
        className={`${ebGaramond.variable} ${libreCaslon.variable} ${libreBaskerville.variable} ${greatVibes.variable} antialiased`}
        style={{
          ["--font-display" as string]:
            "var(--font-eb-garamond), var(--font-libre-baskerville), var(--font-libre-caslon), Georgia, serif",
          ["--font-body" as string]:
            "var(--font-libre-caslon), var(--font-eb-garamond), var(--font-libre-baskerville), Georgia, serif",
          ["--font-signature" as string]: "var(--font-cursive), cursive",
        }}
      >
        {children}
      </body>
    </html>
  );
}
