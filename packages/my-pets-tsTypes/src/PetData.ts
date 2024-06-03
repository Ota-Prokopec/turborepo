import { z } from 'zod'

export const zodPetData = z.object({
	petAddress: z.string(),
	petName: z.string(),
	petId: z.string(),
	petType: z.union([z.literal('cat'), z.literal('dog')]),
})

export type TPetData = z.infer<typeof zodPetData>

export type TPetType = 'cat' | 'dog'
