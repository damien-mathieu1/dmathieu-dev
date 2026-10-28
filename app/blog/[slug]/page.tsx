import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, postSlugExists } from "@/lib/posts";
import PostSwitcher from "./PostSwitcher";

export function generateStaticParams() {
  return getAllPosts("en").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!postSlugExists(slug)) return {};
  const { meta } = getPostBySlug(slug, "en");
  return { title: `${meta.title} — Damien Mathieu` };
}

function Article({
  meta,
  content,
}: {
  meta: { title: string; date: string };
  content: string;
}) {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold">{meta.title}</h1>
      <p className="text-sm text-neutral-500 mt-2 mb-8">{meta.date}</p>
      <div className="space-y-4 leading-relaxed text-neutral-700 dark:text-neutral-300 [&_a]:underline [&_a]:text-neutral-900 dark:[&_a]:text-neutral-100 [&_pre]:overflow-x-auto [&_pre]:max-w-full">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!postSlugExists(slug)) notFound();

  const en = getPostBySlug(slug, "en");
  const fr = getPostBySlug(slug, "fr");

  return (
    <PostSwitcher
      en={<Article meta={en.meta} content={en.content} />}
      fr={<Article meta={fr.meta} content={fr.content} />}
    />
  );
}
