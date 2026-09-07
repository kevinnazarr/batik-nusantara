export function PromoBanner() {
  return (
    <section className="section" aria-labelledby="promoTitle">
      <div className="container">
        <div className="promo">
          <div className="promo__media reveal">
            <span className="badge badge--gold">New Season</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1675994645106-8c48153d8c25?q=80&w=1200&auto=format&fit=crop" alt="Colourful batik fabrics displayed in a shop" loading="lazy" width={900} height={1125} />
          </div>
          <div className="promo__body reveal" style={{ ["--reveal-delay" as string]: "100ms" } as React.CSSProperties}>
            <p className="eyebrow">The Indigo Series</p>
            <h2 className="serif" id="promoTitle">Deep-dyed in natural indigo.</h2>
            <p>Indigo is the colour batik was born in — fermented from leaves, dipped again and again until the cloth turns from green to a blue that holds the night.</p>
            <ul className="promo__points">
              <li><span className="tick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"></path></svg></span>Natural indigo, no synthetic dyes</li>
              <li><span className="tick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"></path></svg></span>Limited run — each dye bath is one of a kind</li>
              <li><span className="tick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"></path></svg></span>Deepens beautifully with age</li>
            </ul>
            <a className="btn btn--outline" href="/shop?tag=new">Shop the Series</a>
          </div>
        </div>
      </div>
    </section>
  );
}
