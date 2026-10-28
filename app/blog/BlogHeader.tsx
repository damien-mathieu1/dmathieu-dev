"use client";

import { useLocale } from "@/lib/i18n";

export default function BlogHeader() {
  const { t } = useLocale();

  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl font-semibold">{t("blog.title")}</h1>
      <a
        href="/feed.xml"
        className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
      >
        {t("blog.rss")}
      </a>
    </div>
  );
}
