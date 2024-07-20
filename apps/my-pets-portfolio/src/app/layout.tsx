import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { twMerge } from 'tailwind-merge'
import { useLayoutEffect, useRef, useState } from 'react'
import { appWithI18Next } from 'ni18n'

const inter = Inter({ subsets: ['latin'] })

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
