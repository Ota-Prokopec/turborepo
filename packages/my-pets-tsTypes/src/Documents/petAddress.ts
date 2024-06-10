import { Document, GraphqlDocument } from '@repo/appwrite-types'
import { CoordsForDocument } from '@repo/ts-types'

export type TPetAddressDocumentCreate = {
	petAddress: string
} & CoordsForDocument

export type TPetAddressDocument = Document<TPetAddressDocumentCreate>
export type TPetAddressGraphqlDocument = GraphqlDocument<TPetAddressDocumentCreate>
