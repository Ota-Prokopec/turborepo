import { useColorThemeContext } from '@/contexts/ColorThemeContextProvider'
import { Icon } from './Icon'
import { LuSun } from 'react-icons/lu'
import { IoMdMoon } from 'react-icons/io'
import { useEffect } from 'react'

export type ThemeSwithProps = {}

export const ThemeSwith = ({}: ThemeSwithProps) => {
	const { colorTheme, setColorTheme } = useColorThemeContext()

	return (
		<Icon
			className="w-6 h-6"
			onClick={() => {
				setColorTheme((currentValue) => (currentValue === 'dark' ? 'light' : 'dark'))
			}}
		>
			{colorTheme === 'light' ? (
				<IoMdMoon className="fill-black w-full h-full"></IoMdMoon>
			) : (
				<LuSun className="fill-white w-full h-full"></LuSun>
			)}
		</Icon>
	)
}
