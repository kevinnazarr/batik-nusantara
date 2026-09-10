"use client";

import Desktop from "./desktop";
import Tablet from "./tablet";
import Mobile from "./mobile";
import { useScrolled } from "./hooks/useScrolled";
import { useI18n } from "@/lib/i18n/context";

export default function Navigation() {
  const isScrolled = useScrolled(20);
  const { dict } = useI18n();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        isScrolled
          ? "bg-snow-white/95 backdrop-blur-md border-warm-parchment shadow-sm"
          : "bg-transparent border-transparent backdrop-blur-none"
      }`}
    >
      <div className="hidden lg:block">
        <Desktop links={dict.nav.links} menu={dict.nav.menu} isScrolled={isScrolled} />
      </div>
      <div className="hidden md:block lg:hidden">
        <Tablet links={dict.nav.links} menu={dict.nav.menu} isScrolled={isScrolled} />
      </div>
      <div className="block md:hidden">
        <Mobile links={dict.nav.links} menu={dict.nav.menu} isScrolled={isScrolled} />
      </div>
    </header>
  );
}
