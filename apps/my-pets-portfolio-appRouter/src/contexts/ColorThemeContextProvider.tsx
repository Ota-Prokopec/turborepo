'use client'

import { parseCookies, setCookie } from 'nookies'
import { z } from 'zod'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

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
	initialValue: TColorTheme
}

export const ColorThemeContextProvider = ({
	children,
	initialValue,
}: ColorTHemeContextProviderProps) => {
	const [colorTheme, setColorTheme] = useState<TColorTheme>(initialValue)

	// useEffect(() => {
	// 	const colorThemeCookieValue = colorThemeZodSchema.parse(
	// 		parseCookies()[colorThemeCookieName],
	// 	)
	// 	setColorTheme(colorThemeCookieValue)
	// }, [])

	useEffect(() => {
		console.log(colorTheme)

		setCookie(null, colorThemeCookieName, colorTheme)
	}, [colorTheme])

	return (
		<ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
			{children}
		</ColorThemeContext.Provider>
	)
}
