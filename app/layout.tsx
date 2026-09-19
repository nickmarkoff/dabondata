import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Serif_4, Great_Vibes } from "next/font/google";
import { SITE } from "@/lib/nav";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cursive",
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
        className={`${playfair.variable} ${sourceSerif.variable} ${greatVibes.variable} antialiased`}
        style={{
          ["--font-display" as string]: "var(--font-playfair), Georgia, serif",
          ["--font-body" as string]: "var(--font-source-serif), Georgia, serif",
          ["--font-signature" as string]: "var(--font-cursive), cursive",
        }}
      >
        {children}
      </body>
    </html>
  );
}
