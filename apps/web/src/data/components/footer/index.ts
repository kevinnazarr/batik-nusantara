export type FooterLink = { label: string; href: string };
export type FooterColumn = { title: string; links: readonly FooterLink[] };

export const FOOTER_BRAND = {
  monogram: "S",
  word: "Serat",
  sub: "Batik Atelier · Yogyakarta",
  description:
    "Serat is a batik atelier working with artisan studios across Java — preserving the craft of hand-drawn and hand-stamped cloth, and shaping it for contemporary life.",
} as const;

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    title: "Shop",
    links: [
      { label: "All Pieces", href: "/shop" },
      { label: "Batik Shirts", href: "/shop?cat=Shirts" },
      { label: "Batik Dresses", href: "/shop?cat=Dresses" },
      { label: "Outerwear", href: "/shop?cat=Outerwear" },
      { label: "Batik Fabric", href: "/shop?cat=Fabric" },
      { label: "Accessories", href: "/shop?cat=Accessories" },
    ],
  },
  {
    title: "Atelier",
    links: [
      { label: "Our Story", href: "/stories" },
      { label: "The Artisans", href: "/stories" },
      { label: "Motifs & Meaning", href: "/stories" },
      { label: "Sustainability", href: "#" },
      { label: "The Journal", href: "/stories" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Shipping & Delivery", href: "#" },
      { label: "Returns & Exchanges", href: "#" },
      { label: "Size Guide", href: "#" },
      { label: "Care Guide", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
] as const;

export const FOOTER_BOTTOM = {
  copyright: "© 2026 Serat Batik Atelier · Yogyakarta, Indonesia",
  links: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
  ],
} as const;

export const FOOTER_SOCIAL: readonly FooterLink[] = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Pinterest", href: "#" },
] as const;
