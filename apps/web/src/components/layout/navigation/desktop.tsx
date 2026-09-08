import Image from "next/image";
import Link from "next/link";
import { Menu, Globe, Heart, ShoppingBag, User } from "lucide-react";
import type { NavLink } from "@/data/components/navigation";

export default function Desktop({ links: _links }: { links: readonly NavLink[] }) {
  void _links;
  return (
    <nav
      className="grid grid-cols-[auto_1fr_auto] items-center px-(--page-gutter) h-18 w-full"
      aria-label="Primary desktop"
    >
      <button type="button" className="inline-flex items-center gap-2 text-charcoal hover:text-mountain-slate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mountain-slate/30 rounded-full pr-2" aria-label="Open navigation">
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full">
          <Menu className="w-5 h-5" aria-hidden />
        </span>
        <span className="text-body-sm font-avenir-lt-pro-roman tracking-caption uppercase leading-none">Menu</span>
      </button>

      <Link
        href="/"
        aria-label="Batik Nusantara - Beranda"
        className="justify-self-center no-underline"
      >
        <Image
          src="/brand/logo-batik-nusantara.webp"
          alt="Batik Nusantara"
          width={360}
          height={120}
          priority
          className="h-12 w-auto object-contain"
        />
      </Link>

      <div className="flex items-center gap-4 justify-self-end">
        <button type="button" className="inline-flex items-center justify-center w-9 h-9 text-charcoal hover:text-mountain-slate rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mountain-slate/30" aria-label="Bahasa">
          <Globe className="w-4.5 h-4.5" aria-hidden />
        </button>
        <button type="button" className="inline-flex items-center justify-center w-9 h-9 text-charcoal hover:text-mountain-slate rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mountain-slate/30" aria-label="Favorit">
          <Heart className="w-4.5 h-4.5" aria-hidden />
        </button>
        <button type="button" className="inline-flex items-center justify-center w-9 h-9 text-charcoal hover:text-mountain-slate rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mountain-slate/30" aria-label="Keranjang">
          <ShoppingBag className="w-4.5 h-4.5" aria-hidden />
        </button>
        <button type="button" className="inline-flex items-center justify-center w-9 h-9 text-charcoal hover:text-mountain-slate rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mountain-slate/30" aria-label="Profile">
          <User className="w-4.5 h-4.5" aria-hidden />
        </button>
      </div>
    </nav>
  );
}
