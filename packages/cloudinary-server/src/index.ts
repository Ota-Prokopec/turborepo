import { Base64 } from '@repo/ts-types'
import { v2 as cloudinary, ConfigOptions, UploadApiResponse } from 'cloudinary'

export class Cloudinary {
	constructor(
		public options: ConfigOptions,
		public folder: string,
	) {
		this.options = options
		this.folder = folder
	}

	async uploadBase64(base64: Base64 | string): Promise<UploadApiResponse> {
		const file = await cloudinary.uploader.upload(base64, {
			...this.options,
			folder: this.folder,
		})
		return file
	}
	async deleteFiles(...files: string[]) {
		return await cloudinary.api.delete_resources(
			files.map((file) => `${this.folder}/${file}`),
		)
	}

	getFileNameFromUrl(url: URL | string) {
		const splits = url.toString().split('/')
		const fileSplit = splits[splits.length - 1]
		if (!fileSplit) throw new Error('Invalid URL - not able to be splitted')
		const file = fileSplit.split('.').at(0)
		if (!file) throw new Error('Invalid URL - not able to find the file name')
		return file
	}
}
