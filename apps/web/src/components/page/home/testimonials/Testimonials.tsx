import type { TestimonialsData } from "@/data/home";
import { revealStyle } from "@/data/home";

export function Testimonials({ data }: { data: TestimonialsData }) {
  return (
    <section className="section" aria-labelledby="testimonialTitle">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 className="heading-lg" id="testimonialTitle">{data.title}</h2>
        </div>
        <div className="testimonial-grid">
          {data.items.map((t, i) => (
            <article key={t.name} className="testimonial reveal" style={revealStyle(i * 80)}>
              <span className="rating" role="img" aria-label={`Rated ${t.rating} out of 5 stars`}>
                <span className="rating__track" aria-hidden="true">★★★★★</span>
                <span className="rating__fill" aria-hidden="true" style={{ width: `${(t.rating / 5) * 100}%` }}>★★★★★</span>
              </span>
              <blockquote>{"\u201C"}{t.quote}{"\u201D"}</blockquote>
              <footer className="testimonial__author">
                <span className="testimonial__avatar" aria-hidden="true">{t.avatar}</span>
                <div><div className="testimonial__name">{t.name}</div><div className="testimonial__meta">{t.meta}</div></div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
