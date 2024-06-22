import { zodGraphqlDocument } from '@repo/appwrite-types'
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
	linkId: z.string(),
	petGender: zodPetGender,
	petPicture: z.string().url().min(1),
	petBirthDate: z.date(),
	petWeight: z.number({ description: 'in kg' }).optional().or(z.null()),
	petAge: z.number(),
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
	lostPetLocations: zodGraphqlDocument
		.merge(
			z.object({
				coords: zodCoords,
				dateTime: z.string(),
			}),
		)
		.array(),
})

export const zodCreatingPetData = zodPetData.omit({
	userId: true,
	lostPetLocations: true,
	linkId: true,
	petAge: true,
})

export type TPetData = z.infer<typeof zodPetData>

export type TCreatePetData = z.infer<typeof zodCreatingPetData>

export const zodPetType = z.union([z.literal('cat'), z.literal('dog')])

export type TPetType = z.infer<typeof zodPetType>

export type TPetGender = z.infer<typeof zodPetGender>
