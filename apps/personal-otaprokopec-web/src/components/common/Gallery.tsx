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
import Image from 'next/image'
import cloudinaryLoader from '@/lib/imageLoaders/cloudinaryImageLoader'
import { Loading } from './Loading'
import { EffectCoverflow, Pagination } from 'swiper/modules'

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
	const [galleryType, setGalleryType] = useState<GalleryType>('gallery')
	const { width: windowWidth } = useRecognizeWidth()

	const picturesPerView =
		windowWidth === 'mobile'
			? 1
			: windowWidth === 'sm'
				? 2
				: windowWidth === 'md'
					? 3
					: windowWidth === 'lg'
						? 4
						: 5

	const loadMorePictures = () =>
		setLimit((currentLimit) => currentLimit + columnsCount * 2)

	const picturesToRender = pictures.slice(0, limit).map((picture, i) => {
		return (
			<div key={picture.src}>
				<GalleryItem quality={60 - picturesPerView * 10} picture={picture}></GalleryItem>
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
						effect={
							width === 'mobile'
								? 'cards'
								: width === 'md' || width === 'sm'
									? 'coverflow'
									: undefined
						}
						grabCursor={true}
						centeredSlides={true}
						coverflowEffect={{
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: true,
						}}
						pagination={true}
						modules={[EffectCoverflow, Pagination]}
						className=""
						spaceBetween={50}
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
	quality: number
}

const GalleryItem = ({ picture, className, onClick, quality }: GalleryItemProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(true)

	return (
		<Card
			onClick={onClick}
			className={cn('rounded-2xl overflow-hidden mobile:w-full', className)}
		>
			<Fragment>
				{isLoading && (
					<Center className="w-full h-[350px]">
						<Loading></Loading>
					</Center>
				)}
				<Image
					loader={cloudinaryLoader}
					src={picture.src}
					alt="Picture of the author"
					width={600}
					height={600}
					quality={quality}
					className="!h-auto !w-auto"
					onLoad={() => setIsLoading(false)}
					loading="lazy"
				/>
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
