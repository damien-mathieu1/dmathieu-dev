import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog — Damien Mathieu",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold mb-8">Blog</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
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
          </li>
        ))}
      </ul>
    </div>
  );
}
