'use client'

import { cn } from '@/components/utils'
import { useColorThemeContext } from '@/contexts/ColorThemeContextProvider'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default async ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	const { colorTheme, setColorTheme } = useColorThemeContext()

	return (
		<body
			className={cn(inter.className, 'relative w-[100vw] h-[100vh]', {
				dark: colorTheme === 'dark',
			})}
		>
			{children}
		</body>
	)
}
