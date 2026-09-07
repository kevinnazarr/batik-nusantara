export function MotifCards() {
  return (
    <section className="section section--warm" id="motifs" aria-labelledby="motifTitle">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">Motifs &amp; Meaning</p>
          <h2 className="heading-lg" id="motifTitle">Every pattern carries a story.</h2>
        </div>
        <div className="motif-grid">
          <article className="motif-card reveal" style={{ ["--reveal-delay" as string]: "0ms" } as React.CSSProperties}>
            <div className="motif-card__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1761516659539-20ec6f407ca4?q=80&w=900&auto=format&fit=crop" alt="Parang motif batik — diagonal blade-like lines" loading="lazy" width={700} height={933} />
            </div>
            <h3>Parang <span className="jv">— strength</span></h3>
            <p>Diagonal blades cut through the cloth. Once reserved for Javanese royalty, the Parang speaks of strength, continuity, and the will to keep moving forward.</p>
          </article>
          <article className="motif-card reveal" style={{ ["--reveal-delay" as string]: "80ms" } as React.CSSProperties}>
            <div className="motif-card__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1762111067841-638cbbe9c6c7?q=80&w=900&auto=format&fit=crop" alt="Kawung motif batik — repeating circles in geometric order" loading="lazy" width={700} height={933} />
            </div>
            <h3>Kawung <span className="jv">— harmony</span></h3>
            <p>Four circles, petals of the areca palm, arranged in quiet symmetry — a meditation on purity, harmony, and the balance of a centred life.</p>
          </article>
          <article className="motif-card reveal" style={{ ["--reveal-delay" as string]: "160ms" } as React.CSSProperties}>
            <div className="motif-card__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1761515315375-1315503bb3ce?q=80&w=900&auto=format&fit=crop" alt="Coastal batik fabric with floral and bird motifs" loading="lazy" width={700} height={933} />
            </div>
            <h3>Coastal <span className="jv">— openness</span></h3>
            <p>From the north coast of Java, where Javanese, Chinese and Arab hands have traded cloth for centuries — florals, birds, and the courage of open water.</p>
          </article>
        </div>
        <div className="pullquote reveal">
          <span className="pullquote__mark" aria-hidden="true">“</span>
          <blockquote>To wear batik is to carry a story written in wax.</blockquote>
          <cite>— A Javanese saying, honoured daily</cite>
        </div>
      </div>
    </section>
  );
}
