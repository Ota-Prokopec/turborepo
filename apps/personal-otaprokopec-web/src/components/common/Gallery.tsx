import { useRecognizeWidth } from '@/hooks/useRecognizeWidth'
import { Fragment, useState } from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import Masonry from 'react-responsive-masonry'
import { Card } from '../ui/card'
import { cn } from '../utils'
import { Center } from './Center'
import { Column } from './Column'
import { Icon } from './Icon'
import { Swiper } from './Swiper'
import { GallerySwiperSwitch } from './GallerySwiperSwitch'
import { Row } from './Row'

export type GalleryProps = {
	pictures: { src: string }[]
}
export type GalleryType = 'gallery' | 'swiper'

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
	const [galleryType, setGalleryType] = useState<GalleryType>('swiper')
	const { width: windowWidth } = useRecognizeWidth()

	const swiperSlidesPerView =
		windowWidth === 'mobile'
			? 1
			: windowWidth === 'sm'
				? 2
				: windowWidth === 'md'
					? 3
					: windowWidth === 'lg'
						? 4
						: windowWidth === 'xl'
							? 5
							: 6

	const loadMorePictures = () =>
		setLimit((currentLimit) => currentLimit + columnsCount * 2)

	const picturesToRender = pictures.slice(0, limit).map((picture, i) => {
		return (
			<div key={picture.src}>
				<GalleryItem picture={picture}></GalleryItem>
			</div>
		)
	})

	return (
		<Column className={cn('relative w-full h-auto gap-4', {})}>
			<GallerySwiperSwitch
				onChange={(newType) => setGalleryType(newType)}
				state={galleryType}
			></GallerySwiperSwitch>
			{galleryType === 'gallery' ? (
				<Column className="w-full gap-4 ">
					<Masonry columnsCount={columnsCount}>{picturesToRender}</Masonry>
					{limit < pictures.length && (
						<LoadMoreButton onClick={loadMorePictures}></LoadMoreButton>
					)}
				</Column>
			) : (
				<Row className="gap-4 w-full h-auto">
					<Swiper
						className=""
						spaceBetween={50}
						slidesPerView={swiperSlidesPerView}
						onReachEnd={() => {
							if (limit < pictures.length) loadMorePictures()
						}}
					>
						{picturesToRender}
					</Swiper>
				</Row>
			)}
		</Column>
	)
}

type GalleryItemProps = {
	picture: { src: string }
	className?: string
	onClick?: () => void
}

const GalleryItem = ({ picture, className, onClick }: GalleryItemProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(true)

	return (
		<Card
			onClick={onClick}
			className={cn('rounded-2xl overflow-hidden mobile:w-full', className)}
		>
			<Fragment>
				<img
					onLoad={() => setIsLoading(false)}
					loading="lazy"
					className="!h-auto !w-auto"
					src={picture.src}
					alt=""
				></img>
			</Fragment>
		</Card>
	)
}

const LoadMoreButton = ({ onClick }: { onClick: () => void }) => {
	return (
		<Center className="w-full">
			<Icon onClick={onClick}>
				<FaCirclePlus className="fill-lightModeTextColor dark:fill-darkModeTextColor w-10 h-10 " />
			</Icon>
		</Center>
	)
}
