import { browser } from '$app/environment'
import {
	PUBLIC_IOS_AUTHORIZATION_HEADER_NAME,
	PUBLIC_SERVER_HOSTNAME,
} from '$env/static/public'
import { storage } from '$lib/utils/lsStore'
import { RequestConfig, RequestMiddleware } from 'graphql-request/build/esm/types'

const url = `${PUBLIC_SERVER_HOSTNAME}/graphql`

const requestMiddleware: RequestMiddleware = (req) => {
	return {
		...req,
		headers: {
			...req.headers,
			[PUBLIC_IOS_AUTHORIZATION_HEADER_NAME]: browser
				? storage.cookieFallback?.a_session_6636972a0023b54e21bf
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
