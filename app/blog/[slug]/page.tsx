import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = fs.existsSync(
    path.join(process.cwd(), "posts", `${slug}.mdx`)
  );
  if (!exists) return {};
  const { meta } = getPostBySlug(slug);
  return { title: `${meta.title} — Damien Mathieu` };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = fs.existsSync(
    path.join(process.cwd(), "posts", `${slug}.mdx`)
  );
  if (!exists) notFound();

  const { meta, content } = getPostBySlug(slug);

  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold">{meta.title}</h1>
      <p className="text-sm text-neutral-500 mt-2 mb-8">{meta.date}</p>
      <div className="space-y-4 leading-relaxed text-neutral-700 dark:text-neutral-300 [&_a]:underline [&_a]:text-neutral-900 dark:[&_a]:text-neutral-100">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
