import { c as create_ssr_component, e as escape, f as add_attribute, d as each, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-n7u0ww_START -->${$$result.title = `<title>${escape(data.blog.title)} - Harshit Halwan</title>`, ""}<!-- HEAD_svelte-n7u0ww_END -->`, ""} <div class="container-narrow py-12"><article><header class="mb-12"><a href="/blogs" class="text-primary-600 dark:text-primary-400 text-sm mb-4 inline-block hover:underline" data-svelte-h="svelte-1pxj94c">← Back to Blog</a> <h1 class="text-4xl sm:text-5xl font-serif font-bold mb-4">${escape(data.blog.title)}</h1> <div class="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]"><time${add_attribute("datetime", data.blog.date, 0)}>${escape(formatDate(data.blog.date))}</time> ${data.blog.tags && data.blog.tags.length > 0 ? `<div class="flex gap-2">${each(data.blog.tags, (tag) => {
    return `<span class="px-2 py-1 bg-[var(--color-card)] rounded">${escape(tag)} </span>`;
  })}</div>` : ``}</div></header> <div class="prose prose-lg dark:prose-invert max-w-none">${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></article></div>`;
});
export {
  Page as default
};
