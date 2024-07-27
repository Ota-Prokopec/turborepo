import { useRecognizeWidth } from '@/hooks/useRecognizeWidth'
import { useState } from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Center } from '../common/Center'
import { Column } from '../common/Column'
import { GallerySwiperSwitch } from '../common/GallerySwiperSwitch'
import { Icon } from '../common/Icon'
import { Row } from '../common/Row'
import { Swiper } from '../common/Swiper'
import { cn } from '../utils'
import { GalleryItem } from './GalleryItem'
import { MansonryGallery } from './MansonryGallery'

export type GalleryProps = {
	pictures: { src: string }[]
	onLikePost: ({ picture }: { picture: { src: string } }) => void
	likedPictures: { src: string }[]
}
export type GalleryType = 'gallery' | 'swiper'

export const Gallery = ({ pictures, onLikePost, likedPictures }: GalleryProps) => {
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
				<GalleryItem
					isLiked={likedPictures.find(({ src }) => src === picture.src) ? true : false}
					onLikePost={() => onLikePost({ picture })}
					quality={60 - picturesPerView * 10}
					picture={picture}
				></GalleryItem>
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
					<MansonryGallery columns={columnsCount}>{picturesToRender}</MansonryGallery>
					{limit < pictures.length && (
						<LoadMoreButton onClick={loadMorePictures}></LoadMoreButton>
					)}
				</Column>
			) : (
				<Row className="gap-4 w-full h-auto">
					<Swiper
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

const LoadMoreButton = ({ onClick }: { onClick: () => void }) => {
	return (
		<Center className="w-full">
			<Icon onClick={onClick}>
				<FaCirclePlus className="fill-lightModeTextColor dark:fill-darkModeTextColor w-10 h-10 " />
			</Icon>
		</Center>
	)
}
