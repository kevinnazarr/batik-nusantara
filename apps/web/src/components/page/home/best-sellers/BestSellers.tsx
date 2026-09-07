import { PRODUCTS, getCategoryLabel, formatIDR, imgURL, starWidth } from "@/lib/data";

function ProductCard({ p }: { p: (typeof PRODUCTS)[number] }) {
  const soldOut = !p.available;
  return (
    <article className={`card-product ${soldOut ? "is-soldout" : ""}`} data-product-id={p.id}>
      <div className="card-product__media">
        <a href={`/product/${p.id}`} tabIndex={-1} aria-hidden="true" aria-label={p.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="card-product__img-main" src={imgURL(p.image, 800)} alt="" width={600} height={800} loading="lazy" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="card-product__img-hover" src={imgURL(p.hoverImage, 800)} alt="" width={600} height={800} loading="lazy" />
        </a>
        <div className="card-product__badges">
          {p.badge ? <span className="badge">{p.badge}</span> : null}
          {soldOut ? <span className="badge">Sold Out</span> : null}
        </div>
        <button className="card-product__wish js-wishlist-toggle" data-id={p.id} aria-pressed={false} aria-label="Add to wishlist">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 20.5S3.5 15.5 3.5 9.6A4.6 4.6 0 0 1 12 6.5a4.6 4.6 0 0 1 8.5 3.1c0 5.9-8.5 10.9-8.5 10.9z"></path>
          </svg>
        </button>
        <button className="btn btn--ghost btn--sm card-product__quick js-quick-add" data-id={p.id} disabled={soldOut}>
          {soldOut ? "Sold Out" : "Quick Add"}
        </button>
      </div>
      <div className="card-product__body">
        <p className="card-product__cat">{getCategoryLabel(p.category)}</p>
        <h3 className="card-product__name">
          <a href={`/product/${p.id}`}>{p.name}</a>
        </h3>
        <p className="card-product__price">
          {p.compareAtPrice ? <s>{formatIDR(p.compareAtPrice)}</s> : null}
          <span>{formatIDR(p.price)}</span>
        </p>
        <span className="rating card-product__rating" role="img" aria-label={`Rated ${p.rating} out of 5 stars`}>
          <span className="rating__track" aria-hidden="true">★★★★★</span>
          <span className="rating__fill" aria-hidden="true" style={{ width: starWidth(p.rating) }}>★★★★★</span>
          <span className="rating__count">({p.reviews})</span>
        </span>
      </div>
    </article>
  );
}

export function BestSellers() {
  const best = PRODUCTS.filter((p) => p.bestSeller);
  return (
    <section className="section home-best" aria-labelledby="bestTitle">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">Best Sellers</p>
            <h2 className="heading-lg" id="bestTitle">Most-loved this season.</h2>
          </div>
          <a className="btn btn--outline" href="/shop">View All Pieces</a>
        </div>
        <div className="product-grid" data-grid="best">
          {best.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
