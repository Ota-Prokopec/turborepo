import {
	ColorThemeContextProvider,
	colorThemeZodSchema,
	TColorTheme,
} from '@/contexts/ColorThemeContextProvider'
import './globals.css'
import { use } from 'react'

const RootLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	async function getServerSideColorTheme(): Promise<TColorTheme> {
		'use server'
		const { cookies } = await import('next/headers')
		const colorTheme = cookies().get('colorTheme')

		return colorTheme?.value as unknown as TColorTheme
	}

	let colorTheme = (await getServerSideColorTheme()) || 'light'

	return (
		<html lang="en">
			<head>
				<title>My Pets portfolio</title>
				<meta name="theme-color" content="dark" />
				<meta
					name="viewport"
					content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, user-scalable=no"
				/>
			</head>
			<ColorThemeContextProvider initialValue={colorTheme}>
				{children}
			</ColorThemeContextProvider>
		</html>
	)
}

export default RootLayout
