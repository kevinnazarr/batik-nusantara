"use client";

import { useEffect, useState } from "react";

export function useHeroSlideshow(length: number, intervalMs = 5000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [length, intervalMs]);

  return index;
}
