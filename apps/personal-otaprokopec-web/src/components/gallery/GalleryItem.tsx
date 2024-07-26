import cloudinaryLoader from '@/lib/imageLoaders/cloudinaryImageLoader'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { Center } from '../common/Center'
import { Icon } from '../common/Icon'
import { Loading } from '../common/Loading'
import { Card } from '../ui/card'
import { cn } from '../utils'
import { useLocalStorage } from '@/hooks/useLocalStorage'

type GalleryItemProps = {
	picture: { src: string }
	className?: string
	onClick?: () => void
	quality: number
}

export const GalleryItem = ({
	picture,
	className,
	onClick,
	quality,
}: GalleryItemProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [likedPosts, setLikedPosts] = useLocalStorage('LikedbikePictures')

	const likePost = (newLikedPost: string) => {
		setLikedPosts((currentLikedPosts) => {
			if (!likedPosts) return [newLikedPost]
			else return [...likedPosts, newLikedPost]
		})
	}

	return (
		<Card
			onClick={onClick}
			className={cn('rounded-2xl overflow-hidden mobile:w-full relative', className)}
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
					alt=""
					width={1000}
					height={1000}
					quality={quality}
					className="!h-auto !w-auto"
					onLoad={() => setIsLoading(false)}
					loading="lazy"
				/>
			</Fragment>
			<Icon
				onClick={() => likePost(picture.src)}
				className="absolute bottom-0 left-0 m-2 w-6 h-6"
			>
				<FaHeart className="w-full h-full " />
			</Icon>
		</Card>
	)
}
