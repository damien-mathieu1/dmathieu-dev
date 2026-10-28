"use client";

import Link from "next/link";
import { locales, useLocale } from "@/lib/i18n";

export default function Nav() {
  const { locale, setLocale, t } = useLocale();

  return (
    <nav className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
      <Link href="/" className="font-semibold">
        {t("nav.home")}
      </Link>
      <div className="flex items-center gap-4 text-sm">
        <Link
          href="/blog"
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          {t("nav.blog")}
        </Link>
        <div className="flex gap-1">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => setLocale(l)}
              className={`uppercase text-xs px-1.5 py-0.5 rounded border ${
                locale === l
                  ? "border-neutral-900 dark:border-neutral-100"
                  : "border-neutral-300 dark:border-neutral-700 text-neutral-500"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
