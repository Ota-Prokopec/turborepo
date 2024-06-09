import { Query } from '@repo/appwrite-ssr-graphql'
import collections from './collections'

type CollectionName = keyof ReturnType<typeof collections>
import type {
	TPetDocument,
	TpetDescriptionCustomFieldsDocument,
} from '@repo/my-pets-tstypes'

const query = {
	pet: Query<TPetDocument>(),
	petDescriptionCustomField: Query<TpetDescriptionCustomFieldsDocument>(),
} satisfies Record<CollectionName, any>

export default query
