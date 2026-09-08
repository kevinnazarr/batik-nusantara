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
