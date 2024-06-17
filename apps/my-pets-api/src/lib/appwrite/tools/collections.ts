import { Types } from '@repo/appwrite-ssr-graphql'
import {
	TLostPetsLocationDocumentCreate,
	TLostPetsLocationGraphqlDocument,
	TPetAddressDocumentCreate,
	TPetAddressGraphqlDocument,
	TPetDocumentCreate,
	TPetGraphqlDocument,
	TPetIdTranslationDocumentCreate,
	TPetIdTranslationGraphqlDocument,
	TPetMicroChippingDocumentCreate,
	TPetMicroChippingGraphqlDocument,
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
		petIdTranslation: new Collection<
			TPetIdTranslationGraphqlDocument,
			TPetIdTranslationDocumentCreate
		>('my-pets', 'petIdTranslation'),
		petMicrochipping: new Collection<
			TPetMicroChippingGraphqlDocument,
			TPetMicroChippingDocumentCreate
		>('my-pets', 'petMicrochipping'),
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
		petIdTranslation: new Collection<
			TPetIdTranslationGraphqlDocument,
			TPetIdTranslationDocumentCreate
		>('my-pets', 'petIdTranslation'),
		petMicrochipping: new Collection<
			TPetMicroChippingGraphqlDocument,
			TPetMicroChippingDocumentCreate
		>('my-pets', 'petMicrochipping'),
	}
}
