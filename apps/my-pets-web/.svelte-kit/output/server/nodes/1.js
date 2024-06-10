

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9dfd3a16.js","_app/immutable/chunks/scheduler.e2443e5e.js","_app/immutable/chunks/index.0d43c537.js","_app/immutable/chunks/stores.06c0879a.js","_app/immutable/chunks/singletons.9b39f92e.js","_app/immutable/chunks/index.808b294c.js","_app/immutable/chunks/paths.1c8d6aa1.js"];
export const stylesheets = [];
export const fonts = [];
