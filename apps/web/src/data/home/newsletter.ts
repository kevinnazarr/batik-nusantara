export type NewsletterData = {
  eyebrow: string;
  title: string;
  copy: string;
  inputLabel: string;
  inputPlaceholder: string;
  submitLabel: string;
  note: string;
  successMessage: string;
};

export const NEWSLETTER: NewsletterData = {
  eyebrow: "The Atelier Letter",
  title: "Join the atelier.",
  copy: "Seasonal collections, motif stories, and early access to limited runs — once a month, no noise.",
  inputLabel: "Email address",
  inputPlaceholder: "Your email address",
  submitLabel: "Subscribe",
  note: "Unsubscribe anytime. We never share your address.",
  successMessage: "Terima kasih — welcome to the atelier. Your first letter is on its way.",
};
