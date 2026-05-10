import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute, b as each, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let slug = $page.params.slug || "";
  let paper = null;
  let content = null;
  let loading = true;
  let notFound = false;
  async function loadPaper() {
    loading = true;
    notFound = false;
    try {
      const allPaperModules = /* @__PURE__ */ Object.assign({ "/src/content/papers/attention-is-all-you-need.md": () => import("../../../../chunks/attention-is-all-you-need.js").then((n) => n._), "/src/content/papers/bert-paper.md": () => import("../../../../chunks/bert-paper.js").then((n) => n._) });
      const path = `/src/content/papers/${slug}.md`;
      if (!allPaperModules[path]) {
        notFound = true;
        loading = false;
        return;
      }
      const mod = await allPaperModules[path]();
      paper = { slug, ...mod.metadata };
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
      loadPaper();
    }
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1n98th9_START -->${$$result.title = `<title>${escape(paper?.title || "Loading...")} - Harshit Halwan</title>`, ""}<!-- HEAD_svelte-1n98th9_END -->`, ""} <div class="container-narrow py-12">${loading ? `<div class="animate-pulse" data-svelte-h="svelte-1mko0va"><div class="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-8"></div> <div class="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div> <div class="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div></div>` : `${notFound ? `<h1 class="text-3xl font-bold mb-4" data-svelte-h="svelte-1bmk1xj">404 - Paper Not Found</h1> <a href="/papers" class="text-primary-600 hover:underline" data-svelte-h="svelte-1ejtti1">← Back to Papers</a>` : `${paper ? `<article><header class="mb-12"><a href="/papers" class="text-primary-600 dark:text-primary-400 text-sm mb-4 inline-block hover:underline" data-svelte-h="svelte-air691">← Back to Papers</a> <h1 class="text-4xl sm:text-5xl font-serif font-bold mb-4">${escape(paper.title)}</h1> <div class="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]"><span>${escape(paper.authors)} (${escape(paper.year)})</span> ${paper.paperUrl ? `<a${add_attribute("href", paper.paperUrl, 0)} target="_blank" rel="noopener noreferrer" class="text-primary-600 dark:text-primary-400 hover:underline">Read Original Paper →</a>` : ``}</div> ${paper.tags && paper.tags.length > 0 ? `<div class="flex gap-2 mt-4">${each(paper.tags, (tag) => {
    return `<span class="px-2 py-1 bg-[var(--color-card)] rounded text-sm">${escape(tag)} </span>`;
  })}</div>` : ``}</header> <div class="prose prose-lg dark:prose-invert max-w-none">${validate_component(content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></article>` : ``}`}`}</div>`;
});
export {
  Page as default
};
