import { error } from "@sveltejs/kit";
async function load({ params }) {
  const allBlogModules = /* @__PURE__ */ Object.assign({ "/src/content/blogs/building-rag-systems.md": () => import("../../../../chunks/building-rag-systems.js").then((n) => n._), "/src/content/blogs/microservices-lessons.md": () => import("../../../../chunks/microservices-lessons.js").then((n) => n._) });
  const path = `/src/content/blogs/${params.slug}.md`;
  if (!allBlogModules[path]) {
    throw error(404, "Blog post not found");
  }
  const module = await allBlogModules[path]();
  return {
    blog: {
      slug: params.slug,
      ...module.metadata
    }
  };
}
export {
  load
};
