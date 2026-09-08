import Link from "next/link";
import { Menu, User } from "lucide-react";

type NavLink = { label: string; href: string };

export default function Tablet({ links: _links }: { links: NavLink[] }) {
  void _links;
  return (
    <nav
      className="grid grid-cols-[auto_1fr_auto] items-center px-[var(--page-gutter)] h-16 w-full"
      aria-label="Primary tablet"
    >
      <button type="button" className="inline-flex items-center gap-2 text-charcoal hover:text-mountain-slate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mountain-slate/30 rounded-full pr-2" aria-label="Open navigation">
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full">
          <Menu className="w-5 h-5" aria-hidden />
        </span>
        <span className="text-body-sm font-avenir-lt-pro-roman tracking-[1.5px] uppercase leading-none">Menu</span>
      </button>

      <Link
        href="/"
        className="justify-self-center font-itc-giovanni-std-bold text-mountain-slate text-[18px] leading-none tracking-[-0.02em] no-underline"
      >
        BATIK NUSANTARA
      </Link>

      <div className="flex items-center justify-self-end">
        <button type="button" className="inline-flex items-center justify-center w-9 h-9 text-charcoal hover:text-mountain-slate rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mountain-slate/30" aria-label="Profile">
          <User className="w-[18px] h-[18px]" aria-hidden />
        </button>
      </div>
    </nav>
  );
}
