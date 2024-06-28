import { preprocessMeltUI, sequence } from '@melt-ui/pp'
import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
/** @type {import('@sveltejs/kit').Config}*/
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sequence([vitePreprocess(), preprocessMeltUI()]),
	kit: {
		adapter: adapter(),
		env: {
			dir: '../../',
			publicPrefix: 'PUBLIC_',
		},
		alias: {
			$lib: path.resolve('src', 'lib'),
			$root: path.resolve('/'),
			$src: path.resolve('src'),
			$routes: path.resolve('src', 'routes'),
		},
	},
}
export default config
