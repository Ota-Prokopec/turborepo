import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ImageList, ImageListItem } from '@mui/material'
import { BikeGallery } from '@/components/common/BikeGallery'
import { Column } from '@/components/common/Column'
import { Text } from '@/components/common/Text'
import { Layout } from '@/layouts/Layout'
import { Iframe } from '@/components/common/Iframe'
import { OtaProkopecIframe } from '@/components/common/OtaProkopecIframe'
import { Card, CardContent } from '@/components/ui/card'
import { ThemeSwith } from '@/components/common/ThemeSwith'
import { Row } from '@/components/common/Row'
import { Right } from '@/components/common/Right'

const bikePictures = [
	{
		img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		title: 'Breakfast',
	},
]

export default function Home() {
	return (
		<Layout className="p-4 mobile:p-2">
			<Right>
				<ThemeSwith></ThemeSwith>
			</Right>
			<Column className="w-full h-auto gap-8">
				<Column className="gap-4 w-full justify-center items-center">
					<Text className="text-4xl font-bold ">Me as programmer</Text>
					<OtaProkopecIframe></OtaProkopecIframe>
				</Column>
				<Column className="gap-4 w-full justify-center items-center">
					<Text className="text-4xl font-bold ">Me and my bike</Text>
					<BikeGallery></BikeGallery>
				</Column>
			</Column>
		</Layout>
	)
}
