import * as server from '../entries/pages/blogs/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blogs/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blogs/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.KO9C5F4W.js","_app/immutable/chunks/DosmPpii.js","_app/immutable/chunks/kjcvYdrM.js","_app/immutable/chunks/D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
