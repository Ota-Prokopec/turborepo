
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const APPWRITE_ENDPOINT: string;
	export const APPWRITE_PROJECT_ID: string;
	export const APPWRITE_API_KEY: string;
	export const IOS_AUTHORIZATION_HEADER_NAME: string;
	export const CLIENT_HOSTNAME: string;
	export const SERVER_HOSTNAME_COOKIES: string;
	export const SERVER_HOSTNAME: string;
	export const MAP_TILER_API_KEY: string;
	export const CLOUDINARY_API_KEY: string;
	export const CLOUDINARY_API_SECRET_KEY: string;
	export const CLOUDINARY_CLOUD_NAME: string;
	export const CLOUDINARY_ROOT_FOLDER_NAME: string;
	export const DEV: string;
	export const NVM_INC: string;
	export const npm_package_devDependencies_prettier: string;
	export const MANPATH: string;
	export const npm_package_dependencies__maptiler_geocoding_control: string;
	export const TERM_PROGRAM: string;
	export const npm_package_dependencies_flowbite: string;
	export const npm_package_dependencies__svelteuidev_composables: string;
	export const npm_package_devDependencies_typescript_eslint: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const npm_config_version_git_tag: string;
	export const TURBO_INVOCATION_DIR: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_dependencies__graphql_codegen_typescript_graphql_request: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const TERM: string;
	export const SHELL: string;
	export const npm_package_dependencies__repo_utils: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_scripts_dev_pets_web: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_init_license: string;
	export const npm_package_dependencies__svelteuidev_motion: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_dependencies__types_turf: string;
	export const ZDOTDIR: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const MallocNanoZone: string;
	export const npm_package_dependencies__vercel_analytics: string;
	export const npm_package_dependencies_svelte_icons_pack: string;
	export const npm_package_dependencies_svelte_carousel: string;
	export const npm_package_private: string;
	export const npm_config_registry: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const ZSH: string;
	export const npm_package_dependencies_lottie_web: string;
	export const npm_package_dependencies_image_capture: string;
	export const npm_package_dependencies_geolocation_utils: string;
	export const npm_package_readmeFilename: string;
	export const npm_package_dependencies_dayjs: string;
	export const npm_package_devDependencies_globals: string;
	export const npm_package_description: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const npm_package_scripts_codegen: string;
	export const LS_COLORS: string;
	export const npm_package_dependencies_svelte_loading_spinners: string;
	export const npm_package_dependencies_mapbox_gl: string;
	export const npm_package_scripts_check_watch: string;
	export const COMMAND_MODE: string;
	export const npm_package_dependencies_flowbite_svelte: string;
	export const npm_package_dependencies_compressorjs: string;
	export const npm_package_dependencies_bytemd: string;
	export const npm_package_scripts_typesafe_i18n: string;
	export const npm_package_dependencies_typesafe_i18n: string;
	export const npm_package_dependencies__turf_turf: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_dependencies_lodash: string;
	export const npm_package_dependencies_graphql_request: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_dependencies_appwrite: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_package_devDependencies_eslint: string;
	export const npm_package_devDependencies_turbo: string;
	export const npm_package_devDependencies_eslint_config: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_scripts_dev_pets_api: string;
	export const PAGER: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_dependencies_cors: string;
	export const npm_package_dependencies__sveltestack_svelte_query: string;
	export const LSCOLORS: string;
	export const npm_package_devDependencies__graphql_codegen_cli: string;
	export const npm_package_dependencies_turf: string;
	export const npm_package_dependencies_tailwind_merge: string;
	export const npm_config_argv: string;
	export const PATH: string;
	export const npm_package_dependencies_jimp: string;
	export const npm_package_dependencies__svelteuidev_dates: string;
	export const _: string;
	export const npm_package_dependencies_svelte_i18n: string;
	export const npm_package_dependencies_luxon: string;
	export const npm_config_engine_strict: string;
	export const npm_config_auto_install_peers: string;
	export const __CFBundleIdentifier: string;
	export const USER_ZDOTDIR: string;
	export const npm_package_dependencies_markerjs2: string;
	export const npm_package_dependencies_mapbox: string;
	export const npm_package_dependencies__total_typescript_ts_reset: string;
	export const npm_package_devDependencies__skeletonlabs_tw_plugin: string;
	export const PWD: string;
	export const npm_package_dependencies_puppeteer: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_event: string;
	export const npm_package_dependencies_sveltekit_i18n: string;
	export const npm_package_dependencies_date_fns: string;
	export const npm_package_packageManager: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const npm_package_dependencies_sapper: string;
	export const npm_package_dependencies_npm: string;
	export const npm_package_dependencies__urql_svelte: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_dependencies__svelteuidev_preprocessors: string;
	export const npm_package_dependencies__cloudinary_url_gen: string;
	export const npm_package_scripts_test_integration: string;
	export const npm_package_scripts_build: string;
	export const npm_config_version_commit_hooks: string;
	export const XPC_FLAGS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const TURBO_HASH: string;
	export const npm_package_dependencies_pinch_zoom_js: string;
	export const npm_package_dependencies__pqina_pintura: string;
	export const npm_package_devDependencies_vitest: string;
	export const npm_config_bin_links: string;
	export const npm_package_engines_node: string;
	export const npm_package_dependencies_react_filerobot_image_editor: string;
	export const npm_package_dependencies_cropperjs: string;
	export const npm_package_dependencies__repo_my_pets_tstypes: string;
	export const npm_config_wrap_output: string;
	export const npm_package_dependencies_node_appwrite: string;
	export const npm_package_dependencies_filepond: string;
	export const npm_package_dependencies__svelteuidev_prism: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_dependencies_svelte_gestures: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const VSCODE_INJECTION: string;
	export const npm_package_dependencies_web_push: string;
	export const npm_package_dependencies_svelte_filepond: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_devDependencies_daisyui: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const SHLVL: string;
	export const HOME: string;
	export const npm_package_dependencies_svelte_appwrite_client: string;
	export const npm_package_type: string;
	export const npm_package_devDependencies_graphql_codegen_svelte_apollo: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const npm_package_dependencies__svelteuidev_core: string;
	export const npm_package_dependencies__onsvisual_svelte_maps: string;
	export const npm_package_scripts_test: string;
	export const npm_config_strict_ssl: string;
	export const npm_config_save_prefix: string;
	export const npm_package_dependencies_svelte_maplibre: string;
	export const npm_package_dependencies_dotenv: string;
	export const npm_package_devDependencies__sveltejs_adapter_vercel: string;
	export const npm_config_version_git_message: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_package_devDependencies_tsconfig: string;
	export const npm_package_dependencies_js_cookie: string;
	export const npm_package_dependencies_filerobot_image_editor: string;
	export const npm_package_dependencies_firebase: string;
	export const npm_package_dependencies__maptiler_client: string;
	export const npm_package_scripts_format: string;
	export const YARN_WRAP_OUTPUT: string;
	export const LOGNAME: string;
	export const LESS: string;
	export const npm_package_dependencies_tough_cookie: string;
	export const npm_package_devDependencies_codegen: string;
	export const npm_lifecycle_script: string;
	export const PREFIX: string;
	export const npm_package_dependencies_zod: string;
	export const npm_package_dependencies_svelte_i18next: string;
	export const npm_package_dependencies_superjson: string;
	export const npm_package_dependencies_canvas_txt: string;
	export const npm_package_dependencies__splidejs_svelte_splide: string;
	export const npm_package_devDependencies_dotenv_cli: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const npm_package_dependencies_cloudinary: string;
	export const npm_package_dependencies_react: string;
	export const NVM_BIN: string;
	export const npm_package_dependencies_node_base64_image: string;
	export const npm_package_dependencies__pqina_svelte_pintura: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_user_agent: string;
	export const npm_config_ignore_scripts: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const GIT_ASKPASS: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const npm_package_dependencies_browser_image_compression: string;
	export const npm_package_dependencies__types_w3c_image_capture: string;
	export const npm_package_devDependencies__types_eslint: string;
	export const npm_package_dependencies_svelte_qrcode_image: string;
	export const npm_config_init_version: string;
	export const npm_config_ignore_optional: string;
	export const npm_package_dependencies_flowbite_svelte_icons: string;
	export const npm_package_dependencies_maplibre_gl: string;
	export const npm_package_dependencies__skeletonlabs_skeleton: string;
	export const npm_package_dependencies__apollo_client: string;
	export const npm_package_workspaces_0: string;
	export const npm_package_dependencies_kolorist: string;
	export const npm_package_dependencies_i18next: string;
	export const npm_package_scripts_check: string;
	export const npm_package_workspaces_1: string;
	export const npm_node_execpath: string;
	export const npm_config_version_tag_prefix: string;
	export const COLORTERM: string;
	export const npm_package_dependencies_svelte_routing: string;
	export const npm_package_dependencies_qrcode: string;
	export const npm_package_dependencies__lordicon_element: string;
	export const npm_package_scripts_test_unit: string;
	export const NINJA_WELCOME_SHOWN: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_APPWRITE_ENDPOINT: string;
	export const PUBLIC_APPWRITE_PROJECT_ID: string;
	export const PUBLIC_SESSION_NAME: string;
	export const PUBLIC_IOS_AUTHORIZATION_HEADER_NAME: string;
	export const PUBLIC_CLIENT_HOSTNAME: string;
	export const PUBLIC_SERVER_HOSTNAME: string;
	export const PUBLIC_MAP_TILER_API_KEY: string;
	export const PUBLIC_MAX_IMAGE_SIZE_IN_MB: string;
	export const PUBLIC_DEV: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		APPWRITE_ENDPOINT: string;
		APPWRITE_PROJECT_ID: string;
		APPWRITE_API_KEY: string;
		IOS_AUTHORIZATION_HEADER_NAME: string;
		CLIENT_HOSTNAME: string;
		SERVER_HOSTNAME_COOKIES: string;
		SERVER_HOSTNAME: string;
		MAP_TILER_API_KEY: string;
		CLOUDINARY_API_KEY: string;
		CLOUDINARY_API_SECRET_KEY: string;
		CLOUDINARY_CLOUD_NAME: string;
		CLOUDINARY_ROOT_FOLDER_NAME: string;
		DEV: string;
		NVM_INC: string;
		npm_package_devDependencies_prettier: string;
		MANPATH: string;
		npm_package_dependencies__maptiler_geocoding_control: string;
		TERM_PROGRAM: string;
		npm_package_dependencies_flowbite: string;
		npm_package_dependencies__svelteuidev_composables: string;
		npm_package_devDependencies_typescript_eslint: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		NODE: string;
		INIT_CWD: string;
		npm_config_version_git_tag: string;
		TURBO_INVOCATION_DIR: string;
		NVM_CD_FLAGS: string;
		npm_package_dependencies__graphql_codegen_typescript_graphql_request: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		TERM: string;
		SHELL: string;
		npm_package_dependencies__repo_utils: string;
		npm_package_devDependencies_vite: string;
		npm_package_scripts_dev_pets_web: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		npm_package_scripts_lint: string;
		npm_config_init_license: string;
		npm_package_dependencies__svelteuidev_motion: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_scripts_dev: string;
		npm_package_dependencies__types_turf: string;
		ZDOTDIR: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		MallocNanoZone: string;
		npm_package_dependencies__vercel_analytics: string;
		npm_package_dependencies_svelte_icons_pack: string;
		npm_package_dependencies_svelte_carousel: string;
		npm_package_private: string;
		npm_config_registry: string;
		npm_package_devDependencies__sveltejs_kit: string;
		ZSH: string;
		npm_package_dependencies_lottie_web: string;
		npm_package_dependencies_image_capture: string;
		npm_package_dependencies_geolocation_utils: string;
		npm_package_readmeFilename: string;
		npm_package_dependencies_dayjs: string;
		npm_package_devDependencies_globals: string;
		npm_package_description: string;
		USER: string;
		NVM_DIR: string;
		npm_package_scripts_codegen: string;
		LS_COLORS: string;
		npm_package_dependencies_svelte_loading_spinners: string;
		npm_package_dependencies_mapbox_gl: string;
		npm_package_scripts_check_watch: string;
		COMMAND_MODE: string;
		npm_package_dependencies_flowbite_svelte: string;
		npm_package_dependencies_compressorjs: string;
		npm_package_dependencies_bytemd: string;
		npm_package_scripts_typesafe_i18n: string;
		npm_package_dependencies_typesafe_i18n: string;
		npm_package_dependencies__turf_turf: string;
		SSH_AUTH_SOCK: string;
		npm_package_dependencies_lodash: string;
		npm_package_dependencies_graphql_request: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_dependencies_appwrite: string;
		npm_package_devDependencies_postcss: string;
		npm_package_devDependencies_eslint: string;
		npm_package_devDependencies_turbo: string;
		npm_package_devDependencies_eslint_config: string;
		npm_execpath: string;
		npm_package_devDependencies_tslib: string;
		npm_package_scripts_dev_pets_api: string;
		PAGER: string;
		npm_package_devDependencies_svelte: string;
		npm_package_dependencies_cors: string;
		npm_package_dependencies__sveltestack_svelte_query: string;
		LSCOLORS: string;
		npm_package_devDependencies__graphql_codegen_cli: string;
		npm_package_dependencies_turf: string;
		npm_package_dependencies_tailwind_merge: string;
		npm_config_argv: string;
		PATH: string;
		npm_package_dependencies_jimp: string;
		npm_package_dependencies__svelteuidev_dates: string;
		_: string;
		npm_package_dependencies_svelte_i18n: string;
		npm_package_dependencies_luxon: string;
		npm_config_engine_strict: string;
		npm_config_auto_install_peers: string;
		__CFBundleIdentifier: string;
		USER_ZDOTDIR: string;
		npm_package_dependencies_markerjs2: string;
		npm_package_dependencies_mapbox: string;
		npm_package_dependencies__total_typescript_ts_reset: string;
		npm_package_devDependencies__skeletonlabs_tw_plugin: string;
		PWD: string;
		npm_package_dependencies_puppeteer: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_event: string;
		npm_package_dependencies_sveltekit_i18n: string;
		npm_package_dependencies_date_fns: string;
		npm_package_packageManager: string;
		npm_package_name: string;
		LANG: string;
		npm_package_dependencies_sapper: string;
		npm_package_dependencies_npm: string;
		npm_package_dependencies__urql_svelte: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_dependencies__svelteuidev_preprocessors: string;
		npm_package_dependencies__cloudinary_url_gen: string;
		npm_package_scripts_test_integration: string;
		npm_package_scripts_build: string;
		npm_config_version_commit_hooks: string;
		XPC_FLAGS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		TURBO_HASH: string;
		npm_package_dependencies_pinch_zoom_js: string;
		npm_package_dependencies__pqina_pintura: string;
		npm_package_devDependencies_vitest: string;
		npm_config_bin_links: string;
		npm_package_engines_node: string;
		npm_package_dependencies_react_filerobot_image_editor: string;
		npm_package_dependencies_cropperjs: string;
		npm_package_dependencies__repo_my_pets_tstypes: string;
		npm_config_wrap_output: string;
		npm_package_dependencies_node_appwrite: string;
		npm_package_dependencies_filepond: string;
		npm_package_dependencies__svelteuidev_prism: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		npm_package_dependencies_svelte_gestures: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		VSCODE_INJECTION: string;
		npm_package_dependencies_web_push: string;
		npm_package_dependencies_svelte_filepond: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_devDependencies_daisyui: string;
		npm_package_devDependencies_autoprefixer: string;
		SHLVL: string;
		HOME: string;
		npm_package_dependencies_svelte_appwrite_client: string;
		npm_package_type: string;
		npm_package_devDependencies_graphql_codegen_svelte_apollo: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		npm_package_dependencies__svelteuidev_core: string;
		npm_package_dependencies__onsvisual_svelte_maps: string;
		npm_package_scripts_test: string;
		npm_config_strict_ssl: string;
		npm_config_save_prefix: string;
		npm_package_dependencies_svelte_maplibre: string;
		npm_package_dependencies_dotenv: string;
		npm_package_devDependencies__sveltejs_adapter_vercel: string;
		npm_config_version_git_message: string;
		HOMEBREW_PREFIX: string;
		npm_package_devDependencies_tsconfig: string;
		npm_package_dependencies_js_cookie: string;
		npm_package_dependencies_filerobot_image_editor: string;
		npm_package_dependencies_firebase: string;
		npm_package_dependencies__maptiler_client: string;
		npm_package_scripts_format: string;
		YARN_WRAP_OUTPUT: string;
		LOGNAME: string;
		LESS: string;
		npm_package_dependencies_tough_cookie: string;
		npm_package_devDependencies_codegen: string;
		npm_lifecycle_script: string;
		PREFIX: string;
		npm_package_dependencies_zod: string;
		npm_package_dependencies_svelte_i18next: string;
		npm_package_dependencies_superjson: string;
		npm_package_dependencies_canvas_txt: string;
		npm_package_dependencies__splidejs_svelte_splide: string;
		npm_package_devDependencies_dotenv_cli: string;
		VSCODE_GIT_IPC_HANDLE: string;
		npm_package_dependencies_cloudinary: string;
		npm_package_dependencies_react: string;
		NVM_BIN: string;
		npm_package_dependencies_node_base64_image: string;
		npm_package_dependencies__pqina_svelte_pintura: string;
		npm_config_version_git_sign: string;
		npm_config_user_agent: string;
		npm_config_ignore_scripts: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		GIT_ASKPASS: string;
		npm_package_devDependencies__playwright_test: string;
		npm_package_dependencies_browser_image_compression: string;
		npm_package_dependencies__types_w3c_image_capture: string;
		npm_package_devDependencies__types_eslint: string;
		npm_package_dependencies_svelte_qrcode_image: string;
		npm_config_init_version: string;
		npm_config_ignore_optional: string;
		npm_package_dependencies_flowbite_svelte_icons: string;
		npm_package_dependencies_maplibre_gl: string;
		npm_package_dependencies__skeletonlabs_skeleton: string;
		npm_package_dependencies__apollo_client: string;
		npm_package_workspaces_0: string;
		npm_package_dependencies_kolorist: string;
		npm_package_dependencies_i18next: string;
		npm_package_scripts_check: string;
		npm_package_workspaces_1: string;
		npm_node_execpath: string;
		npm_config_version_tag_prefix: string;
		COLORTERM: string;
		npm_package_dependencies_svelte_routing: string;
		npm_package_dependencies_qrcode: string;
		npm_package_dependencies__lordicon_element: string;
		npm_package_scripts_test_unit: string;
		NINJA_WELCOME_SHOWN: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_APPWRITE_ENDPOINT: string;
		PUBLIC_APPWRITE_PROJECT_ID: string;
		PUBLIC_SESSION_NAME: string;
		PUBLIC_IOS_AUTHORIZATION_HEADER_NAME: string;
		PUBLIC_CLIENT_HOSTNAME: string;
		PUBLIC_SERVER_HOSTNAME: string;
		PUBLIC_MAP_TILER_API_KEY: string;
		PUBLIC_MAX_IMAGE_SIZE_IN_MB: string;
		PUBLIC_DEV: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
