'use client'

import { Center } from '@/components/common/Center'
import { Column } from '@/components/common/Column'
import { MainPageTitle } from '@/components/common/MainPageTitle'
import { MyPetsLogo } from '@/components/common/MyPetsLogo'
import { PetPictures } from '@/components/common/PetPictures'
import { useColorThemeContext } from '@/contexts/ColorThemeContextProvider'
import { useRecognizeWidth } from '@/hooks/useRecognizeWidth'
import { useScroll } from '@/hooks/useScroll'
import { useEffect } from 'react'

const Page = () => {
	const { scroll } = useScroll()
	const { width: pageWidth } = useRecognizeWidth()
	const { width } = useRecognizeWidth()
	const { colorTheme, setColorTheme } = useColorThemeContext()
	console.log(colorTheme)

	return (
		<Column className="items-center flex h-auto w-full relative p-2 gap-4">
			<button onClick={() => setColorTheme('dark')}>d</button>
			<button onClick={() => setColorTheme('light')}>l</button>
			<Center className="h-auto text-center relative lg:fixed w-full">
				<MainPageTitle></MainPageTitle>
			</Center>
			<PetPictures className="lg:absolute left-0 relative right-0 top-0"></PetPictures>
			<div
				style={{
					top: `${scroll * 250 + (pageWidth === 'mobile' ? 200 : 0)}px`,
				}}
				className="overflow-hidden absolute right-0"
			>
				<MyPetsLogo className="relative top-[0px] right-[-50px] !w-[200px] !h-[200px] drop-shadow-md rotate-[-35deg]"></MyPetsLogo>
			</div>
		</Column>
	)
}

export default Page
