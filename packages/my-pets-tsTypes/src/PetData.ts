import { z } from 'zod'

export const zodPetGender = z.union([z.literal('male'), z.literal('female')])

export const zodPetData = z.object({
	petAddress: z.string().min(1),
	petName: z.string().min(1),
	petType: z.union([z.literal('cat'), z.literal('dog')]),
	petAllergens: z.string().array(),
	ownerPhoneNumber: z.string().min(1),
	petTreating: z.string(),
	petGender: zodPetGender,
	petPicture: z.string().url().min(1),
	petDescriptionCustomFields: z
		.object({
			title: z.string(),
			text: z.string(),
		})
		.array(),
})

export type TPetData = z.infer<typeof zodPetData>

export type TCreatePetData = Omit<TPetData, 'petId'>

export const zodPetType = z.union([z.literal('cat'), z.literal('dog')])

export type TPetType = z.infer<typeof zodPetType>

export type TPetGender = z.infer<typeof zodPetGender>
