"use client";

import { useI18n } from "@/lib/i18n/context";

export default function NewsletterForm() {
  const { dict } = useI18n();
  return (
    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-2 gap-6">
        <input
          type="text"
          placeholder={dict.footer.firstName}
          className="border-b border-white/30 bg-transparent pb-3 text-sm text-white placeholder:text-white/40 focus:border-honey-gold focus:outline-none"
        />
        <input
          type="text"
          placeholder={dict.footer.lastName}
          className="border-b border-white/30 bg-transparent pb-3 text-sm text-white placeholder:text-white/40 focus:border-honey-gold focus:outline-none"
        />
      </div>
      <input
        type="email"
          placeholder={dict.footer.email}
        className="border-b border-white/30 bg-transparent pb-3 text-sm text-white placeholder:text-white/40 focus:border-honey-gold focus:outline-none"
      />
      <button
        type="submit"
        className="mt-4 w-fit rounded-full border border-white/30 px-8 py-3 text-sm text-white transition-colors hover:border-honey-gold hover:text-honey-gold"
      >
        {dict.footer.subscribe}
      </button>
    </form>
  );
}
