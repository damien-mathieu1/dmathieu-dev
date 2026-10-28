import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Locale } from "./i18n";

const POSTS_DIR = path.join(process.cwd(), "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

function postExists(slug: string, locale: Locale) {
  return fs.existsSync(path.join(POSTS_DIR, locale, `${slug}.mdx`));
}

export function getAllPosts(locale: Locale): PostMeta[] {
  const dir = path.join(POSTS_DIR, locale);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(source);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        summary: data.summary as string,
        tags: (data.tags as string[]) ?? [],
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string, locale: Locale) {
  const resolvedLocale = postExists(slug, locale) ? locale : "en";
  const source = fs.readFileSync(
    path.join(POSTS_DIR, resolvedLocale, `${slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(source);
  return {
    meta: {
      slug,
      title: data.title as string,
      date: data.date as string,
      summary: data.summary as string,
      tags: (data.tags as string[]) ?? [],
    },
    content,
  };
}

export function postSlugExists(slug: string) {
  return postExists(slug, "en");
}
