import { Document, GraphqlDocument } from '@repo/appwrite-types'

export type TpetDescriptionCustomFieldsDocumentCreate = {
	title: string
	text: string
}

export type TpetDescriptionCustomFieldsDocument =
	Document<TpetDescriptionCustomFieldsDocumentCreate>
export type TpetDescriptionCustomFieldsGraphqlDocument =
	GraphqlDocument<TpetDescriptionCustomFieldsDocumentCreate>
