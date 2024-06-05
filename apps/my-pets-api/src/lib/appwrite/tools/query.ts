import { Query } from '@repo/appwrite-ssr-graphql'
import { CollectionName } from './collections'
import { TPetDocument, TpetDescriptionCustomFieldsDocument } from '@repo/my-pets-tstypes'

const query = {
	pet: Query<TPetDocument>(),
	petDescriptionCustomField: Query<TpetDescriptionCustomFieldsDocument>(),
} satisfies Record<CollectionName, any>

export type QueryType = (typeof query)[keyof typeof query]

export default query
