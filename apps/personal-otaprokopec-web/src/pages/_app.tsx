import { ContextProviders } from '@/contexts/ContextProviders'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ContextProviders>
			<Component {...pageProps} />
		</ContextProviders>
	)
}

export default dynamic(() => Promise.resolve(App), {
	ssr: false,
})
