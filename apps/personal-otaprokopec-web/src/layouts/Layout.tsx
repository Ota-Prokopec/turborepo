import { Column } from '@/components/common/Column'
import { Row } from '@/components/common/Row'
import { cn } from '@/components/utils'
import { useColorThemeContext } from '@/contexts/ColorThemeContextProvider'
import { ReactNode, useEffect } from 'react'
import { IoMdSettings } from 'react-icons/io'

export type LayoutProps = {
	children: ReactNode
	className?: string
}

export const Layout = ({ children, className }: LayoutProps) => {
	const { colorTheme } = useColorThemeContext()

	useEffect(() => {
		if (colorTheme === 'dark') document.body.classList.add('dark')
		else document.body.classList.remove('dark')
	}, [colorTheme])

	return (
		<Column
			className={cn(
				'w-full h-auto bg-lightModeBackgroundColor dark:bg-darkModeBackgroundColor',

				className,
			)}
		>
			{children}
		</Column>
	)
}
