import { Models } from 'appwrite'
import { z } from 'zod'

// Basic Appwrite

export const zodDocument = z.object({
	$id: z.string(),
	$collectionId: z.string(),
	$databaseId: z.string(),
	$createdAt: z.string(),
	$updatedAt: z.string(),
	$permissions: z.string().array(),
})
export type DocumentSkeleton = z.infer<typeof zodDocument>

export type Document<T extends Partial<DocumentSkeleton> & Record<string, unknown>> = {
	[Key in keyof T]: T[Key] extends Record<string, unknown> ? Document<T[Key]> : T[Key]
} & DocumentSkeleton

export type OmitDocument<T> = Omit<
	T,
	'$permissions' | '$id' | '$collectionId' | '$createdAt' | '$databaseId' | '$updatedAt'
>
export type OmitDocumentDeep<T> = OmitDocument<{
	[Key in keyof T]: T extends object ? OmitDocumentDeep<T[Key]> : T[Key]
}>

//
//
//
// Graphql Appwrite

export const zodGraphqlDocument = z.object({
	_id: z.string(),
	_collectionId: z.string(),
	_databaseId: z.string(),
	_createdAt: z.string(),
	_updatedAt: z.string(),
	_permissions: z.string().array(),
})
export type GraphqlDocumentSkeleton = z.infer<typeof zodGraphqlDocument>
/*
export type GraphqlDocument<T extends Partial<GraphqlDocumentSkeleton> & object> = {
	[Key in keyof T]: T[Key] extends Record<string, unknown>
		? GraphqlDocument<T[Key]>
		: T[Key]
} & GraphqlDocumentSkeleton
*/

export type GraphqlDocument<T extends Partial<GraphqlDocumentSkeleton> & object> = T &
	GraphqlDocumentSkeleton

export type AppwriteDocToGraphqlDoc<T extends Models.Document> = GraphqlDocument<
	OmitDocument<T>
>
