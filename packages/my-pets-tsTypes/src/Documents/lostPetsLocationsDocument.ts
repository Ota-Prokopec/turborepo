import { Document, GraphqlDocument } from '@repo/appwrite-types'

export type TLostPetsLocationDocumentCreate = {
	latitude: number
	longitude: number
	petId: string
}

export type TLostPetsLocationDocument = Document<TLostPetsLocationDocumentCreate>
export type TLostPetsLocationGraphqlDocument =
	GraphqlDocument<TLostPetsLocationDocumentCreate>
