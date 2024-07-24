'use client'

import { Avatar } from 'flowbite-react'
import { Column } from './Column'
import { device, scaleToMax } from '@repo/utils'
import { MyPetsLogo } from './MyPetsLogo'
import { MyPetsTag } from './MyPetsTag'
import { useRecognizeWidth } from '@/hooks/useRecognizeWidth'
import { Center } from './Center'
import { useMemo } from 'react'
import { useScroll } from '@/hooks/useScroll'
import { Text } from './Text'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ButtonLink } from './ButtonLink'

const mypetsIconUrl = 'https://www.mypets.cz/icon.png'

export const MainPageTitle = () => {
	const { scroll } = useScroll()
	const { width: pageWidth } = useRecognizeWidth()

	return (
		<Column className="gap-16 max-w-[400px] items-center relative h-auto">
			<Column
				className="gap-16 mt-4 lg:mt-0 relative"
				style={{ top: `-${scroll * 100}px` }}
			>
				<Text tagName="h1" className="text-5xl font-bold ">
					My Pets
				</Text>
				<Text tagName="p" style={{ opacity: 1 - scroll * 1.5 }}>
					Chcete mít jistotu, že o vašeho mazlíčka bude dobře postaráno, pokud se zatoulá?
					Registrujte se do aplikace a vytvořte si psí známku!
				</Text>
			</Column>

			<MyPetsLogo
				style={{
					scale: `${useMemo(() => scaleToMax(scroll * 3 + 2, 6), [scroll * 3 + 2, 6])}`,
					top: `-${scroll * 150}px`,
				}}
				className="relative !rounded-full overflow-hidden w-10 h-10"
			></MyPetsLogo>

			<ButtonLink href="https://mypets.cz">See My Pets app</ButtonLink>
			<Center className="w-full flex relative justify-center overflow-hidden">
				<MyPetsTag className="relative w-[400px] h-auto max-w-full rotate-[15deg]"></MyPetsTag>
			</Center>
		</Column>
	)
}
