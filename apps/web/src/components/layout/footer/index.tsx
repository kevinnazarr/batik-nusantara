import Link from "next/link";
import { FOOTER_BRAND, FOOTER_COLUMNS, FOOTER_BOTTOM, FOOTER_SOCIAL } from "@/data/components/footer";

export default function Footer() {
  return (
    <footer className="bg-mountain-slate text-snow-white pt-30">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="max-w-[280px] md:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Serat Batik Atelier — home" className="mb-6 inline-flex flex-col items-start gap-2.5">
              <span className="font-serif text-[34px] font-bold italic leading-none text-honey-gold">
                {FOOTER_BRAND.monogram}
              </span>
              <span className="text-[18px] font-semibold tracking-[0.05em] text-snow-white leading-none">
                {FOOTER_BRAND.word}
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-white/70 leading-none">
                {FOOTER_BRAND.sub}
              </span>
            </Link>
            <p className="mb-6 text-sm leading-6 text-white/70">{FOOTER_BRAND.description}</p>
            <div className="flex gap-2">
              {FOOTER_SOCIAL.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-snow-white transition-colors hover:border-snow-white hover:bg-snow-white hover:text-mountain-slate"
                >
                  <span className="text-xs font-semibold">{s.label[0]}</span>
                </Link>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.167em] text-honey-gold">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-honey-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6 text-xs uppercase tracking-[0.125em] text-white/70">
          <p>{FOOTER_BOTTOM.copyright}</p>
          <div className="flex gap-6">
            {FOOTER_BOTTOM.links.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-snow-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
