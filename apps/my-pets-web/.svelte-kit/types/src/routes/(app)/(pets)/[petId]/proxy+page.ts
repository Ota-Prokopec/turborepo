// @ts-nocheck
import { type PageLoad } from './$types'
export const load = (event: Parameters<PageLoad>[0]) => {
	return {
		petId: event.params.petId,
	}
}
