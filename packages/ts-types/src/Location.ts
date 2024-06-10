import { z } from 'zod'
export const zodCoords = z.tuple([z.number(), z.number()])

export type Coords = z.infer<typeof zodCoords>
export type CoordsForDocument = {
	longitude: number
	latitude: number
}
