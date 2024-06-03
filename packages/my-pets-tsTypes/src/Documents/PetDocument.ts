import { Document, GraphqlDocument } from '@repo/appwrite-types'

export type TPetDocumentCreate = {
	petName: string
	petAddress: string
	userId: string
}

export type TPetDocument = Document<TPetDocumentCreate>
export type TPetGraphqlDocument = GraphqlDocument<TPetDocumentCreate>
