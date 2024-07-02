import { sdkssr } from '$src/graphql/sdkssr'
import { error, redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async (event) => {
	const routeId = event.route.id
	const pathname = event.url.pathname
	if (!routeId) throw error(404)

	try {
		const user = (await sdkssr(event).getAccount()).getAccount

		return {
			user,
		}
	} catch {
		if (
			(pathname.includes('pet') && !pathname.includes('edit')) ||
			pathname.includes('account/settings')
		)
			return { user: null }
		else throw redirect(307, '/auth')
	}
}
