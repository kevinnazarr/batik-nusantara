import type { Metadata } from "next";
import { Playfair_Display, Mulish } from "next/font/google";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import Providers from "@/components/providers";
import SmoothScroll from "@/hooks/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/favicon.webp", type: "image/webp" }],
  },
};

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${playfair.variable} ${mulish.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Providers>
          <SmoothScroll>
            <Navigation />
            <div className="flex-1 flex flex-col">{children}</div>
            <Footer />
          </SmoothScroll>
        </Providers>
        <div id="toastRegion" className="toast-region" aria-live="polite" />
      </body>
    </html>
  );
}
