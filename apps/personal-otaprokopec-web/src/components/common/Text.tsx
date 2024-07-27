import { createElement, CSSProperties, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type TextProps = {
	children: ReactNode
	tagName?: 'p' | 'h1' | 'h2' | 'h3'
	className?: string
	style?: CSSProperties
}

export const Text = ({ children, tagName, className, style }: TextProps) => {
	return createElement(
		tagName ?? 'p',
		{
			className: twMerge(
				'dark:text-darkModeTextColor text-lightModeTextColor',
				className,
			),
			style: style,
		},
		children,
	)
}
