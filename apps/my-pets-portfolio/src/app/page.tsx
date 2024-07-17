'use client'

import { Center } from '@/components/common/Center'
import { Column } from '@/components/common/Column'
import { MainPageTitle } from '@/components/common/MainPageTitle'
import { PetPictures } from '@/components/common/PetPictures'
import { browser, useBrowser } from '@/lib/useBrowser'
import { useScroll } from '@/lib/useScroll'
import { Avatar, Button } from 'flowbite-react'
import { Heading1 } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'

const Page = () => {
	const [scroll, setScroll] = useScroll()

	return (
		<Column className="items-center flex h-auto w-full relative p-2 gap-4">
			<Center className="h-full text-center relative lg:fixed">
				<MainPageTitle scroll={scroll}></MainPageTitle>
			</Center>
			{browser && (
				<PetPictures className="lg:absolute top-0 left-0 relative"></PetPictures>
			)}
		</Column>
	)
}

export default Page
