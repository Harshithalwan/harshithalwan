import { error } from "@sveltejs/kit";
async function load({ params }) {
  const allPaperModules = /* @__PURE__ */ Object.assign({ "/src/content/papers/attention-is-all-you-need.md": () => import("../../../../chunks/attention-is-all-you-need.js").then((n) => n._), "/src/content/papers/bert-paper.md": () => import("../../../../chunks/bert-paper.js").then((n) => n._) });
  const path = `/src/content/papers/${params.slug}.md`;
  if (!allPaperModules[path]) {
    throw error(404, "Paper analysis not found");
  }
  const module = await allPaperModules[path]();
  return {
    paper: {
      slug: params.slug,
      ...module.metadata
    }
  };
}
export {
  load
};
