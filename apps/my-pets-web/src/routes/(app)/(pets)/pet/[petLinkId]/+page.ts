import { type PageLoad } from './$types'
export const load: PageLoad = (event) => {
	return {
		petLinkId: event.params.petLinkId,
	}
}
