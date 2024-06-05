import { z } from 'zod'

export const zodPetGender = z.union([z.literal('male'), z.literal('female')])

export const zodPetData = z.object({
	petAddress: z.string(),
	petName: z.string(),
	petId: z.string(),
	petType: z.union([z.literal('cat'), z.literal('dog')]),
	petAllergens: z.string().array(),
	ownerPhoneNumber: z.string(),
	petTreating: z.string(),
	petGender: zodPetGender,
	customFields: z
		.object({
			title: z.string(),
			text: z.string(),
		})
		.array(),
})

export type TPetData = z.infer<typeof zodPetData>

export const zodPetType = z.union([z.literal('cat'), z.literal('dog')])

export type TPetType = z.infer<typeof zodPetType>

export type TPetGender = z.infer<typeof zodPetGender>
