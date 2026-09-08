export type FeaturedTile = {
  href: string;
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  linkLabel: string;
};

export type FeaturedData = { eyebrow: string; title: string; tiles: FeaturedTile[] };

export const FEATURED: FeaturedData = {
  eyebrow: "Featured Collections",
  title: "Three ways to wear heritage.",
  tiles: [
    {
      href: "/shop?cat=Fabric",
      image: "https://images.unsplash.com/photo-1761517099330-13b34b141d74?q=80&w=1000&auto=format&fit=crop",
      alt: "Brown and cream heritage batik fabric",
      eyebrow: "Heritage Fabrics",
      title: "The Sogan Edit",
      linkLabel: "Shop the Edit",
    },
    {
      href: "/shop?tag=new",
      image: "https://images.unsplash.com/photo-1762111067760-1f0fc2aa2866?q=80&w=1000&auto=format&fit=crop",
      alt: "Blue and brown indigo-dyed batik fabric",
      eyebrow: "New Season",
      title: "The Indigo Series",
      linkLabel: "Shop the Series",
    },
    {
      href: "/shop?cat=Shirts",
      image: "https://images.unsplash.com/photo-1609407683391-7d127a00b3e1?q=80&w=1000&auto=format&fit=crop",
      alt: "Artisan wearing a hand-stamped batik shirt in Lasem",
      eyebrow: "Batik Shirts",
      title: "Worn in Lasem",
      linkLabel: "Shop Shirts",
    },
  ],
};
