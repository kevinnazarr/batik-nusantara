"use client";

import Desktop from "./desktop";
import Tablet from "./tablet";
import Mobile from "./mobile";
import { NAV_LINKS } from "@/data/components/navigation";
import { useScrolled } from "./hooks/useScrolled";

export default function Navigation() {
  const isScrolled = useScrolled(20);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? "bg-snow-white border-warm-parchment shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="hidden lg:block">
        <Desktop links={NAV_LINKS} isScrolled={isScrolled} />
      </div>
      <div className="hidden md:block lg:hidden">
        <Tablet links={NAV_LINKS} isScrolled={isScrolled} />
      </div>
      <div className="block md:hidden">
        <Mobile links={NAV_LINKS} isScrolled={isScrolled} />
      </div>
    </header>
  );
}
