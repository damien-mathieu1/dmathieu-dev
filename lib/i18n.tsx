"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

const dictionaries = {
  en: {
    "nav.blog": "Blog",
    "nav.home": "Home",
    "footer.source": "Source",
    "footer.linkedin": "LinkedIn",
    "footer.email": "Email",
    "home.openSource": "Open source",
    "home.contact": "Contact",
    "blog.title": "Blog",
    "blog.rss": "RSS",
    "blog.all": "all",
    "blog.newest": "newest first",
    "blog.oldest": "oldest first",
    "blog.empty": "No posts with this tag.",
  },
  fr: {
    "nav.blog": "Blog",
    "nav.home": "Accueil",
    "footer.source": "Code source",
    "footer.linkedin": "LinkedIn",
    "footer.email": "Email",
    "home.openSource": "Open source",
    "home.contact": "Contact",
    "blog.title": "Blog",
    "blog.rss": "RSS",
    "blog.all": "tout",
    "blog.newest": "plus récents",
    "blog.oldest": "plus anciens",
    "blog.empty": "Aucun article avec cette étiquette.",
  },
} satisfies Record<Locale, Record<string, string>>;

export type TranslationKey = keyof (typeof dictionaries)["en"];

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("locale");
    if (stored === "en" || stored === "fr") {
      setLocaleState(stored);
    } else if (navigator.language.toLowerCase().startsWith("fr")) {
      setLocaleState("fr");
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem("locale", next);
  };

  const t = (key: TranslationKey) => dictionaries[locale][key];

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
