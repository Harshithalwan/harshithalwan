import { error } from "@sveltejs/kit";
import { getBlogBySlug } from "$lib/utils/posts";

export async function load({ params }) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    throw error(404, "Blog post not found");
  }

  return {
    blog,
  };
}
