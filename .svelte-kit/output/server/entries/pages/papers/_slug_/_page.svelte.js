import { c as create_ssr_component, e as escape, f as add_attribute, d as each, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-42nvni_START -->${$$result.title = `<title>${escape(data.paper.title)} - Harshit Halwan</title>`, ""}<!-- HEAD_svelte-42nvni_END -->`, ""} <div class="container-narrow py-12"><article><header class="mb-12"><a href="/papers" class="text-primary-600 dark:text-primary-400 text-sm mb-4 inline-block hover:underline" data-svelte-h="svelte-1quauqt">← Back to Papers</a> <h1 class="text-4xl sm:text-5xl font-serif font-bold mb-4">${escape(data.paper.title)}</h1> <div class="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]"><span>${escape(data.paper.authors)} (${escape(data.paper.year)})</span> ${data.paper.paperUrl ? `<a${add_attribute("href", data.paper.paperUrl, 0)} target="_blank" rel="noopener noreferrer" class="text-primary-600 dark:text-primary-400 hover:underline">Read Original Paper →</a>` : ``}</div> ${data.paper.tags && data.paper.tags.length > 0 ? `<div class="flex gap-2 mt-4">${each(data.paper.tags, (tag) => {
    return `<span class="px-2 py-1 bg-[var(--color-card)] rounded text-sm">${escape(tag)} </span>`;
  })}</div>` : ``}</header> <div class="prose prose-lg dark:prose-invert max-w-none">${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></article></div>`;
});
export {
  Page as default
};
