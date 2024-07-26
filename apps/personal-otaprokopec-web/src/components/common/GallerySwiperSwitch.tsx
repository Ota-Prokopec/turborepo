import { Icon } from './Icon'
import { RiGalleryView2 } from 'react-icons/ri'
import { MdSwipe } from 'react-icons/md'
import { GalleryType } from '../gallery/Gallery'

export type GallerySwiperSwitchProps = {
	onChange: (value: GalleryType) => void
	state: GalleryType
}

export const GallerySwiperSwitch = ({ onChange, state }: GallerySwiperSwitchProps) => {
	const changeStateHandler = () => {
		onChange(state === 'gallery' ? 'swiper' : 'gallery')
	}

	return (
		<Icon onClick={changeStateHandler} className="w-6 h-6">
			{state === 'gallery' ? (
				<MdSwipe className="w-full h-full fill-black dark:fill-white"></MdSwipe>
			) : (
				<RiGalleryView2 className="w-full h-full fill-black dark:fill-white"></RiGalleryView2>
			)}
		</Icon>
	)
}
