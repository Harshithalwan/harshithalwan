import { error } from "@sveltejs/kit";
import { d as getPaperBySlug, p as paperModules } from "../../../../chunks/posts.js";
async function load({ params }) {
  const paper = getPaperBySlug(params.slug);
  if (!paper) {
    throw error(404, "Paper analysis not found");
  }
  const path = `/src/content/papers/${params.slug}.md`;
  const module = paperModules[path];
  return {
    paper,
    content: module.default
  };
}
export {
  load
};
