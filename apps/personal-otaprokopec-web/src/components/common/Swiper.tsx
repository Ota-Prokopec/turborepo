import { ReactNode } from 'react'
import {
	Swiper as ReactSwiper,
	SwiperSlide,
	type SwiperProps as ReactSwiperProps,
} from 'swiper/react'
import '../../../../../node_modules/swiper/swiper.min.css'
import { useRecognizeWidth } from '@/hooks/useRecognizeWidth'

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
		<ReactSwiper slidesPerView={slidesPerView} {...props}>
			{children.map((child, i) => {
				return <SwiperSlide key={i}>{child}</SwiperSlide>
			})}
		</ReactSwiper>
	)
}
