import { type PageLoad } from './$types'
export const load: PageLoad = (event) => {
	return {
		petId: event.params.petId,
	}
}
