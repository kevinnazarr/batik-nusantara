import Link from "next/link";
import Image from "next/image";
import { FEATURED_DATA } from "@/data/page/home";

export default function Featured() {
  return (
    <section className="bg-snow-white py-24 md:py-32" aria-labelledby="featuredTitle">
      <div className="mx-auto max-w-140 px-6">
        <div className="mb-14 text-center md:mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-honey-gold">
            Featured Collections
          </p>
          <h2
            id="featuredTitle"
            className="text-[clamp(28px,4vw,40px)] leading-tight font-bold text-charcoal"
            style={{ fontFamily: "var(--font-playfair), var(--font-serif)" }}
          >
            Three ways to wear heritage.
          </h2>
        </div>
      </div>

      <div className="mx-auto grid max-w-140 grid-cols-1 gap-6 px-6 sm:grid-cols-3 sm:gap-5">
        {FEATURED_DATA.map((item, i) => (
          <Link
            key={item.title}
            href={item.href}
            className="group relative block aspect-3/4 overflow-hidden rounded-xl"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span className="absolute inset-0 z-1 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
            <span className="absolute inset-0 z-2 flex flex-col justify-end p-6 md:p-8">
              <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">
                {item.caption}
              </span>
              <span className="mb-3 text-xl font-bold leading-tight text-snow-white md:text-2xl">
                {item.title}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.125em] text-honey-gold transition-colors group-hover:text-snow-white">
                {item.linkLabel}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
