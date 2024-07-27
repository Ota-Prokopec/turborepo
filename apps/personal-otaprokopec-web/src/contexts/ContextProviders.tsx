'use client'
import { ReactNode } from 'react'
import { ColorThemeContextProvider } from './ColorThemeContextProvider'
import { z } from 'zod'
import { localStorageContext } from './ContextLocalStorage'

export type ContextProvidersProps = {
	children: ReactNode
}

const { useLocalStorageContext, LocalStorageContextProvider, useLocalStorageValue } =
	localStorageContext(
		z.object({
			LikedbikePictures: z.object({ src: z.string() }).array().default([]),
		}),
	)

export const ContextProviders = ({ children }: ContextProvidersProps) => {
	return (
		<ColorThemeContextProvider>
			<LocalStorageContextProvider>{children}</LocalStorageContextProvider>
		</ColorThemeContextProvider>
	)
}

export { useLocalStorageContext, useLocalStorageValue }
