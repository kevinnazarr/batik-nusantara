export function ArtisanSteps() {
  return (
    <section className="section section--dark" id="artisans" aria-labelledby="artisanTitle">
      <div className="container">
        <div className="section-head section-head--center section-head--inverse reveal">
          <p className="eyebrow eyebrow--inverse">Crafted by Hand</p>
          <h2 className="heading-lg serif--inverse" id="artisanTitle">The hands behind the cloth.</h2>
          <p>A single length of batik passes through many hands before it reaches yours.</p>
        </div>
        <div className="artisan-grid">
          <article className="artisan-card reveal" style={{ ["--reveal-delay" as string]: "0ms" } as React.CSSProperties}>
            <div className="artisan-card__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1604973104381-870c92f10343?q=80&w=900&auto=format&fit=crop" alt="Artisan holding a canting, the wax pen used to draw batik" loading="lazy" width={700} height={875} />
            </div>
            <span className="artisan-card__step">01 — Drawing</span>
            <h3>The canting</h3>
            <p>With a canting — a small copper pen — the artisan draws each line in hot wax. A single cloth can take weeks of patient tracing.</p>
          </article>
          <article className="artisan-card reveal" style={{ ["--reveal-delay" as string]: "80ms" } as React.CSSProperties}>
            <div className="artisan-card__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1543874911-320748e4c335?q=80&w=900&auto=format&fit=crop" alt="Artisan pressing a copper cap stamp into hot wax" loading="lazy" width={700} height={875} />
            </div>
            <span className="artisan-card__step">02 — Stamping</span>
            <h3>The cap</h3>
            <p>For repeat motifs, a copper cap is stamped into wax and pressed onto the cloth — a rhythm older than the printing press.</p>
          </article>
          <article className="artisan-card reveal" style={{ ["--reveal-delay" as string]: "160ms" } as React.CSSProperties}>
            <div className="artisan-card__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1721361467569-f8edbf851f44?q=80&w=900&auto=format&fit=crop" alt="Artisan sewing a finished batik garment" loading="lazy" width={700} height={875} />
            </div>
            <span className="artisan-card__step">03 — Dye &amp; Finish</span>
            <h3>The cloth</h3>
            <p>Dye, boil, rinse, dry in the sun — then cutting, sewing and hand-finishing by our atelier tailors.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
