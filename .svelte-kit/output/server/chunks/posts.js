import { _ as __vite_glob_0_0 } from "./building-rag-systems.js";
import { _ as __vite_glob_0_1 } from "./microservices-lessons.js";
import { _ as __vite_glob_1_0 } from "./attention-is-all-you-need.js";
import { _ as __vite_glob_1_1 } from "./bert-paper.js";
const blogModules = /* @__PURE__ */ Object.assign({ "/src/content/blogs/building-rag-systems.md": __vite_glob_0_0, "/src/content/blogs/microservices-lessons.md": __vite_glob_0_1 });
const paperModules = /* @__PURE__ */ Object.assign({ "/src/content/papers/attention-is-all-you-need.md": __vite_glob_1_0, "/src/content/papers/bert-paper.md": __vite_glob_1_1 });
function getAllBlogs() {
  return Object.entries(blogModules).map(([path, module]) => {
    const slug = path.split("/").pop()?.replace(".md", "") || "";
    return {
      slug,
      ...module.metadata
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
function getBlogBySlug(slug) {
  const path = `/src/content/blogs/${slug}.md`;
  const module = blogModules[path];
  if (!module) return void 0;
  return {
    slug,
    ...module.metadata
  };
}
function getAllPapers() {
  return Object.entries(paperModules).map(([path, module]) => {
    const slug = path.split("/").pop()?.replace(".md", "") || "";
    return {
      slug,
      ...module.metadata
    };
  }).sort((a, b) => b.year - a.year);
}
function getPaperBySlug(slug) {
  const path = `/src/content/papers/${slug}.md`;
  const module = paperModules[path];
  if (!module) return void 0;
  return {
    slug,
    ...module.metadata
  };
}
export {
  getBlogBySlug as a,
  getAllPapers as b,
  getPaperBySlug as c,
  getAllBlogs as g
};
