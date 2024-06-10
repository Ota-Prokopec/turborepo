

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c3da02b5.js","_app/immutable/chunks/scheduler.e2443e5e.js","_app/immutable/chunks/index.0d43c537.js","_app/immutable/chunks/stores.ef45bd8d.js","_app/immutable/chunks/singletons.4dfc4ce2.js","_app/immutable/chunks/index.808b294c.js","_app/immutable/chunks/paths.a6d55c0a.js"];
export const stylesheets = [];
export const fonts = [];
