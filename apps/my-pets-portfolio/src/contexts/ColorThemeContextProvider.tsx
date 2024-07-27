'use client'

import { parseCookies, setCookie } from 'nookies'
import { z } from 'zod'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { device, getThemeInternalMode } from '@repo/utils'

export const colorThemeCookieName = 'colorTheme'

export const colorThemeZodSchema = z.union([z.literal('dark'), z.literal('light')])

export type TColorTheme = z.infer<typeof colorThemeZodSchema>

export type UseColorThemeContextPayload = {
	colorTheme: TColorTheme
	setColorTheme: (value: TColorTheme) => void
}

// Context

export const ColorThemeContext = createContext<UseColorThemeContextPayload | null>(null)

// Hook

export const useColorThemeContext = (): UseColorThemeContextPayload => {
	const context = useContext(ColorThemeContext)
	if (!context)
		throw new Error(
			'Color theme context has to be used within the Color theme context provider!',
		)
	return context
}

// Provider

export type ColorTHemeContextProviderProps = {
	children: ReactNode
}

export const ColorThemeContextProvider = ({
	children,
}: ColorTHemeContextProviderProps) => {
	let colorThemeFromCookies: TColorTheme = getThemeInternalMode()
	try {
		colorThemeFromCookies = colorThemeZodSchema.parse(
			parseCookies()[colorThemeCookieName],
		)
	} catch {}

	const [colorTheme, setColorTheme] = useState<TColorTheme>(colorThemeFromCookies)

	useEffect(() => {
		setCookie(null, colorThemeCookieName, colorTheme)
	}, [colorTheme])

	return (
		<ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
			{children}
		</ColorThemeContext.Provider>
	)
}
