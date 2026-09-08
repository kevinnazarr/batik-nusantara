// Barrel — preserves `import { HERO } from "@/data/home"` after folder split.
// Each section lives in its own folder mirroring src/components/page/home/*

export { HERO } from "./hero";
export type { HeroData } from "./hero";

export { FEATURED } from "./featured";
export type { FeaturedData, FeaturedTile } from "./featured";

export { CATEGORIES } from "./categories";
export type { CategoriesData, CategoryTile } from "./categories";

export { STORY } from "./story";
export type { StoryData } from "./story";

export { MOTIFS } from "./motifs";
export type { MotifsData, MotifCard } from "./motifs";

export { PROMO } from "./promo";
export type { PromoData } from "./promo";

export { ARTISANS } from "./artisans";
export type { ArtisansData, ArtisanCard } from "./artisans";

export { TESTIMONIALS } from "./testimonials";
export type { TestimonialsData, Testimonial } from "./testimonials";

export { NEWSLETTER } from "./newsletter";
export type { NewsletterData } from "./newsletter";

export { BEST_SELLERS_HEAD } from "./best-sellers";
export type { BestSellersData } from "./best-sellers";

export type { Revealable, SectionHead } from "./shared";
export { revealStyle } from "./shared";
