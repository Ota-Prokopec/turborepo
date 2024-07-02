import { getSdk } from '$src/graphql/generated'
import { GraphQLClient, type RequestMiddleware } from 'graphql-request'
import {
	PUBLIC_IOS_AUTHORIZATION_HEADER_NAME,
	PUBLIC_SERVER_HOSTNAME,
	PUBLIC_SESSION_NAME,
} from '$env/static/public'
import { storage } from '$lib/utils/lsStore'
import { browser } from '$app/environment'
import type { Types } from '@repo/appwrite-ssr-graphql'

const url = `${PUBLIC_SERVER_HOSTNAME}/graphql`

const requestMiddleware: RequestMiddleware = (req) => {
	const authHeader = {
		[PUBLIC_IOS_AUTHORIZATION_HEADER_NAME]:
			browser && storage.cookieFallback
				? storage.cookieFallback[PUBLIC_SESSION_NAME]
				: undefined,
	}
	return {
		...req,
		cache: 'only-if-cached',
		headers: {
			...req.headers,
			...authHeader,
		},
	}
}

const client = new GraphQLClient(url, {
	mode: 'same-origin',
	cache: 'only-if-cached',
	requestMiddleware: requestMiddleware,
	credentials: 'include',
})

export const sdk = getSdk(client)

type TSSRParam = { cookies: { getAll: () => Types.Cookie[] } }

export const sdkssr = (event: TSSRParam) => {
	const stringCookies = event.cookies
		.getAll()
		.map((cookie) => `${cookie.name}=${cookie.value};`)
		.join('')

	const cookiedClient = client.setHeader('Cookie', stringCookies)
	return getSdk(cookiedClient)
}
