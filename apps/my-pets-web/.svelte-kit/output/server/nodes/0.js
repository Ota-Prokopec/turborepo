import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.8e51dcea.js","_app/immutable/chunks/lsStore.66e036c2.js","_app/immutable/chunks/lodash.2058bfa9.js","_app/immutable/chunks/index.8f122d9f.js","_app/immutable/chunks/scheduler.b968f1ef.js","_app/immutable/chunks/i18n-svelte.05919c13.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.cc60906b.js","_app/immutable/chunks/index.cb697023.js","_app/immutable/chunks/index.facb08f8.js","_app/immutable/chunks/Icon.e61683e2.js","_app/immutable/chunks/tw-merge.db958748.js","_app/immutable/chunks/paths.8ac0a231.js","_app/immutable/chunks/stores.abfd65e8.js","_app/immutable/chunks/singletons.2ca7caa5.js","_app/immutable/chunks/TransitionFrame.31fdc6dd.js","_app/immutable/chunks/Text.618c985b.js","_app/immutable/chunks/Right.84a088f4.js","_app/immutable/chunks/FullPageLoading.8d686e4a.js","_app/immutable/chunks/Center.70efd114.js","_app/immutable/chunks/Heading.5e5be0ca.js","_app/immutable/chunks/alertStore.cecfbd0d.js","_app/immutable/chunks/logger.61fe10c0.js"];
export const stylesheets = ["_app/immutable/assets/0.9b662534.css","_app/immutable/assets/Icon.791c25e6.css","_app/immutable/assets/ArrowUp.baf5064f.css"];
export const fonts = [];
