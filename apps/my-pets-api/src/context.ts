import { Request, Response } from 'express'
import { Models } from 'appwrite'
import appwriteConnections, { Appwrite } from './lib/appwrite/appwrite'
import { Types, getSessionFromCookie } from '@repo/appwrite-ssr-graphql'
import { TUserPreferences } from '@repo/my-pets-tstypes'

export const context = async ({ req, res }: { res: Response; req: Request }) => {
	try {
		const cookies: Types.Cookie[] = Object.entries(
			req.cookies as Record<string, string>,
		).map(([key, value]) => ({
			name: key,
			value: value,
		}))

		let user: Models.User<TUserPreferences> | null = null
		let appwrite: Appwrite

		try {
			const sessionForAndroid = getSessionFromCookie(
				process.env.APPWRITE_PROJECT_ID,
				cookies,
			)
			const sessionForIos = req.headers ? req.headers.authorization : undefined

			const session = sessionForAndroid ?? sessionForIos

			if (!session) throw new Error('User is not authenticated')
			appwrite = appwriteConnections.setSession(session)

			user = await appwrite.account.get()
		} catch (error) {
			appwrite = appwriteConnections.setNone()
			//user is equal to null
		}

		return {
			req,
			res,
			isAuthed: (ctxUser: typeof user | null): ctxUser is NonNullable<typeof user> =>
				ctxUser !== null,
			user: user,
			appwrite: appwrite,
		}
	} catch (error) {
		console.log(error)
		throw error
	}
}

export type Context = NonNullable<Awaited<ReturnType<typeof context>>>
