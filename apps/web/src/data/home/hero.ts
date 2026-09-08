export type HeroData = {
  slides: string[];
  title: string;
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const HERO: HeroData = {
  slides: [
    "https://images.unsplash.com/photo-1609407683391-7d127a00b3e1?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1761517099330-13b34b141d74?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1762111067760-1f0fc2aa2866?q=80&w=1920&auto=format&fit=crop",
  ],
  title: "Batik, Reimagined.",
  lead: "Hand-drawn and hand-stamped batik from the workshops of Yogyakarta — heritage woven into modern life, one piece at a time.",
  primaryCta: { label: "Explore the Collection", href: "/shop" },
  secondaryCta: { label: "Discover Our Story", href: "#story" },
};
