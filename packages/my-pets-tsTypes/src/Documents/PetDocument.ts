import { Document, GraphqlDocument } from '@repo/appwrite-types'

export type TPetDocumentCreate = {
	petName: string
	petAddress: string
	userId: string
	petType: 'dog' | 'cat'
	petAllergens: string[]
	ownerPhoneNumber: string
	petTreating: string
	petGender: 'female' | 'male'
	petPicture: string
	petDescriptionCustomFieldIds: string[]
}

export type TPetDocument = Document<TPetDocumentCreate>
export type TPetGraphqlDocument = GraphqlDocument<TPetDocumentCreate>
