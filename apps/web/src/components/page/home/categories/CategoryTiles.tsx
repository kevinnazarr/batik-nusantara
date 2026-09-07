export function CategoryTiles() {
  return (
    <section className="section section--warm" aria-labelledby="categoryTitle">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">Shop by Category</p>
          <h2 className="heading-lg" id="categoryTitle">
            Woven for every occasion.
          </h2>
        </div>
        <div className="category-grid">
          <a className="tile tile--portrait reveal" style={{ ["--reveal-delay" as string]: "0ms" } as React.CSSProperties} href="/shop?cat=Shirts">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1569084755066-cbff1d9fd473?q=80&w=900&auto=format&fit=crop" alt="Man wearing a batik shirt" loading="lazy" width={700} height={933} />
            <span className="tile__overlay" aria-hidden="true"></span>
            <span className="tile__content">
              <h3>Batik Shirts</h3>
              <span className="tile__link">Explore</span>
            </span>
          </a>
          <a className="tile tile--portrait reveal" style={{ ["--reveal-delay" as string]: "80ms" } as React.CSSProperties} href="/shop?cat=Dresses">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1630929436231-91f4c6fe4884?q=80&w=900&auto=format&fit=crop" alt="Woman wearing a batik dress" loading="lazy" width={700} height={933} />
            <span className="tile__overlay" aria-hidden="true"></span>
            <span className="tile__content">
              <h3>Batik Dresses</h3>
              <span className="tile__link">Explore</span>
            </span>
          </a>
          <a className="tile tile--portrait reveal" style={{ ["--reveal-delay" as string]: "160ms" } as React.CSSProperties} href="/shop?cat=Fabric">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1761516659539-20ec6f407ca4?q=80&w=900&auto=format&fit=crop" alt="Hand-drawn batik fabric in brown and blue" loading="lazy" width={700} height={933} />
            <span className="tile__overlay" aria-hidden="true"></span>
            <span className="tile__content">
              <h3>Batik Fabric</h3>
              <span className="tile__link">Explore</span>
            </span>
          </a>
          <a className="tile tile--portrait reveal" style={{ ["--reveal-delay" as string]: "240ms" } as React.CSSProperties} href="/shop?cat=Accessories">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1672716912554-c23ba8fac4ce?q=80&w=900&auto=format&fit=crop" alt="Hand-patterned batik ties hanging on a rack" loading="lazy" width={700} height={933} />
            <span className="tile__overlay" aria-hidden="true"></span>
            <span className="tile__content">
              <h3>Accessories</h3>
              <span className="tile__link">Explore</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
