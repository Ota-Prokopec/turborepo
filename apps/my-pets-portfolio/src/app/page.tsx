'use client'

import { Center } from '@/components/common/Center'
import { Column } from '@/components/common/Column'
import { MainPageTitle } from '@/components/common/MainPageTitle'
import { MyPetsIconTag } from '@/components/common/MyPetsIronTag'
import { MyPetsLogo } from '@/components/common/MyPetsLogo'
import { PetPictures } from '@/components/common/PetPictures'
import { useScroll } from '@/lib/useScroll'
import { device } from '@repo/utils'

const Page = () => {
	const [scroll, setScroll] = useScroll()
	const pageWidth = device.recognizeWidth()

	return (
		<Column className="items-center flex h-auto w-full relative p-2 gap-4">
			<Center className="h-full text-center relative lg:fixed w-full">
				<MainPageTitle scroll={scroll}></MainPageTitle>
			</Center>
			<PetPictures className="lg:absolute left-0 relative right-0 top-0"></PetPictures>
			<div
				style={{
					top: `${scroll * 250 + (pageWidth === 'mobile' ? 200 : 0)}px`,
				}}
				className="overflow-hidden absolute  right-0"
			>
				<MyPetsLogo className="relative top-[0px] right-[-50px] !w-[200px] !h-[200px] drop-shadow-md rotate-[-35deg]"></MyPetsLogo>
			</div>
		</Column>
	)
}

export default Page
