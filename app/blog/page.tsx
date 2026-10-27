import { getAllPosts } from "@/lib/posts";
import BlogList from "./BlogList";

export const metadata = {
  title: "Blog — Damien Mathieu",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">Blog</h1>
        <a
          href="/feed.xml"
          className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          RSS
        </a>
      </div>
      <BlogList posts={posts} />
    </div>
  );
}
