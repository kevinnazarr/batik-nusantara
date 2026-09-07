export function Testimonials() {
  return (
    <section className="section" aria-labelledby="testimonialTitle">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">Kind Words</p>
          <h2 className="heading-lg" id="testimonialTitle">From our patrons.</h2>
        </div>
        <div className="testimonial-grid">
          <article className="testimonial reveal" style={{ ["--reveal-delay" as string]: "0ms" } as React.CSSProperties}>
            <span className="rating" role="img" aria-label="Rated 5 out of 5 stars">
              <span className="rating__track" aria-hidden="true">★★★★★</span>
              <span className="rating__fill" aria-hidden="true" style={{ width: "100%" }}>★★★★★</span>
            </span>
            <blockquote>“The Parang shirt arrived wrapped like a gift from another century. The cloth is heavy and honest — you can feel the hours in it.”</blockquote>
            <footer className="testimonial__author">
              <span className="testimonial__avatar" aria-hidden="true">RA</span>
              <div><div className="testimonial__name">Rani A.</div><div className="testimonial__meta">Jakarta · Batik Shirts</div></div>
            </footer>
          </article>
          <article className="testimonial reveal" style={{ ["--reveal-delay" as string]: "80ms" } as React.CSSProperties}>
            <span className="rating" role="img" aria-label="Rated 5 out of 5 stars">
              <span className="rating__track" aria-hidden="true">★★★★★</span>
              <span className="rating__fill" aria-hidden="true" style={{ width: "100%" }}>★★★★★</span>
            </span>
            <blockquote>“I commissioned fabric for my wedding and the atelier walked me through every motif. The Sekar Jagad came out more beautiful than I dared hope.”</blockquote>
            <footer className="testimonial__author">
              <span className="testimonial__avatar" aria-hidden="true">DN</span>
              <div><div className="testimonial__name">Dewi N.</div><div className="testimonial__meta">Singapore · Batik Fabric</div></div>
            </footer>
          </article>
          <article className="testimonial reveal" style={{ ["--reveal-delay" as string]: "160ms" } as React.CSSProperties}>
            <span className="rating" role="img" aria-label="Rated 5 out of 5 stars">
              <span className="rating__track" aria-hidden="true">★★★★★</span>
              <span className="rating__fill" aria-hidden="true" style={{ width: "100%" }}>★★★★★</span>
            </span>
            <blockquote>“A kimono that feels like a hug and a story at once. My third piece from Serat — the consistency is remarkable.”</blockquote>
            <footer className="testimonial__author">
              <span className="testimonial__avatar" aria-hidden="true">MS</span>
              <div><div className="testimonial__name">Maya S.</div><div className="testimonial__meta">Amsterdam · Outerwear</div></div>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}
