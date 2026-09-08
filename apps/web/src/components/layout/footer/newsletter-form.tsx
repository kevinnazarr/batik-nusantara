"use client";

import { FOOTER_NEWSLETTER } from "@/data/components/footer";

export default function NewsletterForm() {
  return (
    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-2 gap-6">
        <input
          type="text"
          placeholder={FOOTER_NEWSLETTER.firstNamePlaceholder}
          className="border-b border-white/30 bg-transparent pb-3 text-sm text-white placeholder:text-white/40 focus:border-honey-gold focus:outline-none"
        />
        <input
          type="text"
          placeholder={FOOTER_NEWSLETTER.lastNamePlaceholder}
          className="border-b border-white/30 bg-transparent pb-3 text-sm text-white placeholder:text-white/40 focus:border-honey-gold focus:outline-none"
        />
      </div>
      <input
        type="email"
        placeholder={FOOTER_NEWSLETTER.emailPlaceholder}
        className="border-b border-white/30 bg-transparent pb-3 text-sm text-white placeholder:text-white/40 focus:border-honey-gold focus:outline-none"
      />
      <button
        type="submit"
        className="mt-4 w-fit rounded-full border border-white/30 px-8 py-3 text-sm text-white transition-colors hover:border-honey-gold hover:text-honey-gold"
      >
        {FOOTER_NEWSLETTER.buttonText}
      </button>
    </form>
  );
}
