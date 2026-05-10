import { error } from "@sveltejs/kit";
import { c as getPaperBySlug } from "../../../../chunks/posts.js";
async function load({ params }) {
  const paper = getPaperBySlug(params.slug);
  if (!paper) {
    throw error(404, "Paper analysis not found");
  }
  return {
    paper
  };
}
export {
  load
};
