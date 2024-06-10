import { Base64 } from '@repo/ts-types'
import { Buffer } from 'buffer'
import { isBase64 } from './typeCheking'
import imageCompression from 'browser-image-compression'

export function getParsed(parsing: string) {
	return parsing[0] === '[' || parsing[0] === '{' ? JSON.parse(parsing) : parsing
}
export const uniqueArrayItems = (arr: Array<any>) => {
	return arr.filter((item, i, arr) => {
		if (arr.indexOf(item) === i) return item
	})
}
export function removeItemsFromArray<TArray extends unknown[]>(
	array: TArray,
	...forDeletion: TArray[number][]
) {
	return array.filter((item) => !forDeletion.includes(item)) as TArray
}

export const stringToBlob = (string: string, contentType: string, sliceSize = 512) => {
	const byteCharacters = atob(string)
	const byteArrays: Uint8Array[] = []

	for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		const slice = byteCharacters.slice(offset, offset + sliceSize)

		const byteNumbers = new Array(slice.length)
		for (let i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i)
		}

		const byteArray = new Uint8Array(byteNumbers)
		byteArrays.push(byteArray)
	}

	const blob = new Blob(byteArrays, { type: contentType })
	return blob
}

export const blobTostring = (blob: Blob): Promise<string> => {
	return new Promise((resolve, _) => {
		const reader = new FileReader()
		reader.onload = () => resolve(reader.result as string)
		reader.readAsDataURL(blob)
	})
}

export const countSameItemsInArray = <InputArr extends Array<any>>(
	arr: InputArr,
): Record<string, number> =>
	arr.reduce(
		(cnt, cur) => (
			(cnt[typeof cur === 'string' ? cur : JSON.stringify(cur)] =
				cnt[typeof cur === 'string' ? cur : JSON.stringify(cur)] + 1 || 1),
			cnt
		),
		{},
	)

export const roundNumber = (num: number, digits: number): number => {
	const value = JSON.parse(num.toFixed(digits))
	if (typeof value === 'number') return value
	throw new Error('Input is not a number')
}

export const arrayBufferIntostring = (arrBuff: ArrayBuffer): string =>
	Buffer.from(arrBuff).toString('base64')

export const fileTostring = (file: File): Promise<string> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => resolve(reader.result as string)
		reader.onerror = () => reject(reader.error)
	})
}

export const stringToFile = (string: string, fileName: string) => {
	const buffer = Buffer.from(string, 'base64')
	return new File([buffer], fileName)
}

export const stringToBuffer = (string: string | string) => {
	return Buffer.from(string, 'base64')
}

export const fileToBase64 = (file: File): Promise<Base64> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => resolve(reader.result as Base64)
		reader.onerror = () => reject(reader.error)
	})
}
export const base64ToFile = (base64: Base64, fileName: string, type?: 'image/png') => {
	const buffer = Buffer.from(base64, 'base64')
	return new File([buffer], fileName, { type: type })
}

export const urlToBase64 = async (url: string): Promise<Base64> => {
	return new Promise((res) => {
		var xhr = new XMLHttpRequest()
		xhr.onload = function () {
			var reader = new FileReader()
			reader.onloadend = function () {
				if (!isBase64(reader.result)) throw new Error('result is not type of base64')
				res(reader.result)
			}
			reader.readAsDataURL(xhr.response)
		}
		xhr.open('GET', url)
		xhr.responseType = 'blob'
		xhr.send()
	})
}

export const compressImageFile = async (file: File, maxSizeMB: number): Promise<File> => {
	const maxSizeBytes = maxSizeMB * 1000 * 1000
	const compressedFile = await imageCompression(file, { maxSizeMB: maxSizeMB })

	if (compressedFile.size > maxSizeBytes)
		return compressImageFile(compressedFile, maxSizeMB)
	else return compressedFile
}
