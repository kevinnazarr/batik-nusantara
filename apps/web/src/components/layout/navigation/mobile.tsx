"use client";

import Link from "next/link";
import { useState } from "react";

type NavLink = { label: string; href: string };

export default function Mobile({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="flex items-center justify-between px-4 h-14" aria-label="Primary mobile">
        <Link
          href="/"
          className="font-itc-giovanni-std-bold text-mountain-slate text-[18px] leading-none tracking-[-0.02em]"
        >
          BATIK NUSANTARA
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center w-9 h-9 border border-warm-parchment rounded-full text-charcoal"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-body-sm font-avenir-lt-pro-roman leading-none">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-warm-parchment bg-snow-white">
          <ul className="flex flex-col px-4 py-4 gap-1">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-body-sm font-avenir-lt-pro-roman text-charcoal uppercase tracking-[1.5px] py-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="flex gap-6 pt-4 mt-2 border-t border-warm-parchment">
              <Link
                href="/search"
                onClick={() => setOpen(false)}
                className="text-body-sm font-avenir-lt-pro-roman text-charcoal uppercase tracking-[1.5px]"
              >
                Search
              </Link>
              <Link
                href="/cart"
                onClick={() => setOpen(false)}
                className="text-body-sm font-avenir-lt-pro-roman text-charcoal uppercase tracking-[1.5px]"
              >
                Cart (0)
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
