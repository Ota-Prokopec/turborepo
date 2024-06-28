declare namespace NodeJS {
	interface ProcessEnv {
		readonly APPWRITE_PROJECT_ID: string
		readonly APPWRITE_ENDPOINT: string
		readonly APPWRITE_API_KEY: string
		readonly CLIENT_HOSTNAME: string
		readonly SERVER_HOSTNAME: string
		readonly MAP_TILER_API_KEY: string
		readonly CLOUDINARY_API_KEY: string
		readonly CLOUDINARY_CLOUD_NAME: string
		readonly CLOUDINARY_API_SECRET_KEY: string
		readonly DEV: string
		readonly SERVER_HOSTNAME_COOKIES: string
		readonly PUBLIC_SESSION_NAME: string
		readonly CLIENT_HOSTNAME_COOKIES: string
		readonly CLOUDINARY_ROOT_FOLDER_NAME: string
		readonly IOS_AUTHORIZATION_HEADER_NAME: string
		readonly PUBLIC_MAX_PICTURE_SIZE_IN_MB: string
		readonly PUBLIC_SERVER_HOSTNAME: string
		readonly PUBLIC_APPWRITE_ENDPOINT
		readonly PUBLIC_APPWRITE_PROJECT_ID: string
		readonly PUBLIC_IOS_AUTHORIZATION_HEADER_NAME: string
		readonly PUBLIC_CLIENT_HOSTNAME: string
		readonly PUBLIC_MAP_TILER_API_KEY: string
		readonly PUBLIC_DEV: string
	}
}
