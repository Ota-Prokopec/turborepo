import { ReactNode } from 'react'
import {
	Swiper as ReactSwiper,
	SwiperSlide,
	type SwiperProps as ReactSwiperProps,
} from 'swiper/react'
import '../../../node_modules/swiper/swiper.min.css'
import { useRecognizeWidth } from '@/hooks/useRecognizeWidth'
import { EffectCoverflow, Pagination } from 'swiper/modules'

export type SwiperProps = {
	children: ReactNode[]
} & ReactSwiperProps

export const Swiper = ({ children, ...props }: SwiperProps) => {
	console.log(props)

	const { width: windowWidth } = useRecognizeWidth()

	const slidesPerView =
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

	return (
		<ReactSwiper
			effect={
				windowWidth === 'mobile'
					? 'cards'
					: windowWidth === 'md' || windowWidth === 'sm'
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
			slidesPerView={slidesPerView}
			{...props}
		>
			{children.map((child, i) => {
				return <SwiperSlide key={i}>{child}</SwiperSlide>
			})}
		</ReactSwiper>
	)
}
