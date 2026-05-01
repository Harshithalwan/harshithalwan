import { error } from "@sveltejs/kit";
import { a as getBlogBySlug, b as blogModules } from "../../../../chunks/posts.js";
async function load({ params }) {
  const blog = getBlogBySlug(params.slug);
  if (!blog) {
    throw error(404, "Blog post not found");
  }
  const path = `/src/content/blogs/${params.slug}.md`;
  const module = blogModules[path];
  return {
    blog,
    content: module.default
  };
}
export {
  load
};
