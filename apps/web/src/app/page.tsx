import { Hero } from "@/components/page/home/hero/Hero";
import { FeaturedTiles } from "@/components/page/home/featured/FeaturedTiles";
import { CategoryTiles } from "@/components/page/home/categories/CategoryTiles";
import { BestSellers } from "@/components/page/home/best-sellers/BestSellers";
import { StoryBand } from "@/components/page/home/story/StoryBand";
import { MotifCards } from "@/components/page/home/motifs/MotifCards";
import { PromoBanner } from "@/components/page/home/promo/PromoBanner";
import { ArtisanSteps } from "@/components/page/home/artisans/ArtisanSteps";
import { Testimonials } from "@/components/page/home/testimonials/Testimonials";
import { Newsletter } from "@/components/page/home/newsletter/Newsletter";
import { HERO, FEATURED, CATEGORIES, STORY, MOTIFS, PROMO, ARTISANS, TESTIMONIALS, NEWSLETTER } from "@/data/home";

export default function Home() {
  return (
    <main id="app" tabIndex={-1}>
      <Hero data={HERO} />
      <FeaturedTiles data={FEATURED} />
      <CategoryTiles data={CATEGORIES} />
      <BestSellers />
      <StoryBand data={STORY} />
      <MotifCards data={MOTIFS} />
      <PromoBanner data={PROMO} />
      <ArtisanSteps data={ARTISANS} />
      <Testimonials data={TESTIMONIALS} />
      <Newsletter data={NEWSLETTER} />
    </main>
  );
}
