"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { useLocale } from "@/lib/i18n";

export default function BlogList({
  en,
  fr,
}: {
  en: PostMeta[];
  fr: PostMeta[];
}) {
  const { locale, t } = useLocale();
  const [tag, setTag] = useState<string | null>(null);
  const [sort, setSort] = useState<"newest" | "oldest">("newest");

  const posts = useMemo(() => {
    if (locale !== "fr") return en;
    const frBySlug = new Map(fr.map((p) => [p.slug, p]));
    return en.map((p) => frBySlug.get(p.slug) ?? p);
  }, [en, fr, locale]);

  const tags = useMemo(
    () => Array.from(new Set(posts.flatMap((p) => p.tags))).sort(),
    [posts]
  );

  const filtered = useMemo(() => {
    const list = tag ? posts.filter((p) => p.tags.includes(tag)) : posts;
    return [...list].sort((a, b) =>
      sort === "newest" ? (a.date < b.date ? 1 : -1) : a.date < b.date ? -1 : 1
    );
  }, [posts, tag, sort]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <button
          onClick={() => setTag(null)}
          className={`text-xs px-2 py-1 rounded border ${
            tag === null
              ? "border-neutral-900 dark:border-neutral-100"
              : "border-neutral-300 dark:border-neutral-700 text-neutral-500"
          }`}
        >
          {t("blog.all")}
        </button>
        {tags.map((tg) => (
          <button
            key={tg}
            onClick={() => setTag(tg)}
            className={`text-xs px-2 py-1 rounded border ${
              tag === tg
                ? "border-neutral-900 dark:border-neutral-100"
                : "border-neutral-300 dark:border-neutral-700 text-neutral-500"
            }`}
          >
            {tg}
          </button>
        ))}
        <button
          onClick={() => setSort(sort === "newest" ? "oldest" : "newest")}
          className="text-xs px-2 py-1 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-500 ml-auto"
        >
          {sort === "newest" ? t("blog.newest") : t("blog.oldest")}
        </button>
      </div>

      <ul className="space-y-8">
        {filtered.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg font-medium underline hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              {post.title}
            </Link>
            <p className="text-sm text-neutral-500 mt-1">{post.date}</p>
            <p className="text-neutral-700 dark:text-neutral-300 mt-1">
              {post.summary}
            </p>
            {post.tags.length > 0 && (
              <div className="flex gap-2 mt-2">
                {post.tags.map((tg) => (
                  <span
                    key={tg}
                    className="text-xs text-neutral-500 bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 rounded"
                  >
                    {tg}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
        {filtered.length === 0 && (
          <p className="text-neutral-500 text-sm">{t("blog.empty")}</p>
        )}
      </ul>
    </div>
  );
}
