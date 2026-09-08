import Link from "next/link";

type NavLink = { label: string; href: string };

export default function Tablet({ links }: { links: NavLink[] }) {
  return (
    <nav
      className="mx-auto max-w-[1280px] flex items-center justify-between px-6 h-16"
      aria-label="Primary tablet"
    >
      <Link
        href="/"
        className="font-itc-giovanni-std-bold text-mountain-slate text-[18px] leading-none tracking-[-0.02em] shrink-0"
      >
        BATIK NUSANTARA
      </Link>

      <ul className="flex items-center gap-5">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-caption font-avenir-lt-pro-roman text-charcoal hover:text-mountain-slate uppercase tracking-[1.5px] leading-none"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 shrink-0">
        <Link
          href="/search"
          className="text-caption font-avenir-lt-pro-roman text-charcoal hover:text-mountain-slate uppercase tracking-[1.5px]"
        >
          Search
        </Link>
        <Link
          href="/cart"
          className="text-caption font-avenir-lt-pro-roman text-charcoal hover:text-mountain-slate uppercase tracking-[1.5px]"
        >
          Cart (0)
        </Link>
      </div>
    </nav>
  );
}
