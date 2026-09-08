import type { CategoriesData } from "@/data/home";
import { revealStyle } from "@/data/home";

export function CategoryTiles({ data }: { data: CategoriesData }) {
  return (
    <section className="section section--warm" aria-labelledby="categoryTitle">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 className="heading-lg" id="categoryTitle">
            {data.title}
          </h2>
        </div>
        <div className="category-grid">
          {data.tiles.map((tile, i) => (
            <a
              key={tile.href}
              className="tile tile--portrait reveal"
              style={revealStyle(i * 80)}
              href={tile.href}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tile.image} alt={tile.alt} loading="lazy" width={700} height={933} />
              <span className="tile__overlay" aria-hidden="true"></span>
              <span className="tile__content">
                <h3>{tile.label}</h3>
                <span className="tile__link">Explore</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
