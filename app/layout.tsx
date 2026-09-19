import type { Metadata } from "next";
import { Source_Serif_4, Great_Vibes } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/nav";

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
        className={`${sourceSerif.variable} ${greatVibes.variable} antialiased`}
        style={{
          ["--font-display" as string]: "var(--font-source-serif), Georgia, serif",
          ["--font-body" as string]: "var(--font-source-serif), Georgia, serif",
          ["--font-signature" as string]: "var(--font-cursive), cursive",
        }}
      >
        {children}
      </body>
    </html>
  );
}
