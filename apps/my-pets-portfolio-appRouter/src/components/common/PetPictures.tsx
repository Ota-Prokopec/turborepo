'use client'

import { PetCard } from '@/components/common/PetCard'
import { Scroll } from '@/components/common/Scroll'
import { useRecognizeWidth } from '@/hooks/useRecognizeWidth'
import {} from 'flowbite-react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export type PetPicturesProps = {
	className?: string
}

const pets: { petName: string; petPictureUrl: string }[] = [
	{ petName: 'Rex', petPictureUrl: '/pictures/petPictures/pet1.jpeg' },
	{ petName: 'Soffia', petPictureUrl: '/pictures/petPictures/pet2.jpeg' },
	{ petName: 'Bolek', petPictureUrl: '/pictures/petPictures/pet3.jpeg' },
	{ petName: 'Jolda', petPictureUrl: '/pictures/petPictures/pet4.jpeg' },
	{ petName: 'Roxina', petPictureUrl: '/pictures/petPictures/pet5.jpeg' },
	{ petName: 'Adélka', petPictureUrl: '/pictures/petPictures/pet6.jpeg' },
]

export const PetPictures = ({ className }: PetPicturesProps) => {
	const { width: pageWidth } = useRecognizeWidth()

	return (
		<Scroll className={twMerge('gap-3 w-full', className)}>
			{pets.map(({ petName, petPictureUrl }, i) => {
				return (
					pageWidth && (
						<motion.div
							key={i}
							style={
								pageWidth === 'lg' || pageWidth === 'xl' || pageWidth === '2xl'
									? { [!(i % 2) ? 'left' : 'right']: `${0}px`, top: `${i * 200}px` }
									: {}
							}
							className="card-container lg:absolute relative lg:m-2"
							initial={{ opacity: 0.6, scale: 0.6 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: false }}
						>
							<PetCard petName={petName} petPictureUrl={petPictureUrl}></PetCard>
						</motion.div>
					)
				)
			})}
		</Scroll>
	)
}
