import { BikeGallery } from '@/components/common/BikeGallery'
import { Column } from '@/components/common/Column'
import { OtaProkopecIframe } from '@/components/common/OtaProkopecIframe'
import { Right } from '@/components/common/Right'
import { Text } from '@/components/common/Text'
import { ThemeSwith } from '@/components/common/ThemeSwith'
import { useLocalStorageContext, useLocalStorageValue } from '@/contexts/ContextProviders'
import { Layout } from '@/layouts/Layout'
import { useEffect } from 'react'

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
