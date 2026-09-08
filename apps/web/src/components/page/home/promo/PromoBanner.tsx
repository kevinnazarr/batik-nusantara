import type { PromoData } from "@/data/home";
import { revealStyle } from "@/data/home";

const TICK = (
  <svg viewBox="0 0 24 24">
    <path d="M5 12l5 5 9-10"></path>
  </svg>
);

export function PromoBanner({ data }: { data: PromoData }) {
  return (
    <section className="section" aria-labelledby="promoTitle">
      <div className="container">
        <div className="promo">
          <div className="promo__media reveal">
            <span className="badge badge--gold">{data.badge}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={data.image} alt={data.alt} loading="lazy" width={900} height={1125} />
          </div>
          <div className="promo__body reveal" style={revealStyle(100)}>
            <p className="eyebrow">{data.eyebrow}</p>
            <h2 className="serif" id="promoTitle">{data.title}</h2>
            <p>{data.copy}</p>
            <ul className="promo__points">
              {data.points.map((pt) => (
                <li key={pt}>
                  <span className="tick" aria-hidden="true">{TICK}</span>
                  {pt}
                </li>
              ))}
            </ul>
            <a className="btn btn--outline" href={data.cta.href}>{data.cta.label}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
