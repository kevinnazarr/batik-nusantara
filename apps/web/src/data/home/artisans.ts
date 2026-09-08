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
