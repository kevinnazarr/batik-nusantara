"use client";
import { useEffect, useState } from "react";
import type { HeroData } from "@/data/home";

export function Hero({ data }: { data: HeroData }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let id: ReturnType<typeof setInterval> | null = null;
    const start = () => {
      if (id) return;
      id = setInterval(() => setIdx((i) => (i + 1) % data.slides.length), 4000);
    };
    const stop = () => {
      if (id) {
        clearInterval(id);
        id = null;
      }
    };
    const onVis = () => (document.hidden ? stop() : start());
    start();
    document.addEventListener("visibilitychange", onVis);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [data.slides.length]);

  return (
    <section className="hero" aria-labelledby="heroTitle">
      <div className="hero__bg" aria-hidden="true">
        {data.slides.map((src, i) => (
          <div key={src} className={`hero__slide ${i === idx ? "is-active" : ""}`} style={{ backgroundImage: `url('${src}')` }} />
        ))}
      </div>
      <div className="hero__inner">
        <h1 className="hero__title serif--inverse" id="heroTitle">
          {data.title}
        </h1>
        <p className="hero__lead">{data.lead}</p>
        <div className="hero__ctas">
          <a className="btn btn--ghost" href={data.primaryCta.href}>
            {data.primaryCta.label}
          </a>
          <a className="btn btn--text btn--text--inverse" href={data.secondaryCta.href}>
            {data.secondaryCta.label}
          </a>
        </div>
      </div>
      <div className="hero__motif" aria-hidden="true" />
    </section>
  );
}
