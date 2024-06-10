import * as universal from '../entries/pages/(app)/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(app)/+layout.ts";
export const imports = ["_app/immutable/nodes/2.fbb4b64a.js","_app/immutable/chunks/index.4dc60348.js","_app/immutable/chunks/index.cb697023.js","_app/immutable/chunks/lsStore.14b90ab1.js","_app/immutable/chunks/lodash.2058bfa9.js","_app/immutable/chunks/index.808b294c.js","_app/immutable/chunks/scheduler.e2443e5e.js","_app/immutable/chunks/index.0d43c537.js"];
export const stylesheets = [];
export const fonts = [];
