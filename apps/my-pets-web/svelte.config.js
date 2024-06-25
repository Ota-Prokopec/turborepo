import { preprocessMeltUI, sequence } from '@melt-ui/pp'
import { vitePreprocess } from '@sveltejs/kit/vite'
import adapter from '@sveltejs/adapter-vercel'
import path from 'path'
/** @type {import('@sveltejs/kit').Config}*/
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sequence([vitePreprocess(), preprocessMeltUI()]),
	kit: {
		typescript: { config: { forceConsistentCasingInFileNames: true } },
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
