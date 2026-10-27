import { getAllPosts } from "@/lib/posts";
import BlogList from "./BlogList";

export const metadata = {
  title: "Blog — Damien Mathieu",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold mb-8">Blog</h1>
      <BlogList posts={posts} />
    </div>
  );
}
