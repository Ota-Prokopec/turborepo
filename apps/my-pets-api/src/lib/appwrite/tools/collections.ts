import { Types } from '@repo/appwrite-ssr-graphql'
import {
	TLostPetsLocationDocumentCreate,
	TLostPetsLocationGraphqlDocument,
	TPetAddressDocumentCreate,
	TPetAddressGraphqlDocument,
	TPetDocumentCreate,
	TPetGraphqlDocument,
	TpetDescriptionCustomFieldsDocumentCreate,
	TpetDescriptionCustomFieldsGraphqlDocument,
} from '@repo/my-pets-tstypes'

export type Collections = ReturnType<typeof collectionsAdmin>
export type CollectionName = keyof ReturnType<typeof collectionsAdmin>

type AppwriteSSRReturnTypeClient = ReturnType<Types.AppwriteSSR['none']>
type AppwriteSSRReturnTypeAdmin = ReturnType<Types.AppwriteSSR['setAdmin']>

export const collectionsClient = (
	Collection: AppwriteSSRReturnTypeClient['Collection'],
) => {
	return {
		pet: new Collection<TPetGraphqlDocument, TPetDocumentCreate>('my-pets', 'pet'),
		petDescriptionCustomField: new Collection<
			TpetDescriptionCustomFieldsGraphqlDocument,
			TpetDescriptionCustomFieldsDocumentCreate
		>('my-pets', 'PetDescriptionCustomFields'),
		petAddress: new Collection<TPetAddressGraphqlDocument, TPetAddressDocumentCreate>(
			'my-pets',
			'petAddress',
		),
		lostPetsLocation: new Collection<
			TLostPetsLocationGraphqlDocument,
			TLostPetsLocationDocumentCreate
		>('my-pets', 'lostPetsLocations'),
	}
}

export const collectionsAdmin = (
	Collection: AppwriteSSRReturnTypeAdmin['Collection'],
) => {
	return {
		pet: new Collection<TPetGraphqlDocument, TPetDocumentCreate>('my-pets', 'pet'),
		petDescriptionCustomField: new Collection<
			TpetDescriptionCustomFieldsGraphqlDocument,
			TpetDescriptionCustomFieldsDocumentCreate
		>('my-pets', 'PetDescriptionCustomFields'),
		petAddress: new Collection<TPetAddressGraphqlDocument, TPetAddressDocumentCreate>(
			'my-pets',
			'petAddress',
		),
		lostPetsLocation: new Collection<
			TLostPetsLocationGraphqlDocument,
			TLostPetsLocationDocumentCreate
		>('my-pets', 'lostPetsLocations'),
	}
}
