import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.43ae5759.js","_app/immutable/chunks/lsStore.14b90ab1.js","_app/immutable/chunks/lodash.2058bfa9.js","_app/immutable/chunks/index.808b294c.js","_app/immutable/chunks/scheduler.e2443e5e.js","_app/immutable/chunks/i18n-svelte.2034e684.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.4dc60348.js","_app/immutable/chunks/index.cb697023.js","_app/immutable/chunks/index.0d43c537.js","_app/immutable/chunks/Icon.e9cd5c9d.js","_app/immutable/chunks/tw-merge.35d74588.js","_app/immutable/chunks/paths.a6d55c0a.js","_app/immutable/chunks/stores.ef45bd8d.js","_app/immutable/chunks/singletons.4dfc4ce2.js","_app/immutable/chunks/TransitionFrame.be2483a3.js","_app/immutable/chunks/Text.bbb0e3b4.js","_app/immutable/chunks/Right.5c5126a3.js","_app/immutable/chunks/FullPageLoading.f587a2c7.js","_app/immutable/chunks/Center.d51c3aa1.js","_app/immutable/chunks/Heading.c8491426.js","_app/immutable/chunks/alertStore.0b746327.js","_app/immutable/chunks/logger.61fe10c0.js"];
export const stylesheets = ["_app/immutable/assets/0.0950b8a0.css","_app/immutable/assets/Icon.791c25e6.css","_app/immutable/assets/FullPageLoading.baf5064f.css"];
export const fonts = [];
