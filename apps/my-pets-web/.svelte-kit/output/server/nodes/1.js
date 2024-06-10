

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1bf9462b.js","_app/immutable/chunks/scheduler.e2443e5e.js","_app/immutable/chunks/index.0d43c537.js","_app/immutable/chunks/stores.615fad24.js","_app/immutable/chunks/singletons.c499d927.js","_app/immutable/chunks/index.808b294c.js","_app/immutable/chunks/paths.55115a80.js"];
export const stylesheets = [];
export const fonts = [];
