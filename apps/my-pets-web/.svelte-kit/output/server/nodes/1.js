

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8d0ecf7f.js","_app/immutable/chunks/scheduler.b968f1ef.js","_app/immutable/chunks/index.facb08f8.js","_app/immutable/chunks/stores.abfd65e8.js","_app/immutable/chunks/singletons.2ca7caa5.js","_app/immutable/chunks/index.8f122d9f.js","_app/immutable/chunks/paths.8ac0a231.js"];
export const stylesheets = [];
export const fonts = [];
