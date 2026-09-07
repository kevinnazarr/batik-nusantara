export function Newsletter() {
  return (
    <section className="section section--warm" aria-labelledby="newsletterTitle">
      <div className="container">
        <div className="newsletter reveal" id="newsletter">
          <p className="eyebrow">The Atelier Letter</p>
          <h2 className="heading" id="newsletterTitle">Join the atelier.</h2>
          <p style={{ marginTop: 12 }}>Seasonal collections, motif stories, and early access to limited runs — once a month, no noise.</p>
          <form className="newsletter__form" noValidate>
            <label className="visually-hidden" htmlFor="newsletterEmail">Email address</label>
            <input className="input input--line" type="email" id="newsletterEmail" name="email" placeholder="Your email address" required autoComplete="email" />
            <button className="btn btn--outline" type="submit">Subscribe</button>
          </form>
          <p className="newsletter__note">Unsubscribe anytime. We never share your address.</p>
          <p className="newsletter__success" role="status">Terima kasih — welcome to the atelier. Your first letter is on its way.</p>
        </div>
      </div>
    </section>
  );
}
