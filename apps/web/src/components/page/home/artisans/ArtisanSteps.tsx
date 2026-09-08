import type { ArtisansData } from "@/data/home";
import { revealStyle } from "@/data/home";

export function ArtisanSteps({ data }: { data: ArtisansData }) {
  return (
    <section className="section section--dark" id="artisans" aria-labelledby="artisanTitle">
      <div className="container">
        <div className="section-head section-head--center section-head--inverse reveal">
          <p className="eyebrow eyebrow--inverse">{data.eyebrow}</p>
          <h2 className="heading-lg serif--inverse" id="artisanTitle">{data.title}</h2>
          <p>{data.lead}</p>
        </div>
        <div className="artisan-grid">
          {data.cards.map((card, i) => (
            <article key={card.step} className="artisan-card reveal" style={revealStyle(i * 80)}>
              <div className="artisan-card__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.image} alt={card.alt} loading="lazy" width={700} height={875} />
              </div>
              <span className="artisan-card__step">{card.step}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
