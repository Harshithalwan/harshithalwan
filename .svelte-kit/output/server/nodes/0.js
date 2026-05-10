import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CMft6kL7.js","_app/immutable/chunks/SG94nkmN.js","_app/immutable/chunks/BgOHMt4V.js","_app/immutable/chunks/DosmPpii.js","_app/immutable/chunks/kjcvYdrM.js"];
export const stylesheets = ["_app/immutable/assets/0.Yp_D16EN.css"];
export const fonts = [];
