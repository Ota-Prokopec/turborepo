// @ts-nocheck
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load = async (event: Parameters<PageServerLoad>[0]) => {
	const urlParams = new URLSearchParams(event.url.searchParams)

	//authorization
	const secret = urlParams.get('secret')

	if (!secret) throw error(409)

	//getting params
	const username = urlParams.get('username')
	const myId = urlParams.get('myId')

	//for ssr
	await event.cookies.set(process.env.PUBLIC_SESSION_NAME, secret, {
		sameSite: 'none',
		domain: process.env.CLIENT_HOSTNAME_COOKIES,
		secure: true,
		maxAge: 1000000000,
		httpOnly: true,
		path: '/',
	})

	return {
		session: secret,
		username,
		myId,
	}
}
