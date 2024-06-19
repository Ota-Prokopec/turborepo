import type { Types } from '@repo/appwrite-client'
import type {
	TPetDocument,
	TPetDocumentCreate,
	TPetIdTranslationDocument,
	TPetIdTranslationDocumentCreate,
	TpetDescriptionCustomFieldsDocument,
	TpetDescriptionCustomFieldsDocumentCreate,
} from '@repo/my-pets-tstypes'

export default (Collection: Types.Appwrite['Collection']) => {
	return {
		pet: new Collection<TPetDocument, TPetDocumentCreate>('my-pets', 'pet'),
		petDescriptionCustomField: new Collection<
			TpetDescriptionCustomFieldsDocument,
			TpetDescriptionCustomFieldsDocumentCreate
		>('my-pets', 'PetDescriptionCustomFields'),
		petIdTranslation: new Collection<
			TPetIdTranslationDocument,
			TPetIdTranslationDocumentCreate
		>('my-pets', 'petIdTranslation'),
	}
}
