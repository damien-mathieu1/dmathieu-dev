import { getAllPosts } from "@/lib/posts";
import BlogList from "./BlogList";
import BlogHeader from "./BlogHeader";

export const metadata = {
  title: "Blog — Damien Mathieu",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <BlogHeader />
      <BlogList posts={posts} />
    </div>
  );
}
