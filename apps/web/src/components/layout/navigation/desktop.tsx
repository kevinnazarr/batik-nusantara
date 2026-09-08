import Link from "next/link";

type NavLink = { label: string; href: string };

export default function Desktop({ links }: { links: NavLink[] }) {
  return (
    <nav
      className="mx-auto max-w-[1280px] flex items-center justify-between px-8 h-[72px]"
      aria-label="Primary desktop"
    >
      <Link
        href="/"
        className="font-itc-giovanni-std-bold text-mountain-slate text-[22px] leading-none tracking-[-0.02em]"
      >
        BATIK NUSANTARA
      </Link>

      <ul className="flex items-center gap-8">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-body-sm font-avenir-lt-pro-roman text-charcoal hover:text-mountain-slate uppercase tracking-[1.5px] leading-none"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <Link
          href="/search"
          className="text-body-sm font-avenir-lt-pro-roman text-charcoal hover:text-mountain-slate uppercase tracking-[1.5px]"
        >
          Search
        </Link>
        <Link
          href="/cart"
          className="text-body-sm font-avenir-lt-pro-roman text-charcoal hover:text-mountain-slate uppercase tracking-[1.5px]"
        >
          Cart (0)
        </Link>
      </div>
    </nav>
  );
}
