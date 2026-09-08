import type { CSSProperties } from "react";

export type Revealable = { revealDelay?: number };
export const revealStyle = (ms: number | undefined): CSSProperties =>
  ms === undefined ? ({} as CSSProperties) : ({ ["--reveal-delay"]: `${ms}ms` } as CSSProperties);

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/* Featured Tiles                                                      */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/* Category Tiles                                                      */
/* ------------------------------------------------------------------ */

export type CategoryTile = { href: string; image: string; alt: string; label: string };

export type CategoriesData = { eyebrow: string; title: string; tiles: CategoryTile[] };

export const CATEGORIES: CategoriesData = {
  eyebrow: "Shop by Category",
  title: "Woven for every occasion.",
  tiles: [
    { href: "/shop?cat=Shirts", image: "https://images.unsplash.com/photo-1569084755066-cbff1d9fd473?q=80&w=900&auto=format&fit=crop", alt: "Man wearing a batik shirt", label: "Batik Shirts" },
    { href: "/shop?cat=Dresses", image: "https://images.unsplash.com/photo-1630929436231-91f4c6fe4884?q=80&w=900&auto=format&fit=crop", alt: "Woman wearing a batik dress", label: "Batik Dresses" },
    { href: "/shop?cat=Fabric", image: "https://images.unsplash.com/photo-1761516659539-20ec6f407ca4?q=80&w=900&auto=format&fit=crop", alt: "Hand-drawn batik fabric in brown and blue", label: "Batik Fabric" },
    { href: "/shop?cat=Accessories", image: "https://images.unsplash.com/photo-1672716912554-c23ba8fac4ce?q=80&w=900&auto=format&fit=crop", alt: "Hand-patterned batik ties hanging on a rack", label: "Accessories" },
  ],
};

/* ------------------------------------------------------------------ */
/* Story Band                                                          */
/* ------------------------------------------------------------------ */

export type StoryData = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  cta: { label: string; href: string };
  image: string;
  alt: string;
  medallion: { strong: string; lines: string[] };
};

export const STORY: StoryData = {
  eyebrow: "The Craft",
  title: "Wax, cloth, and time.",
  paragraphs: [
    "Every Serat piece begins as plain cotton, drawn and stamped by hand with molten wax before it ever touches dye. The word <em>batik</em> carries the Javanese sense of writing — and this writing cannot be rushed.",
    "Our artisans work in small studios across Yogyakarta and Lasem, the same way their families have for generations. What you receive is not a print. It is a record of hands.",
  ],
  cta: { label: "Meet the Artisans", href: "#artisans" },
  image: "https://images.unsplash.com/photo-1695306441929-0082158cfc27?q=80&w=1200&auto=format&fit=crop",
  alt: "Artisan drawing batik with a canting, applying hot wax to cloth",
  medallion: { strong: "Est. 1962", lines: ["Hand-Drawn", "& Hand-Stamped"] },
};

/* ------------------------------------------------------------------ */
/* Motifs                                                              */
/* ------------------------------------------------------------------ */

export type MotifCard = { image: string; alt: string; name: string; meaning: string; description: string };

export type MotifsData = {
  eyebrow: string;
  title: string;
  cards: MotifCard[];
  pullquote: { quote: string; cite: string };
};

export const MOTIFS: MotifsData = {
  eyebrow: "Motifs & Meaning",
  title: "Every pattern carries a story.",
  cards: [
    {
      image: "https://images.unsplash.com/photo-1761516659539-20ec6f407ca4?q=80&w=900&auto=format&fit=crop",
      alt: "Parang motif batik — diagonal blade-like lines",
      name: "Parang",
      meaning: "strength",
      description: "Diagonal blades cut through the cloth. Once reserved for Javanese royalty, the Parang speaks of strength, continuity, and the will to keep moving forward.",
    },
    {
      image: "https://images.unsplash.com/photo-1762111067841-638cbbe9c6c7?q=80&w=900&auto=format&fit=crop",
      alt: "Kawung motif batik — repeating circles in geometric order",
      name: "Kawung",
      meaning: "harmony",
      description: "Four circles, petals of the areca palm, arranged in quiet symmetry — a meditation on purity, harmony, and the balance of a centred life.",
    },
    {
      image: "https://images.unsplash.com/photo-1761515315375-1315503bb3ce?q=80&w=900&auto=format&fit=crop",
      alt: "Coastal batik fabric with floral and bird motifs",
      name: "Coastal",
      meaning: "openness",
      description: "From the north coast of Java, where Javanese, Chinese and Arab hands have traded cloth for centuries — florals, birds, and the courage of open water.",
    },
  ],
  pullquote: { quote: "To wear batik is to carry a story written in wax.", cite: "— A Javanese saying, honoured daily" },
};

/* ------------------------------------------------------------------ */
/* Promo Banner                                                        */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/* Artisan Steps                                                       */
/* ------------------------------------------------------------------ */

export type ArtisanCard = { image: string; alt: string; step: string; title: string; description: string };

export type ArtisansData = { eyebrow: string; title: string; lead: string; cards: ArtisanCard[] };

export const ARTISANS: ArtisansData = {
  eyebrow: "Crafted by Hand",
  title: "The hands behind the cloth.",
  lead: "A single length of batik passes through many hands before it reaches yours.",
  cards: [
    {
      image: "https://images.unsplash.com/photo-1604973104381-870c92f10343?q=80&w=900&auto=format&fit=crop",
      alt: "Artisan holding a canting, the wax pen used to draw batik",
      step: "01 — Drawing",
      title: "The canting",
      description: "With a canting — a small copper pen — the artisan draws each line in hot wax. A single cloth can take weeks of patient tracing.",
    },
    {
      image: "https://images.unsplash.com/photo-1543874911-320748e4c335?q=80&w=900&auto=format&fit=crop",
      alt: "Artisan pressing a copper cap stamp into hot wax",
      step: "02 — Stamping",
      title: "The cap",
      description: "For repeat motifs, a copper cap is stamped into wax and pressed onto the cloth — a rhythm older than the printing press.",
    },
    {
      image: "https://images.unsplash.com/photo-1721361467569-f8edbf851f44?q=80&w=900&auto=format&fit=crop",
      alt: "Artisan sewing a finished batik garment",
      step: "03 — Dye & Finish",
      title: "The cloth",
      description: "Dye, boil, rinse, dry in the sun — then cutting, sewing and hand-finishing by our atelier tailors.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export type Testimonial = { rating: number; quote: string; avatar: string; name: string; meta: string };

export type TestimonialsData = { eyebrow: string; title: string; items: Testimonial[] };

export const TESTIMONIALS: TestimonialsData = {
  eyebrow: "Kind Words",
  title: "From our patrons.",
  items: [
    {
      rating: 5,
      quote: "The Parang shirt arrived wrapped like a gift from another century. The cloth is heavy and honest — you can feel the hours in it.",
      avatar: "RA",
      name: "Rani A.",
      meta: "Jakarta · Batik Shirts",
    },
    {
      rating: 5,
      quote: "I commissioned fabric for my wedding and the atelier walked me through every motif. The Sekar Jagad came out more beautiful than I dared hope.",
      avatar: "DN",
      name: "Dewi N.",
      meta: "Singapore · Batik Fabric",
    },
    {
      rating: 5,
      quote: "A kimono that feels like a hug and a story at once. My third piece from Serat — the consistency is remarkable.",
      avatar: "MS",
      name: "Maya S.",
      meta: "Amsterdam · Outerwear",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Newsletter                                                          */
/* ------------------------------------------------------------------ */

export type NewsletterData = {
  eyebrow: string;
  title: string;
  copy: string;
  inputLabel: string;
  inputPlaceholder: string;
  submitLabel: string;
  note: string;
  successMessage: string;
};

export const NEWSLETTER: NewsletterData = {
  eyebrow: "The Atelier Letter",
  title: "Join the atelier.",
  copy: "Seasonal collections, motif stories, and early access to limited runs — once a month, no noise.",
  inputLabel: "Email address",
  inputPlaceholder: "Your email address",
  submitLabel: "Subscribe",
  note: "Unsubscribe anytime. We never share your address.",
  successMessage: "Terima kasih — welcome to the atelier. Your first letter is on its way.",
};

/* ------------------------------------------------------------------ */
/* Section head helper (shared eyebrow+title block)                    */
/* ------------------------------------------------------------------ */

export type SectionHead = { eyebrow: string; title: string };
