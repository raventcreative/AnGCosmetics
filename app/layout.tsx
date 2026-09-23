import type { Metadata } from "next";
import { Bodoni_Moda, Fraunces, Nunito } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/Schema";
import { site } from "@/lib/site";
import "./globals.css";

/* Logo: Bodoni Moda · Display: Fraunces · Sans: Nunito — semua SIL OFL. */
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-bodoni",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "A&G Cosmetics",
    "body care lokal",
    "shower gel brightening",
    "body lotion whitening",
    "lip tint lokal BPOM",
    "skincare halal Indonesia",
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "id_ID",
    siteName: site.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${bodoni.variable} ${fraunces.variable} ${nunito.variable}`}>
      <body className="min-h-dvh bg-paper antialiased">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-blossom-deep focus:px-4 focus:py-2 focus:text-ivory"
        >
          Lewati ke konten
        </a>
        <OrganizationSchema />
        <Navbar />
        <main id="konten">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
