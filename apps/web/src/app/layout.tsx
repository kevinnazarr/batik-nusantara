import { Playfair_Display, Mulish } from "next/font/google";
import "./globals.css";
import { RevealObserver } from "@/components/RevealObserver";

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
    <html lang="en" className={`${playfair.variable} ${mulish.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <RevealObserver />
        <div className="flex-1 flex flex-col">{children}</div>
        <div id="toastRegion" className="toast-region" aria-live="polite" />
      </body>
    </html>
  );
}
