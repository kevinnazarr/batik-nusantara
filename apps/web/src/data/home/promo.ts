export type PromoData = {
  badge: string;
  eyebrow: string;
  title: string;
  copy: string;
  points: string[];
  cta: { label: string; href: string };
  image: string;
  alt: string;
};

export const PROMO: PromoData = {
  badge: "New Season",
  eyebrow: "The Indigo Series",
  title: "Deep-dyed in natural indigo.",
  copy: "Indigo is the colour batik was born in — fermented from leaves, dipped again and again until the cloth turns from green to a blue that holds the night.",
  points: ["Natural indigo, no synthetic dyes", "Limited run — each dye bath is one of a kind", "Deepens beautifully with age"],
  cta: { label: "Shop the Series", href: "/shop?tag=new" },
  image: "https://images.unsplash.com/photo-1675994645106-8c48153d8c25?q=80&w=1200&auto=format&fit=crop",
  alt: "Colourful batik fabrics displayed in a shop",
};
