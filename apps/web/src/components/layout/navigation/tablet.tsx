import Image from "next/image";
import Link from "next/link";
import { Menu, User } from "lucide-react";
import type { NavLink } from "@/data/components/navigation";

export default function Tablet({
  links: _links,
  isScrolled = true,
}: {
  links: readonly NavLink[];
  isScrolled?: boolean;
}) {
  void _links;
  const text = isScrolled
    ? "text-charcoal hover:text-mountain-slate"
    : "text-snow-white hover:text-snow-white/80";
  const logoFilter = isScrolled ? "" : "brightness-0 invert";
  return (
    <nav
      className="grid grid-cols-[auto_1fr_auto] items-center px-(--page-gutter) h-16 w-full"
      aria-label="Primary tablet"
    >
      <button
        type="button"
        className={`inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mountain-slate/30 rounded-full pr-2 ${text}`}
        aria-label="Open navigation"
      >
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full">
          <Menu className="w-5 h-5" aria-hidden />
        </span>
        <span className="text-body-sm font-avenir-lt-pro-roman tracking-caption uppercase leading-none">Menu</span>
      </button>

      <Link href="/" aria-label="Batik Nusantara - Beranda" className="justify-self-center no-underline">
        <Image
          src="/brand/logo-batik-nusantara.webp"
          alt="Batik Nusantara"
          width={300}
          height={100}
          priority
          className={`h-10 w-auto object-contain transition-[filter] duration-300 ${logoFilter}`}
        />
      </Link>

      <div className="flex items-center justify-self-end">
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
