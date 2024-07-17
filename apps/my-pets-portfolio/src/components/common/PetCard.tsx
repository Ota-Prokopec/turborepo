import { Avatar, AvatarGroup } from 'flowbite-react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { twMerge } from 'tailwind-merge'
import React from 'react'

export type PetCardProps = {
	petName: string
	petPictureUrl: string
	className?: string
	style?: React.CSSProperties
}

export const PetCard = ({ petName, petPictureUrl, className, style }: PetCardProps) => {
	return (
		<Card
			style={style}
			className={twMerge(
				'rounded-2xl flex flex-wrap flex-col gap-2 lg:w-[250px] h-auto w-full',
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
