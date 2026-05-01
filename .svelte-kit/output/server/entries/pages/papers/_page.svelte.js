import { c as create_ssr_component, e as escape, f as add_attribute, d as each, v as validate_component } from "../../../chunks/ssr.js";
function truncateExcerpt(text, maxLength = 150) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}
const PaperCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { authors } = $$props;
  let { year } = $$props;
  let { excerpt } = $$props;
  let { slug } = $$props;
  let { paperUrl = "" } = $$props;
  let { tags = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.authors === void 0 && $$bindings.authors && authors !== void 0) $$bindings.authors(authors);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0) $$bindings.year(year);
  if ($$props.excerpt === void 0 && $$bindings.excerpt && excerpt !== void 0) $$bindings.excerpt(excerpt);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0) $$bindings.slug(slug);
  if ($$props.paperUrl === void 0 && $$bindings.paperUrl && paperUrl !== void 0) $$bindings.paperUrl(paperUrl);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0) $$bindings.tags(tags);
  return `<a href="${"/papers/" + escape(slug, true)}" class="card group block hover:shadow-lg"><div class="mb-2"><span class="text-xs text-[var(--color-text-muted)] font-medium">${escape(authors)} (${escape(year)})</span></div> <h3 class="text-xl font-serif font-bold mb-2 group-hover:text-primary-600 transition-colors">${escape(title)}</h3> ${paperUrl ? `<p class="text-sm text-primary-600 dark:text-primary-400 mb-3"><a${add_attribute("href", paperUrl, 0)} target="_blank" rel="noopener noreferrer">Read Original Paper →</a></p>` : ``} <p class="text-[var(--color-text)] leading-relaxed mb-4">${escape(truncateExcerpt(excerpt))}</p> ${tags.length > 0 ? `<div class="flex flex-wrap gap-2">${each(tags, (tag) => {
    return `<span class="px-2 py-1 text-xs bg-[var(--color-bg)] text-[var(--color-text-muted)] rounded">${escape(tag)} </span>`;
  })}</div>` : ``}</a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-c919es_START -->${$$result.title = `<title>Technical Papers - Harshit Halwan</title>`, ""}<!-- HEAD_svelte-c919es_END -->`, ""} <div class="container-narrow py-12"><section class="mb-12" data-svelte-h="svelte-rw1zr6"><h1 class="text-4xl font-serif font-bold mb-4">Technical Papers</h1> <p class="text-lg text-[var(--color-text-muted)]">In-depth analysis and summaries of research papers I&#39;m reading.</p></section> ${data.papers.length === 0 ? `<div class="text-center py-12" data-svelte-h="svelte-1ismu8b"><p class="text-[var(--color-text-muted)]">No papers analyzed yet. Check back soon!</p></div>` : `<div class="grid gap-6">${each(data.papers, (paper) => {
    return `${validate_component(PaperCard, "PaperCard").$$render(
      $$result,
      {
        title: paper.title,
        authors: paper.authors,
        year: paper.year,
        excerpt: paper.excerpt,
        slug: paper.slug,
        paperUrl: paper.paperUrl,
        tags: paper.tags
      },
      {},
      {}
    )}`;
  })}</div>`}</div>`;
});
export {
  Page as default
};
