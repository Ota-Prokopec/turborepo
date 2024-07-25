import { ReactNode } from 'react'
import {
	Swiper as ReactSwiper,
	SwiperSlide,
	type SwiperProps as ReactSwiperProps,
} from 'swiper/react'
import '../../../../../node_modules/swiper/swiper.min.css'

export type SwiperProps = {
	children: ReactNode[]
} & ReactSwiperProps

export const Swiper = ({ children, ...props }: SwiperProps) => {
	return (
		<ReactSwiper {...props}>
			{children.map((child, i) => {
				return <SwiperSlide key={i}>{child}</SwiperSlide>
			})}
		</ReactSwiper>
	)
}
