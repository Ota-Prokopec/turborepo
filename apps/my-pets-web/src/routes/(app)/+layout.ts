import { watchUsersLocation } from '@repo/utils'
import { LayoutLoad } from '../$types'
import { storage } from '$lib/utils/lsStore'
import { browser } from '$app/environment'

export const load: LayoutLoad = (event) => {
	if (!browser) return event.data // only the browser side

	watchUsersLocation(
		async (location) => {
			storage.usersLocation = location // save location into store and localstorage
		},
		{ enableHighAccuracy: false },
	)

	return event.data
}
