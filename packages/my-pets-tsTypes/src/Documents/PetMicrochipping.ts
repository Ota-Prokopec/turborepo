import { Document, GraphqlDocument } from '@repo/appwrite-types'
import { z } from 'zod'

export const petMicrochippingZodSchema = z.object({
	dateOfChipping: z.date(),
	locationOfChip: z.string(),
})

export type TPetMicroChippingDocumentCreate = Omit<
	z.infer<typeof petMicrochippingZodSchema>,
	'dateOfChipping'
> & { dateOfChipping: string }

export type TPetMicroChippingDocument = Document<TPetMicroChippingDocumentCreate>
export type TPetMicroChippingGraphqlDocument =
	GraphqlDocument<TPetMicroChippingDocumentCreate>
