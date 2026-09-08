import type { MotifsData } from "@/data/home";
import { revealStyle } from "@/data/home";

export function MotifCards({ data }: { data: MotifsData }) {
  return (
    <section className="section section--warm" id="motifs" aria-labelledby="motifTitle">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 className="heading-lg" id="motifTitle">{data.title}</h2>
        </div>
        <div className="motif-grid">
          {data.cards.map((card, i) => (
            <article key={card.name} className="motif-card reveal" style={revealStyle(i * 80)}>
              <div className="motif-card__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.image} alt={card.alt} loading="lazy" width={700} height={933} />
              </div>
              <h3>{card.name} <span className="jv">— {card.meaning}</span></h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
        <div className="pullquote reveal">
          <span className="pullquote__mark" aria-hidden="true">{"\u201C"}</span>
          <blockquote>{data.pullquote.quote}</blockquote>
          <cite>{data.pullquote.cite}</cite>
        </div>
      </div>
    </section>
  );
}
