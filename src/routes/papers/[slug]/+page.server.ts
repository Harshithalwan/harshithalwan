import { error } from "@sveltejs/kit";
import { getPaperBySlug } from "$lib/utils/posts";

export async function load({ params }) {
  const paper = getPaperBySlug(params.slug);

  if (!paper) {
    throw error(404, "Paper analysis not found");
  }

  return {
    paper,
  };
}
