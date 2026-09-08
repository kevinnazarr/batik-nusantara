import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./newsletter-form";
import {
  FOOTER_HERO,
  FOOTER_CONTACT,
  FOOTER_NAV,
  FOOTER_NAV_COLUMNS,
  FOOTER_NEWSLETTER,
  FOOTER_BOTTOM,
  FOOTER_SOCIAL,
} from "@/data/components/footer";

function SocialIcon({ label }: { label: string }) {
  const normalized = label.toLowerCase();

  if (normalized.includes("instagram")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.7">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.3" cy="6.8" r="1" className="fill-current stroke-none" />
      </svg>
    );
  }

  if (normalized.includes("facebook")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M13.8 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V10H8.6v3h2.5v8h2.7Z" />
      </svg>
    );
  }

  if (normalized.includes("linkedin")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M5.2 8.3A1.7 1.7 0 1 0 5.2 5a1.7 1.7 0 0 0 0 3.3Zm-1.4 10.8h2.8V9.9H3.8v9.2Zm4.6 0h2.8V14c0-1.3.2-2.6 1.9-2.6 1.7 0 1.7 1.5 1.7 2.7v5h2.8v-5.8c0-2.8-.6-4.9-4-4.9-1.6 0-2.6.9-3 1.7h-.1V9.9H8.4v9.2Z" />
      </svg>
    );
  }

  return <span className="text-sm font-medium">{label.charAt(0).toUpperCase()}</span>;
}

export default function Footer() {
  return (
    <footer className="bg-mountain-slate text-snow-white">
      <div className="border-b border-white/10 px-6 py-12 md:py-14">
        <Link
          href="/"
          aria-label="Batik Nusantara — home"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <Image
            src={FOOTER_HERO.logo}
            alt={FOOTER_HERO.logoAlt}
            width={360}
            height={120}
            className="h-14 w-auto object-contain md:h-15.5"
          />
          <p className="mt-5 font-serif text-[21px] leading-[1.35] text-white/90 md:text-[23px]">
            {FOOTER_HERO.tagline.split(" — ")[0]} — {FOOTER_HERO.tagline.split(" — ")[1]}
          </p>
        </Link>
      </div>

      <div className="grid border-b border-white/10 lg:grid-cols-3">
        <div className="px-8 py-12 md:px-12 md:py-14 lg:border-r lg:border-white/10">
          <h4 className="mb-10 text-[11px] font-medium uppercase tracking-[0.2em] text-honey-gold">
            {FOOTER_CONTACT.title}
          </h4>

          <div className="space-y-6">
            <div>
              <p className="text-[19px] leading-tight md:text-[21px]">{FOOTER_CONTACT.name}</p>
              <p className="mt-1 text-[17px] leading-[1.45] text-white/90">
                {FOOTER_CONTACT.address.map((line, index) => (
                  <span key={`${line}-${index}`} className="block">
                  {line}
                </span>
                ))}
              </p>
            </div>

            <div className="space-y-1 text-[17px] leading-[1.45] text-white/90">
              <p>{FOOTER_CONTACT.phone}</p>
              <p>{FOOTER_CONTACT.email}</p>
            </div>
          </div>

          <p className="mt-20 max-w-65 text-[15px] leading-6 text-white/80">
            {FOOTER_CONTACT.tagline}
          </p>
        </div>

        <div className="px-8 py-12 md:px-12 md:py-14 lg:border-r lg:border-white/10">
          <h4 className="mb-10 text-[11px] font-medium uppercase tracking-[0.2em] text-honey-gold">
            {FOOTER_NAV.title}
          </h4>

          <div className="grid grid-cols-2 gap-x-12 gap-y-3 max-w-105">
            {FOOTER_NAV_COLUMNS.map((col) =>
              col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[15px] leading-6 text-white/90 transition-colors hover:text-honey-gold"
                >
                  {link.label}
                </Link>
              )),
            )}
          </div>
        </div>

        <div className="px-8 py-12 md:px-12 md:py-14">
          <h4 className="mb-10 text-[11px] font-medium uppercase tracking-[0.2em] text-honey-gold">
            {FOOTER_NEWSLETTER.title}
          </h4>

          <p className="max-w-95.5 text-subheading leading-[1.5] text-white/95 md:text-[22px]">
            {FOOTER_NEWSLETTER.heading}
          </p>

          <div className="mt-10 max-w-125">
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="grid items-center gap-6 px-8 py-6 md:grid-cols-3 md:px-12">
        <div className="flex items-center gap-3 justify-self-start">
          {FOOTER_SOCIAL.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-white/65 transition-colors hover:border-honey-gold/50 hover:text-honey-gold"
            >
              <SocialIcon label={social.label} />
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-2 justify-self-start text-[13px] text-white/55 md:justify-self-center">
          {FOOTER_BOTTOM.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-honey-gold hover:decoration-honey-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-[13px] text-white/45 md:justify-self-end">© {new Date().getFullYear()} {FOOTER_BOTTOM.copyright}</p>
      </div>
    </footer>
  );
}
