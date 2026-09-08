"use client";

import Link from "next/link";
import { HERO_DATA } from "@/data/page/home";
import { useHeroSlideshow } from "./hooks/useHeroSlideshow";

export default function Hero() {
  const activeIndex = useHeroSlideshow(HERO_DATA.backgrounds.length);

  return (
    <section
      aria-labelledby="heroTitle"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-mountain-slate px-6 py-[clamp(56px,8vw,88px)] pt-[calc(var(--header-h,76px)+clamp(24px,5vw,48px))] text-snow-white max-[639px]:pt-[calc(var(--header-h,64px)+24px)]"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        {HERO_DATA.backgrounds.map((bg, i) => (
          <div
            key={bg}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1200 ease-out motion-reduce:transition-none ${i === activeIndex ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url('${bg}')` }}
          />
        ))}
        <div className="absolute inset-0 z-1 bg-[rgba(15,47,58,0.38)]" />
      </div>

      <div className="relative z-2 mx-auto max-w-190 px-6 text-center">
        <h1
          id="heroTitle"
          className="mb-6 text-[clamp(44px,7vw,68px)] leading-display-lg font-bold text-snow-white"
          style={{ fontFamily: "var(--font-playfair), var(--font-serif)" }}
        >
          {HERO_DATA.title.main}{" "}
          <em className="font-normal italic text-honey-gold">{HERO_DATA.title.accent}</em>
        </h1>
        <p
          className="mx-auto mb-10 max-w-[46ch] text-base leading-body"
          style={{ color: "rgba(255,255,255,0.72)" }}
        >
          {HERO_DATA.lead}
        </p>
        <div className="flex flex-wrap justify-center gap-4 max-[639px]:[&>a]:w-full">
          <Link
            href={HERO_DATA.ctas.primary.href}
            className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border-[1.5px] border-snow-white bg-transparent px-8 py-3.5 text-xs font-semibold tracking-[0.167em] uppercase leading-none text-snow-white transition-colors duration-200 ease-out hover:bg-snow-white hover:text-mountain-slate active:scale-[0.98] max-[639px]:w-full"
          >
            {HERO_DATA.ctas.primary.label}
          </Link>
          <Link
            href={HERO_DATA.ctas.secondary.href}
            className="relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-(--radius-links) px-1 py-2 text-xs font-semibold tracking-[0.125em] uppercase leading-none text-snow-white after:absolute after:bottom-0.5 after:left-1 after:right-1 after:h-px after:origin-left after:scale-x-[0.35] after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 max-[639px]:w-full max-[639px]:justify-center"
          >
            {HERO_DATA.ctas.secondary.label}
          </Link>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-2.5 opacity-[0.55]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='10' viewBox='0 0 56 10'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Ccircle cx='7' cy='5' r='3'/%3E%3Ccircle cx='49' cy='5' r='3'/%3E%3Cpath d='M14 2l-1.5 3 1.5 3M42 2l-1.5 3 1.5 3'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
    </section>
  );
}
