import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DvhYgROj.js","_app/immutable/chunks/CAiPWE2z.js","_app/immutable/chunks/Cr3Pmt8D.js","_app/immutable/chunks/DosmPpii.js","_app/immutable/chunks/kjcvYdrM.js"];
export const stylesheets = ["_app/immutable/assets/0.Yp_D16EN.css"];
export const fonts = [];
