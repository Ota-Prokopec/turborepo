import appwrite from '@repo/appwrite-client'
import Queries from './tools/query'
import { Client } from 'appwrite'
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_ID } from '$env/static/public'
import myCollections from './tools/collections'

const client = appwrite<Record<string, never>>(
	new Client()
		.setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
		.setProject(PUBLIC_APPWRITE_PROJECT_ID),
)

const collections = myCollections(client.Collection)

export default client
const account = client.account

export { collections, Queries, account }
