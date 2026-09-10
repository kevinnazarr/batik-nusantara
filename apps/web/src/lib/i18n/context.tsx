"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { DEFAULT_LOCALE, getDictionary, type Dictionary, type Locale } from "./dictionaries";

const STORAGE_KEY = "bn-locale";

let current: Locale = DEFAULT_LOCALE;
const listeners = new Set<() => void>();

function getSnapshot(): Locale {
  return current;
}

function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function setLocaleState(next: Locale): void {
  if (next === current) return;
  current = next;
  window.localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((notify) => notify());
}

type I18nContextValue = {
  locale: Locale;
  dict: Dictionary;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue>({
  locale: DEFAULT_LOCALE,
  dict: getDictionary(DEFAULT_LOCALE),
  setLocale: () => {},
});

export function I18nProvider({ children, initialLocale }: { children: ReactNode; initialLocale?: Locale }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (initialLocale && initialLocale !== current) {
      setLocaleState(initialLocale);
      return;
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if ((stored === "id" || stored === "en") && stored !== current) {
      setLocaleState(stored);
    }
  }, [initialLocale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, dict: getDictionary(locale), setLocale }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  return useContext(I18nContext);
}
