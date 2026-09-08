export const HERO_DATA = {
  backgrounds: [
    "https://images.unsplash.com/photo-1609407683391-7d127a00b3e1?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1761517099330-13b34b141d74?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1762111067760-1f0fc2aa2866?q=80&w=1920&auto=format&fit=crop",
  ],
  title: { main: "Batik,", accent: "Reimagined." },
  lead:
    "Hand-drawn and hand-stamped batik from the workshops of Yogyakarta — heritage woven into modern life, one piece at a time.",
  ctas: {
    primary: { label: "Explore the Collection", href: "/shop" },
    secondary: { label: "Discover Our Story", href: "#story" },
  },
} as const;

export type FeaturedItem = {
  image: string;
  alt: string;
  caption: string;
  title: string;
  linkLabel: string;
  href: string;
};

export const FEATURED_DATA: readonly FeaturedItem[] = [
  {
    image: "https://images.unsplash.com/photo-1761517099330-13b34b141d74?q=80&w=1000&auto=format&fit=crop",
    alt: "Brown and cream heritage batik fabric",
    caption: "Heritage Fabrics",
    title: "The Sogan Edit",
    linkLabel: "Shop the Edit",
    href: "/shop?cat=Fabric",
  },
  {
    image: "https://images.unsplash.com/photo-1762111067760-1f0fc2aa2866?q=80&w=1000&auto=format&fit=crop",
    alt: "Blue and brown indigo-dyed batik fabric",
    caption: "New Season",
    title: "The Indigo Series",
    linkLabel: "Shop the Series",
    href: "/shop?tag=new",
  },
  {
    image: "https://images.unsplash.com/photo-1609407683391-7d127a00b3e1?q=80&w=1000&auto=format&fit=crop",
    alt: "Artisan wearing a hand-stamped batik shirt in Lasem",
    caption: "Batik Shirts",
    title: "Worn in Lasem",
    linkLabel: "Shop Shirts",
    href: "/shop?cat=Shirts",
  },
] as const;
