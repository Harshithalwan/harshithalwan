import { error } from "@sveltejs/kit";
import { a as getBlogBySlug } from "../../../../chunks/posts.js";
async function load({ params }) {
  const blog = getBlogBySlug(params.slug);
  if (!blog) {
    throw error(404, "Blog post not found");
  }
  return {
    blog
  };
}
export {
  load
};
