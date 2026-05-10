import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute, b as each, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import "@sveltejs/kit";
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let slug = $page.params.slug || "";
  let blog = null;
  let content = null;
  let loading = true;
  let notFound = false;
  async function loadBlog() {
    loading = true;
    notFound = false;
    try {
      const allBlogModules = /* @__PURE__ */ Object.assign({ "/src/content/blogs/building-rag-systems.md": () => import("../../../../chunks/building-rag-systems.js").then((n) => n._), "/src/content/blogs/microservices-lessons.md": () => import("../../../../chunks/microservices-lessons.js").then((n) => n._) });
      const path = `/src/content/blogs/${slug}.md`;
      if (!allBlogModules[path]) {
        notFound = true;
        loading = false;
        return;
      }
      const mod = await allBlogModules[path]();
      blog = { slug, ...mod.metadata };
      content = mod.default;
    } catch (e) {
      notFound = true;
    } finally {
      loading = false;
    }
  }
  slug = $page.params.slug;
  {
    if (slug) {
      loadBlog();
    }
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1ecq6rh_START -->${$$result.title = `<title>${escape(blog?.title || "Loading...")} - Harshit Halwan</title>`, ""}<!-- HEAD_svelte-1ecq6rh_END -->`, ""} <div class="container-narrow py-12">${loading ? `<div class="animate-pulse" data-svelte-h="svelte-1mko0va"><div class="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-8"></div> <div class="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div> <div class="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div></div>` : `${notFound ? `<h1 class="text-3xl font-bold mb-4" data-svelte-h="svelte-qyjaf5">404 - Blog Not Found</h1> <a href="/blogs" class="text-primary-600 hover:underline" data-svelte-h="svelte-7f37o2">← Back to Blog</a>` : `${blog ? `<article><header class="mb-12"><a href="/blogs" class="text-primary-600 dark:text-primary-400 text-sm mb-4 inline-block hover:underline" data-svelte-h="svelte-n03yzw">← Back to Blog</a> <h1 class="text-4xl sm:text-5xl font-serif font-bold mb-4">${escape(blog.title)}</h1> <div class="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]"><time${add_attribute("datetime", blog.date, 0)}>${escape(formatDate(blog.date))}</time> ${blog.tags && blog.tags.length > 0 ? `<div class="flex gap-2">${each(blog.tags, (tag) => {
    return `<span class="px-2 py-1 bg-[var(--color-card)] rounded">${escape(tag)} </span>`;
  })}</div>` : ``}</div></header> <div class="prose prose-lg dark:prose-invert max-w-none">${validate_component(content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></article>` : ``}`}`}</div>`;
});
export {
  Page as default
};
