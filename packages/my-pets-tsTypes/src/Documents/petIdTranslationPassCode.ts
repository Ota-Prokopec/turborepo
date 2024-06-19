import { Document, GraphqlDocument } from '@repo/appwrite-types'

export type TPetIdTranslationPassCodeDocumentCreate = {
	passCode: string
	petLinkId: string
}

export type TPetIdTranslationPassCodeDocument =
	Document<TPetIdTranslationPassCodeDocumentCreate>
export type TPetIdTranslationPassCodeGraphqlDocument =
	GraphqlDocument<TPetIdTranslationPassCodeDocumentCreate>
