import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
function createThemeStore() {
  const getInitialTheme = () => {
    return "light";
  };
  const { subscribe: subscribe2, set, update } = writable(getInitialTheme());
  return {
    subscribe: subscribe2,
    toggle: () => {
      update((current) => {
        const newTheme = current === "light" ? "dark" : "light";
        return newTheme;
      });
    },
    set: (theme2) => {
      set(theme2);
    }
  };
}
const theme = createThemeStore();
const ThemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_theme();
  return `<button class="p-2 rounded-lg hover:bg-[var(--color-card)] transition-colors" aria-label="Toggle theme">${$theme === "dark" ? `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>` : `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`}</button>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="sticky top-0 z-50 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]"><nav class="container-narrow"><div class="flex items-center justify-between h-16"><a href="/" class="text-xl font-bold text-[var(--color-text)] hover:text-primary-600 transition-colors" data-svelte-h="svelte-5fyft3">HH</a> <div class="flex items-center gap-8"><a href="/" class="nav-link text-sm font-medium" data-svelte-h="svelte-wc4pta">About</a> <a href="/blogs" class="nav-link text-sm font-medium" data-svelte-h="svelte-1kmex48">Blog</a> <a href="/papers" class="nav-link text-sm font-medium" data-svelte-h="svelte-g58pxr">Papers</a> ${validate_component(ThemeToggle, "ThemeToggle").$$render($$result, {}, {}, {})}</div></div></nav></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => value);
  $$unsubscribe_theme();
  return `<div class="min-h-screen flex flex-col">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="flex-1">${slots.default ? slots.default({}) : ``}</main> <footer class="border-t border-[var(--color-border)] py-8 mt-16"><div class="container-narrow text-center text-[var(--color-text-muted)] text-sm"><p>© ${escape((/* @__PURE__ */ new Date()).getFullYear())} Harshit Halwan. Built with Svelte &amp; Tailwind.</p></div></footer></div>`;
});
export {
  Layout as default
};
