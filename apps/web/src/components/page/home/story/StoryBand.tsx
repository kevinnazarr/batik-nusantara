export function StoryBand() {
  return (
    <section className="section section--dark story-band" id="story" aria-labelledby="storyTitle">
      <div className="container">
        <div className="story-band__inner">
          <div className="story-band__text reveal">
            <p className="eyebrow eyebrow--inverse">The Craft</p>
            <h2 className="serif--inverse" id="storyTitle">Wax, cloth, and time.</h2>
            <p>
              Every Serat piece begins as plain cotton, drawn and stamped by hand with molten wax before it ever touches dye. The word <em>batik</em> carries the Javanese sense of writing — and this writing cannot be rushed.
            </p>
            <p>
              Our artisans work in small studios across Yogyakarta and Lasem, the same way their families have for generations. What you receive is not a print. It is a record of hands.
            </p>
            <a className="btn btn--ghost" href="#artisans">Meet the Artisans</a>
          </div>
          <div className="story-band__media reveal" style={{ ["--reveal-delay" as string]: "100ms" } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1695306441929-0082158cfc27?q=80&w=1200&auto=format&fit=crop" alt="Artisan drawing batik with a canting, applying hot wax to cloth" loading="lazy" width={900} height={1125} />
            <span className="medallion medallion--outline story-band__medallion">
              <strong>Est. 1962</strong>
              <span>Hand-Drawn</span>
              <span>&amp; Hand-Stamped</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
