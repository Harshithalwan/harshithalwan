import * as server from '../entries/pages/blogs/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blogs/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blogs/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.DVf7g9AY.js","_app/immutable/chunks/AMiBqiSu.js","_app/immutable/chunks/Ci4niXXX.js","_app/immutable/chunks/D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
