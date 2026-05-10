import * as universal from '../entries/pages/papers/_slug_/_page.ts.js';
import * as server from '../entries/pages/papers/_slug_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/papers/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/papers/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/papers/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.DLMo-4HH.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/BJo_d7c2.js","_app/immutable/chunks/BgOHMt4V.js","_app/immutable/chunks/DosmPpii.js","_app/immutable/chunks/kjcvYdrM.js","_app/immutable/chunks/D6YF6ztN.js","_app/immutable/chunks/SG94nkmN.js"];
export const stylesheets = [];
export const fonts = [];
