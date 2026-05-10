import * as universal from '../entries/pages/blogs/_slug_/_page.ts.js';
import * as server from '../entries/pages/blogs/_slug_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blogs/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blogs/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/blogs/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.CIlGcVyL.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DitYwgHd.js","_app/immutable/chunks/Cr3Pmt8D.js","_app/immutable/chunks/DosmPpii.js","_app/immutable/chunks/kjcvYdrM.js","_app/immutable/chunks/D6YF6ztN.js","_app/immutable/chunks/CAiPWE2z.js"];
export const stylesheets = [];
export const fonts = [];
