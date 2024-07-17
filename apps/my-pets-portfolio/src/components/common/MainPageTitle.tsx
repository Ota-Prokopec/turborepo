'use client'

import { Avatar, Button } from 'flowbite-react'
import { Column } from './Column'
import { device, scaleToMax } from '@repo/utils'
import { MyPetsLogo } from './MyPetsLogo'
import { MyPetsIconTag } from './MyPetsIronTag'

export type MainPageTitleProps = {
	scroll: number
}

const mypetsIconUrl = 'https://www.mypets.cz/icon.png'

export const MainPageTitle = ({ scroll }: MainPageTitleProps) => {
	return (
		<Column className="gap-16 max-w-[400px] items-center relative ">
			<Column
				className="gap-16 mt-4 lg:mt-0 relative"
				style={{ top: `-${scroll * 100}px` }}
			>
				<h1 className="text-5xl font-bold ">My Pets</h1>
				<p style={{ opacity: 1 - scroll * 1.5 }}>
					Chcete mít jistotu, že o vašeho mazlíčka bude dobře postaráno, pokud se zatoulá?
					Registrujte se do aplikace a vytvořte si psí známku!
				</p>
			</Column>

			<MyPetsLogo
				style={{ scale: `${scaleToMax(scroll * 3 + 2, 6)}`, top: `-${scroll * 150}px` }}
				className="relative !rounded-full overflow-hidden w-10 h-10"
			></MyPetsLogo>

			<Button href="https://www.mypets.cz">See My Pets app</Button>
			<div className="w-full flex relative lg:justify-end justify-center">
				<MyPetsIconTag
					style={{
						right: device.recognizeWidth() !== 'mobile' ? `${scroll * 50}%` : '0',
					}}
					className="relative w-[200px] h-[200px] rotate-[15deg]"
				></MyPetsIconTag>
			</div>
		</Column>
	)
}
