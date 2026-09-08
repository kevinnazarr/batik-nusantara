import type { FeaturedData } from "@/data/home";
import { revealStyle } from "@/data/home";

export function FeaturedTiles({ data }: { data: FeaturedData }) {
  return (
    <section className="section" aria-labelledby="featuredTitle">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 className="heading-lg" id="featuredTitle">
            {data.title}
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="featured-grid">
          {data.tiles.map((tile, i) => (
            <a
              key={tile.href}
              className="tile tile--portrait reveal"
              style={revealStyle(i * 80)}
              href={tile.href}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tile.image} alt={tile.alt} loading="lazy" width={800} height={1067} />
              <span className="tile__overlay" aria-hidden="true"></span>
              <span className="tile__content">
                <span className="caption">{tile.eyebrow}</span>
                <h3>{tile.title}</h3>
                <span className="tile__link">{tile.linkLabel}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
