import Image from "next/image";
import Link from "next/link";
import { Menu, User } from "lucide-react";
import LanguageSwitcher from "./language-switcher";
import type { NavLink } from "@/data/components/navigation";

export default function Mobile({
  links: _links,
  menu = "Menu",
  isScrolled = true,
}: {
  links: readonly NavLink[];
  menu?: string;
  isScrolled?: boolean;
}) {
  void _links;
  const text = isScrolled
    ? "text-charcoal"
    : "text-snow-white";
  const logoFilter = isScrolled ? "" : "brightness-0 invert";
  return (
    <nav
      className="grid grid-cols-[auto_1fr_auto] items-center px-(--page-gutter) h-14 w-full"
      aria-label="Primary mobile"
    >
      <button
        type="button"
        className={`inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mountain-slate/30 rounded-full pr-2 justify-self-start ${text}`}
        aria-label="Open navigation"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full">
          <Menu className="h-5 w-5" aria-hidden />
        </span>
        <span className="hidden">{menu}</span>
      </button>

      <Link href="/" aria-label="Batik Nusantara - Beranda" className="justify-self-center no-underline">
        <Image
          src="/brand/logo-batik-nusantara.webp"
          alt="Batik Nusantara"
          width={270}
          height={90}
          priority
          className={`h-9 w-auto object-contain transition-[filter] duration-300 ${logoFilter}`}
        />
      </Link>

      <div className="flex items-center justify-self-end">
        <LanguageSwitcher className={text} />
        <button
          type="button"
          className={`inline-flex items-center justify-center w-9 h-9 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mountain-slate/30 ${text}`}
          aria-label="Profile"
        >
          <User className="w-4.5 h-4.5" aria-hidden />
        </button>
      </div>
    </nav>
  );
}
