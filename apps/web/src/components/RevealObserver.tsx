"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /* If user prefers reduced motion, show everything immediately */
    if (reduced) {
      const showAll = () =>
        document
          .querySelectorAll(".reveal:not(.is-visible)")
          .forEach((el) => el.classList.add("is-visible"));
      showAll();
      /* Also catch elements added after mount */
      const mo = new MutationObserver(showAll);
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    /** Observe all current and future .reveal elements */
    const observe = () => {
      document
        .querySelectorAll(".reveal:not(.is-visible)")
        .forEach((el) => io.observe(el));
    };

    /* Initial scan */
    observe();

    /* Re-scan when new nodes are added to the DOM (late hydration, lazy sections, etc.) */
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
