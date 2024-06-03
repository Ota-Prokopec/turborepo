

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BpHE1TLW.js","_app/immutable/chunks/scheduler.BQLk4kXZ.js","_app/immutable/chunks/index._cVNW4if.js","_app/immutable/chunks/Icon.CG0x_1Kj.js","_app/immutable/chunks/paths.1MP3SlaE.js"];
export const stylesheets = ["_app/immutable/assets/Icon.JkID90uL.css"];
export const fonts = [];
