"use client";

import { Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, dict } = useI18n();
  const next = locale === "id" ? "en" : "id";

  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      aria-label={`${dict.common.language}: ${next.toUpperCase()}`}
      title={dict.common.language}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mountain-slate/30 ${className}`}
    >
      <Globe className="w-4.5 h-4.5" aria-hidden />
      <span className="sr-only">{next.toUpperCase()}</span>
    </button>
  );
}
