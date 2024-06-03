import { Query } from '@repo/appwrite-ssr-graphql'
import { CollectionName } from './collections'
import { TPetDocument } from '@repo/my-pets-tstypes'

const query = {
	pet: Query<TPetDocument>(),
} satisfies Record<CollectionName, any>

export type QueryType = (typeof query)[keyof typeof query]

export default query