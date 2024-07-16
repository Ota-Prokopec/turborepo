'use client'

import { Column } from '@/components/common/Column'
import { PetCard } from '@/components/common/PetCard'
import { PetScroll } from '@/components/common/PetScroll'
import { Card, CardTitle } from '@/components/ui/card'
import { Grid } from '@mui/material'
import {} from 'flowbite-react'
import { useScroll, motion } from 'framer-motion'

const Home = () => {
	return (
		<div className="items-center grid grid-cols-3 grid-rows-5">
			<PetScroll>
				<PetCard
					petName="Jessie"
					petPictureUrl={'https://www.mypets.cz/icon.png'}
				></PetCard>
				<PetCard
					petName="Jessie"
					petPictureUrl={'https://www.mypets.cz/icon.png'}
				></PetCard>
				<PetCard
					petName="Jessie"
					petPictureUrl={'https://www.mypets.cz/icon.png'}
				></PetCard>
				<PetCard
					petName="Jessie"
					petPictureUrl={'https://www.mypets.cz/icon.png'}
				></PetCard>
				<PetCard
					petName="Jessie"
					petPictureUrl={'https://www.mypets.cz/icon.png'}
				></PetCard>
				<PetCard
					petName="Jessie"
					petPictureUrl={'https://www.mypets.cz/icon.png'}
				></PetCard>
			</PetScroll>
		</div>
	)
}

export default Home
