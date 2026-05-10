import { c as create_ssr_component, e as escape, b as each, v as validate_component } from "../../../chunks/ssr.js";
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
const BlogCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { excerpt } = $$props;
  let { date } = $$props;
  let { slug } = $$props;
  let { tags = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.excerpt === void 0 && $$bindings.excerpt && excerpt !== void 0) $$bindings.excerpt(excerpt);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0) $$bindings.slug(slug);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0) $$bindings.tags(tags);
  return `<a href="${"/blogs/" + escape(slug, true)}" class="card group block hover:shadow-lg"><h3 class="text-xl font-serif font-bold mb-2 group-hover:text-primary-600 transition-colors">${escape(title)}</h3> <p class="text-[var(--color-text-muted)] text-sm mb-3">${escape(formatDate(date))}</p> <p class="text-[var(--color-text)] leading-relaxed mb-4">${escape(excerpt)}</p> ${tags.length > 0 ? `<div class="flex flex-wrap gap-2">${each(tags, (tag) => {
    return `<span class="px-2 py-1 text-xs bg-[var(--color-bg)] text-[var(--color-text-muted)] rounded">${escape(tag)} </span>`;
  })}</div>` : ``}</a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-xk6d6a_START -->${$$result.title = `<title>Blog - Harshit Halwan</title>`, ""}<!-- HEAD_svelte-xk6d6a_END -->`, ""} <div class="container-narrow py-12"><section class="mb-12" data-svelte-h="svelte-1v6kuqa"><h1 class="text-4xl font-serif font-bold mb-4">Blog</h1> <p class="text-lg text-[var(--color-text-muted)]">Thoughts on software engineering, AI/ML, and technology.</p></section> ${data.blogs.length === 0 ? `<div class="text-center py-12" data-svelte-h="svelte-1b7y0ft"><p class="text-[var(--color-text-muted)]">No blog posts yet. Check back soon!</p></div>` : `<div class="grid gap-6">${each(data.blogs, (blog) => {
    return `${validate_component(BlogCard, "BlogCard").$$render(
      $$result,
      {
        title: blog.title,
        excerpt: blog.excerpt,
        date: blog.date,
        slug: blog.slug,
        tags: blog.tags
      },
      {},
      {}
    )}`;
  })}</div>`}</div>`;
});
export {
  Page as default
};
