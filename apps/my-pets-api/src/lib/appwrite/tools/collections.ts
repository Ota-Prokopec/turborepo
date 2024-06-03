import { Types } from '@repo/appwrite-ssr-graphql'
import { TPetDocumentCreate, TPetGraphqlDocument } from '@repo/my-pets-tstypes'

export type Collections = ReturnType<typeof collectionsAdmin>
export type CollectionName = keyof ReturnType<typeof collectionsAdmin>

type AppwriteSSRReturnTypeClient = ReturnType<Types.AppwriteSSR['none']>
type AppwriteSSRReturnTypeAdmin = ReturnType<Types.AppwriteSSR['setAdmin']>

export const collectionsClient = (
	Collection: AppwriteSSRReturnTypeClient['Collection'],
) => {
	return {
		pet: new Collection<TPetGraphqlDocument, TPetDocumentCreate>(
			'experiences',
			'usersAnswers',
		),
	}
}

export const collectionsAdmin = (
	Collection: AppwriteSSRReturnTypeAdmin['Collection'],
) => {
	return {
		pet: new Collection<TPetGraphqlDocument, TPetDocumentCreate>(
			'experiences',
			'usersAnswers',
		),
	}
}
