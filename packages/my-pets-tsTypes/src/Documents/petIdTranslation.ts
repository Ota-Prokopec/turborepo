import { Document, GraphqlDocument } from '@repo/appwrite-types'

export type TPetIdTranslationDocumentCreate = {
	petId: string
	linkId: string
}

export type TPetIdTranslationDocument = Document<TPetIdTranslationDocumentCreate>
export type TPetIdTranslationGraphqlDocument =
	GraphqlDocument<TPetIdTranslationDocumentCreate>
