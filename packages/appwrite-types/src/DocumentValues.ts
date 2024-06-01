export type AppwriteDocumentValues =
	| string
	| number
	| string[]
	| number[]
	| boolean
	| URL
	| undefined
	| null
	| any[]
	| Record<
			string,
			string | number | string[] | number[] | boolean | URL | undefined | null
	  >
