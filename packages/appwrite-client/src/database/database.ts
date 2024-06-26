import * as permissionslib from '@repo/appwrite-permissions'
import { Client, Databases, ID, Models, Query, RealtimeResponseEvent } from 'appwrite'
import type { AppwriteDocumentValues, Document } from '@repo/appwrite-types'

const isArrayString = (permissions: unknown[]): permissions is string[] => {
	return permissions.every((permission) => typeof permission === 'string')
}

const convertObjectInfoArray = (data: Record<string, string>): string[] => {
	return Object.values(data)
}

export default (client: Client) => {
	const databases = new Databases(client)

	return class Collection<
		TDocumentGet extends Document<{}>,
		TDocumentCreate extends Record<string, AppwriteDocumentValues>,
	> {
		constructor(
			public databaseId: string,
			public collectionId: string,
		) {
			this.databaseId = databaseId
			this.collectionId = collectionId
		}

		//create document with node-appwrite
		createDocument(
			data: TDocumentCreate,
			permissions?: Models.User<{}>[],
			id?: string,
		): Promise<TDocumentGet>
		createDocument(
			data: TDocumentCreate,
			permissions?: string[],
			id?: string,
		): Promise<TDocumentGet>
		createDocument(
			data: TDocumentCreate,
			permissions: string[] | undefined | Models.User<{}>[] = undefined,
			id: string = ID.unique(),
		): Promise<TDocumentGet> {
			try {
				if ((permissions && isArrayString(permissions)) || !permissions) {
					return databases.createDocument(
						this.databaseId,
						this.collectionId,
						id,
						//@ts-ignore
						data,
						permissions,
					)
				} else
					return databases.createDocument(
						this.databaseId,
						this.collectionId,
						id,
						//@ts-ignore

						data,
						permissionslib.owner(...permissions.map((user) => user.$id)),
					)
			} catch (error) {
				console.log(
					`Error:${error} databaseId: ${this.databaseId} collectionId: ${this.collectionId}`,
				)
				throw error
			}
		}

		//update document with node-appwrite

		async updateDocument<TData extends TDocumentGet>(
			documentId: string,
			data: Partial<TDocumentCreate> | {} | undefined,
			permissions?: string[] | undefined,
		): Promise<TDocumentGet>
		async updateDocument<TData extends TDocumentGet>(
			document: Document<{}>,
			data: Partial<TDocumentCreate> | {} | undefined,
			permissions?: string[] | undefined,
		): Promise<TDocumentGet>
		async updateDocument<TData extends TDocumentGet>(
			param: string | Document<{}>,
			data: Partial<TDocumentCreate> | {} | undefined,
			permissions: string[] | undefined = undefined,
		): Promise<TDocumentGet> {
			if (!Array.isArray(permissions) && permissions)
				permissions = convertObjectInfoArray(permissions)
			return databases.updateDocument(
				this.databaseId,
				this.collectionId,
				typeof param === 'string' ? param : param.$id,
				data ?? {},
				permissions,
			)
		}

		//update document with node-appwrite
		updatePermissions<TData extends TDocumentGet>(
			documentId: string,
			permissions: string[] | undefined,
		): Promise<TDocumentGet>
		updatePermissions<TData extends TDocumentGet>(
			document: Document<{}>,
			permissions: string[] | undefined,
		): Promise<TDocumentGet>
		updatePermissions<TData extends TDocumentGet>(
			documentId: string | Document<{}>,
			permissions: string[] | undefined = undefined,
		): Promise<TDocumentGet> {
			if (!Array.isArray(permissions) && permissions)
				permissions = convertObjectInfoArray(permissions)
			return databases.updateDocument(
				this.databaseId,
				this.collectionId,
				typeof documentId === 'string' ? documentId : documentId.$id,
				{},
				permissions,
			)
		}

		//delete document with node-appwrite
		async deleteDocument(filters: string[]): Promise<string>
		async deleteDocument(document: TDocumentGet): Promise<string>
		async deleteDocument(documentId: string): Promise<string>
		async deleteDocument(param: string | TDocumentGet | string[]) {
			//	console.log(Array.isArray(param) && isArrayString(param))

			if (typeof param === 'string') {
				return databases.deleteDocument(this.databaseId, this.collectionId, param)
			} else if (Array.isArray(param) && isArrayString(param)) {
				const document = await this.getDocument(param)
				if (!document)
					throw new Error(
						'document that is requeste was not found, check permissions first',
					)
				return await this.deleteDocument(document.$id)
			} //else if ((param as TDocumentGet) && !Array.isArray(param)) {
			return databases.deleteDocument(this.databaseId, this.collectionId, param.$id)
		}

		//delete documents with node-appwrite
		async deleteDocuments(filters?: string[]): Promise<string[]> {
			const { documents } = await this.listDocuments(filters)
			if (documents.length === 0) throw new TypeError('No document found to delete')
			return await Promise.all(
				documents.map((document) => this.deleteDocument(document.$id)),
			)
		}

		//get document with node-appwrite
		async getDocument(documentId: string): Promise<TDocumentGet | null>
		async getDocument(queries: string[]): Promise<TDocumentGet | null>
		async getDocument(params: string | string[]): Promise<TDocumentGet | null> {
			let data: TDocumentGet | null
			if (typeof params === 'string') {
				try {
					data = await databases.getDocument<TDocumentGet>(
						this.databaseId,
						this.collectionId,
						params,
					)
				} catch (error) {
					data = null
				}
			} else {
				const list = await this.listDocuments<TDocumentGet>(params)

				if (list.total > 1)
					throw new Error(
						'Multiple documents found, use listDocuments instead or try to be more specific in your query',
					)
				data = list.documents[0] || null
			}
			if (typeof data?.$permissions === 'object' && !Array.isArray(data?.$permissions))
				data.$permissions = convertObjectInfoArray(data.$permissions)

			return data
		}

		//list documents with node-appwrite
		async listDocuments<TData extends TDocumentGet>(
			filters: string[] = [],
			offset = 0,
			limit = -1,
			orderType: 'ASC' | 'DESC' | null = null,
		) {
			if (Number.isInteger(offset) === false)
				throw new TypeError('offset must be a non-negative integer')
			if (offset < 0) throw new TypeError('limit must be a non-negative integer')
			if (Number.isInteger(limit) === false)
				throw new TypeError('limit must be a non-negative integer or -1')
			if (limit < -1) throw new TypeError('limit must be a non-negative integer or -1')
			if (filters.some((filter) => (filter.includes('[]') ? true : false))) {
				throw new TypeError('filters must include least one item in Query')
			}

			const queries = [...filters]
			if (offset > 0) queries.push(Query.offset(offset))
			if (limit !== -1) queries.push(Query.limit(limit))
			if (orderType !== null)
				queries.push(orderType === 'ASC' ? Query.orderAsc('') : Query.orderDesc(''))

			const data = await databases.listDocuments<TData>(
				this.databaseId,
				this.collectionId,
				queries,
			)

			data.documents = data.documents.map((document) => ({
				...document,
				$pemissions: Array.isArray(document.$permissions)
					? document.$permissions
					: convertObjectInfoArray(document.$permissions),
			}))
			return data
		}
		subscribeDocument(
			documentId: string,
			callback: (data: RealtimeResponseEvent<TDocumentGet>) => void,
		) {
			client.subscribe(
				`databases.${this.databaseId}.collections.${this.collectionId}.documents.${documentId}`,
				(response: RealtimeResponseEvent<TDocumentGet>) => {
					callback(response)
				},
			)
		}

		listenUpdate(documentId: string, callback: (data: TDocumentGet) => void) {
			this.subscribeDocument(documentId, (response) => {
				if (
					response.events.includes(
						`databases.${this.databaseId}.collections.${this.collectionId}.documents.${documentId}.update`,
					)
				) {
					callback(response.payload)
				}
			})
		}
	}
}
