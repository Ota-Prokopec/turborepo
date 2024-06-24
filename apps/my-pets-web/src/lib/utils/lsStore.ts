import { browser } from '$app/environment'
import { Locales } from '$src/i18n/i18n-types'
import type { ColorTheme, Coords } from '@repo/ts-types'
import * as lodash from 'lodash'
import { writable } from 'svelte/store'

export type Data = {
	cookieFallback?: Record<string, string> | null
	usersLocation?: Coords | null
	colorTheme?: ColorTheme
	language?: Locales
	temrsAccepted?: boolean
	phoneAuthToken?: { userId: string }
} & Record<string, unknown>

const parseLocalStorageValue = (value: string) => {
	if (value === 'undefined') return undefined
	try {
		return JSON.parse(value)
	} catch {
		return value
	}
}

const data: Data = !browser
	? {}
	: Object.entries<string>(localStorage)
			.map(
				([key, value]) =>
					[key, parseLocalStorageValue(value)] as [keyof Storage, unknown],
			)
			.reduce((res, current) => {
				res[current[0]] = current[1]
				return res
			}, {} as Storage)

export const lsStore = writable(data)

lsStore.subscribe((storeValue) => {
	if (!browser) return
	for (const key of Object.keys(storeValue)) {
		if (browser && storeValue[key] !== localStorage[key])
			localStorage.setItem(key, JSON.stringify(storeValue[key]))
	}
})

export default lsStore
export const typedStore = <Type>() => {
	return writable<Type>(data as Type)
}

export const storage = new Proxy(data, {
	get: (target, prop) => {
		const item = localStorage.getItem(prop.toString())
		const res = item ? parseLocalStorageValue(item) : item
		return res
	},
	set: (target, prop, value) => {
		lsStore.update((currentData) => ({ ...currentData, [prop.toString()]: value }))
		return true
	},
	deleteProperty: (target, propKey) => {
		Reflect.deleteProperty(target, propKey.toString())
		lsStore.update((currentData) => ({ ...lodash.omit(currentData, propKey.toString()) }))
		return false
	},
})
