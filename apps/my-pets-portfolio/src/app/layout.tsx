import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { twMerge } from 'tailwind-merge'
import { useLayoutEffect, useState } from 'react'
import { appWithTranslation } from 'next-i18next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'My Pets',
}

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
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
			<body className={twMerge(inter.className, 'relative w-[100vw] h-[100vh]')}>
				{children}
			</body>
		</html>
	)
}

export default RootLayout
