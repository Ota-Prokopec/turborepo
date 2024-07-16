import { Avatar } from 'flowbite-react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { twMerge } from 'tailwind-merge'

export type PetCardProps = {
	petName: string
	petPictureUrl: string
	className?: string
}

export const PetCard = ({ petName, petPictureUrl, className }: PetCardProps) => {
	return (
		<Card
			className={twMerge(
				'rounded-2xl flex flex-wrap flex-col gap-2 w-[250px] h-auto mobile:w-full',
				className,
			)}
		>
			<CardTitle className="m-4 text-center text-gray-800">{petName}</CardTitle>
			<CardContent className="p-0">
				<img className="!rounded-2xl overflow-hidden" src={petPictureUrl}></img>
			</CardContent>
		</Card>
	)
}
