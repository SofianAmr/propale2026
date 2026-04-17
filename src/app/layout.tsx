import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { SiteNav } from "@/components/SiteNav";
import { getSiteUrl } from "@/lib/siteUrl";
import "./globals.css";

const display = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const sans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: "Propale 2026 · Gorges du Verdon",
  description:
    "Vacances d’été 2026 aux Gorges du Verdon — budget calculé pour 8 personnes, du 24 août au 1er septembre.",
  openGraph: {
    title: "Propale 2026 · Gorges du Verdon",
    description:
      "Vacances d’été 2026 aux Gorges du Verdon — budget calculé pour 8 personnes, du 24 août au 1er septembre.",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Propale 2026 · Gorges du Verdon",
    description:
      "Vacances d’été 2026 aux Gorges du Verdon — budget calculé pour 8 personnes, du 24 août au 1er septembre.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f5f4f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${sans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full min-w-0 overflow-x-clip bg-stone-100 font-sans text-base text-stone-900">
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
