import { Query } from '@repo/appwrite-ssr-graphql'
import { CollectionName } from './collections'
import {
	TLostPetsLocationDocument,
	TPetAddressDocument,
	TPetDocument,
	TPetIdTranslationDocument,
	TPetMicroChippingDocument,
	TpetDescriptionCustomFieldsDocument,
} from '@repo/my-pets-tstypes'

const query = {
	pet: Query<TPetDocument>(),
	petDescriptionCustomField: Query<TpetDescriptionCustomFieldsDocument>(),
	petAddress: Query<TPetAddressDocument>(),
	lostPetsLocation: Query<TLostPetsLocationDocument>(),
	petIdTranslation: Query<TPetIdTranslationDocument>(),
	petMicrochipping: Query<TPetMicroChippingDocument>(),
} satisfies Record<CollectionName, any>

export type QueryType = (typeof query)[keyof typeof query]

export default query
