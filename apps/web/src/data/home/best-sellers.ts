import type { SectionHead } from "./shared";

// Best-sellers product data lives in @/lib/data (PRODUCTS, filtered by bestSeller: true).
// This file holds the section header so the folder structure mirrors page/best-sellers.
// Add overrides here if the section copy ever diverges from the component fallback.

export const BEST_SELLERS_HEAD: SectionHead = {
  eyebrow: "Best Sellers",
  title: "Loved, worn, returned to.",
};

export type BestSellersData = SectionHead;
