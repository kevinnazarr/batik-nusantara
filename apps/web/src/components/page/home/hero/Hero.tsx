"use client";
import { useEffect, useState } from "react";

const SLIDES = [
  "https://images.unsplash.com/photo-1609407683391-7d127a00b3e1?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1761517099330-13b34b141d74?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1762111067760-1f0fc2aa2866?q=80&w=1920&auto=format&fit=crop",
];

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let id: ReturnType<typeof setInterval> | null = null;
    const start = () => {
      if (id) return;
      id = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 4000);
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
  }, []);

  return (
    <section className="hero" aria-labelledby="heroTitle">
      <div className="hero__bg" aria-hidden="true">
        {SLIDES.map((src, i) => (
          <div key={src} className={`hero__slide ${i === idx ? "is-active" : ""}`} style={{ backgroundImage: `url('${src}')` }} />
        ))}
      </div>
      <div className="hero__inner">
        <h1 className="hero__title serif--inverse" id="heroTitle">
          Batik, <em>Reimagined.</em>
        </h1>
        <p className="hero__lead">
          Hand-drawn and hand-stamped batik from the workshops of Yogyakarta — heritage woven into modern life, one piece at
          a time.
        </p>
        <div className="hero__ctas">
          <a className="btn btn--ghost" href="/shop">
            Explore the Collection
          </a>
          <a className="btn btn--text btn--text--inverse" href="#story">
            Discover Our Story
          </a>
        </div>
      </div>
      <div className="hero__motif" aria-hidden="true" />
    </section>
  );
}
