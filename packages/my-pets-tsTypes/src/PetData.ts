import { zodCoords } from '@repo/ts-types'
import { z } from 'zod'

export const zodPetGender = z.union([z.literal('male'), z.literal('female')])

export const zodPetData = z.object({
	petName: z.string().min(1),
	petType: z.union([z.literal('cat'), z.literal('dog')]),
	petAllergens: z.string().array(),
	ownerPhoneNumber: z.string().min(1),
	petTreating: z.string(),
	userId: z.string(),
	petGender: zodPetGender,
	petPicture: z.string().url().min(1),
	petAddress: z.object({
		petAddress: z.string().min(1),
		petAddressCoords: zodCoords,
	}),
	petDescriptionCustomFields: z
		.object({
			title: z.string(),
			text: z.string(),
		})
		.array(),
	lostPetLocations: z
		.object({
			coords: zodCoords,
		})
		.array(),
})

export const zodCreatingPetData = zodPetData.omit({
	userId: true,
	lostPetLocations: true,
})

export type TPetData = z.infer<typeof zodPetData>

export type TCreatePetData = z.infer<typeof zodCreatingPetData>

export const zodPetType = z.union([z.literal('cat'), z.literal('dog')])

export type TPetType = z.infer<typeof zodPetType>

export type TPetGender = z.infer<typeof zodPetGender>
