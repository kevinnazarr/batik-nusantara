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
