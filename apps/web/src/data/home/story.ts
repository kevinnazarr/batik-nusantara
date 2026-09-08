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
