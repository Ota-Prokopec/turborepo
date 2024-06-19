import { Query } from '@repo/appwrite-ssr-graphql'
import collections from './collections'

type CollectionName = keyof ReturnType<typeof collections>
import type {
	TPetDocument,
	TPetIdTranslationDocument,
	TpetDescriptionCustomFieldsDocument,
} from '@repo/my-pets-tstypes'

const query = {
	pet: Query<TPetDocument>(),
	petDescriptionCustomField: Query<TpetDescriptionCustomFieldsDocument>(),
	petIdTranslation: Query<TPetIdTranslationDocument>(),
} satisfies Record<CollectionName, unknown>

export default query
