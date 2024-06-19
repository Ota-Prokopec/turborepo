import { Query as QueryClient } from 'appwrite'
import { Query as QueryAdmin } from 'node-appwrite'

export default <DatabaseType extends Record<string, any>>() => {
	type Key = keyof DatabaseType

	return {
		equal: <TKey extends Key>(
			attribute: TKey,
			value: DatabaseType[TKey] | DatabaseType[TKey][],
			type: 'client' | 'admin' = 'client',
		) =>
			(type === 'client' ? QueryClient : QueryAdmin).equal(attribute.toString(), value),

		between: (
			attribute: Key,
			start: number,
			end: number,
			type: 'client' | 'admin' = 'client',
		) =>
			(type === 'client' ? QueryClient : QueryAdmin).between(
				attribute.toString(),
				start,
				end,
			),

		cursorAfter: (documentId: string, type: 'client' | 'admin' = 'client') =>
			(type === 'client' ? QueryClient : QueryAdmin).cursorAfter(documentId),

		cursorBefore: (documentId: string, type: 'client' | 'admin' = 'client') =>
			(type === 'client' ? QueryClient : QueryAdmin).cursorBefore(documentId),

		endsWith: <TKey extends Key>(
			attribute: Key,
			value: DatabaseType[TKey],
			type: 'client' | 'admin' = 'client',
		) =>
			(type === 'client' ? QueryClient : QueryAdmin).endsWith(
				attribute.toString(),
				value,
			),

		greaterThan: <TKey extends Key>(
			attribute: Key,
			value: DatabaseType[TKey],
			type: 'client' | 'admin' = 'client',
		) =>
			(type === 'client' ? QueryClient : QueryAdmin).greaterThan(
				attribute.toString(),
				value,
			),

		greaterThanEqual: <TKey extends Key>(
			attribute: Key,
			value: DatabaseType[TKey],
			type: 'client' | 'admin' = 'client',
		) =>
			(type === 'client' ? QueryClient : QueryAdmin).greaterThanEqual(
				attribute.toString(),
				value,
			),

		isNotNull: (attribute: Key, type: 'client' | 'admin' = 'client') =>
			(type === 'client' ? QueryClient : QueryAdmin).isNotNull(attribute.toString()),
		isNull: (attribute: Key, type: 'client' | 'admin' = 'client') =>
			(type === 'client' ? QueryClient : QueryAdmin).isNull(attribute.toString()),

		lessThan: <TKey extends Key>(
			attribute: Key,
			value: DatabaseType[TKey],
			type: 'client' | 'admin' = 'client',
		) =>
			(type === 'client' ? QueryClient : QueryAdmin).lessThan(
				attribute.toString(),
				value,
			),

		lessThanEqual: <TKey extends Key>(
			attribute: Key,
			value: DatabaseType[TKey],
			type: 'client' | 'admin' = 'client',
		) =>
			(type === 'client' ? QueryClient : QueryAdmin).lessThanEqual(
				attribute.toString(),
				value,
			),

		limit: (limit: number, type: 'client' | 'admin' = 'client') =>
			(type === 'client' ? QueryClient : QueryAdmin).limit(limit),

		notEqual: <TKey extends Key>(
			attribute: Key,
			value: DatabaseType[TKey],
			type: 'client' | 'admin' = 'client',
		) =>
			(type === 'client' ? QueryClient : QueryAdmin).notEqual(
				attribute.toString(),
				value,
			),

		offset: (offset: number, type: 'client' | 'admin' = 'client') =>
			(type === 'client' ? QueryClient : QueryAdmin).offset(offset),

		orderAsc: (attribute: Key, type: 'client' | 'admin' = 'client') =>
			(type === 'client' ? QueryClient : QueryAdmin).orderAsc(attribute.toString()),

		orderDesc: (attribute: Key, type: 'client' | 'admin' = 'client') =>
			(type === 'client' ? QueryClient : QueryAdmin).orderDesc(attribute.toString()),

		search: (attribute: Key, value: string, type: 'client' | 'admin' = 'client') =>
			(type === 'client' ? QueryClient : QueryAdmin).search(attribute.toString(), value),

		select: (attributes: Key[], type: 'client' | 'admin' = 'client') =>
			(type === 'client' ? QueryClient : QueryAdmin).select(
				attributes.map((att) => att.toString()),
			),

		startsWith: <TKey extends Key>(
			attribute: Key,
			value: DatabaseType[TKey],
			type: 'client' | 'admin' = 'client',
		) =>
			(type === 'client' ? QueryClient : QueryAdmin).startsWith(
				attribute.toString(),
				value,
			),

		noLimit: (type: 'client' | 'admin' = 'client') =>
			(type === 'client' ? QueryClient : QueryAdmin).limit(9223372036854775),
	}
}
