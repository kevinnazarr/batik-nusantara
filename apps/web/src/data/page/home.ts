export type HeroData = {
  title: {
    main: string;
    accent: string;
  };
  lead: string;
  ctas: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  backgrounds: readonly string[];
};

export const HERO_DATA: HeroData = {
  title: {
    main: "Batik,",
    accent: "Reimagined.",
  },
  lead: "Hand-drawn and hand-stamped batik from the workshops of Yogyakarta — heritage woven into modern life, one piece at a time.",
  ctas: {
    primary: { label: "Explore the Collection", href: "/shop" },
    secondary: { label: "Discover Our Story", href: "/stories" },
  },
  backgrounds: [
    "https://images.unsplash.com/photo-1609407683391-7d127a00b3e1?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1761517099330-13b34b141d74?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1762111067760-1f0fc2aa2866?q=80&w=1920&auto=format&fit=crop",
  ],
} as const;
