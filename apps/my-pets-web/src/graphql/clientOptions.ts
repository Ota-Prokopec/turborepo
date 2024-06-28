import { browser } from '$app/environment'
import {
	PUBLIC_IOS_AUTHORIZATION_HEADER_NAME,
	PUBLIC_SERVER_HOSTNAME,
	PUBLIC_SESSION_NAME,
} from '$env/static/public'
import { storage } from '$lib/utils/lsStore'
import type {
	RequestMiddleware,
	RequestConfig,
} from '../../../../node_modules/graphql-request/src/types'

const url = `${PUBLIC_SERVER_HOSTNAME}/graphql`

const requestMiddleware: RequestMiddleware = (req) => {
	return {
		...req,
		headers: {
			...req.headers,
			[PUBLIC_IOS_AUTHORIZATION_HEADER_NAME]:
				browser && storage.cookieFallback
					? storage.cookieFallback[PUBLIC_SESSION_NAME]
					: undefined,
		},
	}
}

export default [
	url,
	{
		cache: 'force-cache',
		requestMiddleware: requestMiddleware,
		credentials: 'include',
	} as RequestConfig,
] as const
