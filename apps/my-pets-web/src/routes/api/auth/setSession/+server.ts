import { json, type RequestHandler } from '@sveltejs/kit'
import { z } from 'zod'

const zodData = z.object({
	session: z.string(),
})

export const POST: RequestHandler = async (event) => {
	const data = zodData.parse(await event.request.json())

	const session = data.session

	//for ssr
	await event.cookies.set(process.env.PUBLIC_SESSION_NAME, session, {
		sameSite: 'none',
		domain: process.env.CLIENT_HOSTNAME_COOKIES,
		secure: true,
		maxAge: 1000000000,
		httpOnly: true,
		path: '/',
	})
	return json({ success: true })
}
