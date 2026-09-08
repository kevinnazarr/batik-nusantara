import type { NewsletterData } from "@/data/home";

export function Newsletter({ data }: { data: NewsletterData }) {
  return (
    <section className="section section--warm" aria-labelledby="newsletterTitle">
      <div className="container">
        <div className="newsletter reveal" id="newsletter">
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 className="heading" id="newsletterTitle">{data.title}</h2>
          <p style={{ marginTop: 12 }}>{data.copy}</p>
          <form className="newsletter__form" noValidate>
            <label className="visually-hidden" htmlFor="newsletterEmail">{data.inputLabel}</label>
            <input className="input input--line" type="email" id="newsletterEmail" name="email" placeholder={data.inputPlaceholder} required autoComplete="email" />
            <button className="btn btn--outline" type="submit">{data.submitLabel}</button>
          </form>
          <p className="newsletter__note">{data.note}</p>
          <p className="newsletter__success" role="status">{data.successMessage}</p>
        </div>
      </div>
    </section>
  );
}
