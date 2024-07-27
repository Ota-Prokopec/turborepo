'use client'
import { ReactNode } from 'react'
import { ColorThemeContextProvider } from './ColorThemeContextProvider'

export type ContextProvidersProps = {
	children: ReactNode
}

export const ContextProviders = ({ children }: ContextProvidersProps) => {
	return <ColorThemeContextProvider>{children}</ColorThemeContextProvider>
}
