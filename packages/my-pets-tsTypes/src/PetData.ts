import { z } from 'zod'

export const zodPetData = z.object({
	address: z.string(),
	name: z.string(),
	id: z.string(),
})

export type PetData = z.infer<typeof zodPetData>
