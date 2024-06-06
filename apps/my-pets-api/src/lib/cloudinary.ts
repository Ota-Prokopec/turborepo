import { ConfigOptions } from 'cloudinary'
import { Cloudinary } from '@repo/cloudinary-server'

import { v2 as cloudinary } from 'cloudinary'

const options = cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
	secure: true,
})

const getBuckets = (options: ConfigOptions, rootFileName: string) => {
	const petPictures = new Cloudinary(options, `${rootFileName}/petPictures`)

	return {
		petPictures,
	}
}

export const buckets = getBuckets(options, process.env.CLOUDINARY_ROOT_FOLDER_NAME ?? '')
