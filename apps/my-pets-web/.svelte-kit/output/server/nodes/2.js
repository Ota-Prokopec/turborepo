import * as universal from '../entries/pages/(app)/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(app)/+layout.ts";
export const imports = ["_app/immutable/nodes/2.56f95756.js","_app/immutable/chunks/index.cc60906b.js","_app/immutable/chunks/index.cb697023.js","_app/immutable/chunks/lsStore.66e036c2.js","_app/immutable/chunks/lodash.2058bfa9.js","_app/immutable/chunks/index.8f122d9f.js","_app/immutable/chunks/scheduler.b968f1ef.js","_app/immutable/chunks/index.facb08f8.js"];
export const stylesheets = [];
export const fonts = [];
