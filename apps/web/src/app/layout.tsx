import type { Metadata } from "next";
import { Playfair_Display, Mulish } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileDrawer } from "@/components/layout/MobileDrawer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Serat Batik Atelier — Batik, Reimagined",
  description:
    "Hand-drawn and hand-stamped batik from Yogyakarta — heritage woven into modern life. Shirts, dresses, fabric and accessories, crafted by Indonesian artisans.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${mulish.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <MobileDrawer />
        <div className="flex-1 flex flex-col">{children}</div>
        <SiteFooter />
        <div id="toastRegion" className="toast-region" aria-live="polite" />
      </body>
    </html>
  );
}
