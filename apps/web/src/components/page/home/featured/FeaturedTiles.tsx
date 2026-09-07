export function FeaturedTiles() {
  return (
    <section className="section" aria-labelledby="featuredTitle">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">Featured Collections</p>
          <h2 className="heading-lg" id="featuredTitle">
            Three ways to wear heritage.
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="featured-grid">
          <a className="tile tile--portrait reveal" style={{ ["--reveal-delay" as string]: "0ms" } as React.CSSProperties} href="/shop?cat=Fabric">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1761517099330-13b34b141d74?q=80&w=1000&auto=format&fit=crop" alt="Brown and cream heritage batik fabric" loading="lazy" width={800} height={1067} />
            <span className="tile__overlay" aria-hidden="true"></span>
            <span className="tile__content">
              <span className="caption">Heritage Fabrics</span>
              <h3>The Sogan Edit</h3>
              <span className="tile__link">Shop the Edit</span>
            </span>
          </a>
          <a className="tile tile--portrait reveal" style={{ ["--reveal-delay" as string]: "80ms" } as React.CSSProperties} href="/shop?tag=new">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1762111067760-1f0fc2aa2866?q=80&w=1000&auto=format&fit=crop" alt="Blue and brown indigo-dyed batik fabric" loading="lazy" width={800} height={1067} />
            <span className="tile__overlay" aria-hidden="true"></span>
            <span className="tile__content">
              <span className="caption">New Season</span>
              <h3>The Indigo Series</h3>
              <span className="tile__link">Shop the Series</span>
            </span>
          </a>
          <a className="tile tile--portrait reveal" style={{ ["--reveal-delay" as string]: "160ms" } as React.CSSProperties} href="/shop?cat=Shirts">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1609407683391-7d127a00b3e1?q=80&w=1000&auto=format&fit=crop" alt="Artisan wearing a hand-stamped batik shirt in Lasem" loading="lazy" width={800} height={1067} />
            <span className="tile__overlay" aria-hidden="true"></span>
            <span className="tile__content">
              <span className="caption">Batik Shirts</span>
              <h3>Worn in Lasem</h3>
              <span className="tile__link">Shop Shirts</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
