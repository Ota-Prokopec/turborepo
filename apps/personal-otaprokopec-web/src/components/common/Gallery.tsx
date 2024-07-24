import { useRecognizeWidth } from '@/hooks/useRecognizeWidth'
import { PinchZoomPanImage } from '@secretwpn/react-image-zoom'
import { useState } from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import Masonry from 'react-responsive-masonry'
import { Card } from '../ui/card'
import { Center } from './Center'
import { Column } from './Column'
import { Icon } from './Icon'

export type GalleryProps = {
	pictures: { src: string }[]
}

export const Gallery = ({ pictures }: GalleryProps) => {
	const { width } = useRecognizeWidth()

	const columnsCount =
		width === 'mobile'
			? 1
			: width === 'sm'
				? 2
				: width === 'md'
					? 3
					: width === 'lg'
						? 4
						: width !== null
							? 5
							: 1

	const [limit, setLimit] = useState<number>(columnsCount * 2)

	return (
		<Column className="w-full gap-4">
			<Masonry columnsCount={columnsCount}>
				{pictures.slice(0, limit).map((picture, i) => {
					return (
						<div key={i}>
							<GalleryItem picture={picture}></GalleryItem>
						</div>
					)
				})}
			</Masonry>
			{limit < pictures.length && (
				<Center className="w-full">
					<Icon
						onClick={() => setLimit((currentLimit) => currentLimit + columnsCount * 2)}
					>
						<FaCirclePlus className="fill-lightModeTextColor dark:fill-darkModeTextColor w-10 h-10" />
					</Icon>
				</Center>
			)}
		</Column>
	)
}

type GalleryItemProps = {
	picture: { src: string }
}

const GalleryItem = ({ picture }: GalleryItemProps) => {
	const onClick = () => {}

	return (
		<Card onClick={onClick} className="rounded-2xl overflow-hidden mobile:w-full">
			<PinchZoomPanImage src={picture.src} alt=""></PinchZoomPanImage>
		</Card>
	)
}
