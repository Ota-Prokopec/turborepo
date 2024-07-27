'use client'
import { ReactNode } from 'react'
import { ColorThemeContextProvider } from './ColorThemeContextProvider'
import { z } from 'zod'
import { localStorageContext } from './useLocalStorage'

export type ContextProvidersProps = {
	children: ReactNode
}

const { useLocalStorageContext, LocalStorageContextProvider, useLocalStorageValue } =
	localStorageContext(
		z.object({ key: z.string().optional(), key2: z.string().optional() }),
	)

export const ContextProviders = ({ children }: ContextProvidersProps) => {
	return (
		<ColorThemeContextProvider>
			<LocalStorageContextProvider>{children}</LocalStorageContextProvider>
		</ColorThemeContextProvider>
	)
}

export { useLocalStorageContext, useLocalStorageValue }
