import { ApolloError } from 'apollo-server-express'
import { mutationField, stringArg } from 'nexus'
import { Appwrite, Queries } from '../../../lib/appwrite/appwrite'
import { buckets } from '../../../lib/cloudinary'

export default mutationField('deletePet', {
	type: 'Boolean',
	args: { petId: stringArg() },
	resolve: async (source, args, ctx, info) => {
		if (!ctx.isAuthed(ctx.user)) throw new ApolloError('User is not authenticated')

		return await deletePet(args.petId, ctx.appwrite)
	},
})

export const deletePet = async (petId: string, appwrite: Appwrite) => {
	const { collections } = appwrite

	const petDocument = await collections.pet.getDocument(petId)

	if (!petDocument) throw new ApolloError('pet document has not been found')

	let deletingCustomFieldsPromise: Promise<string[]> | null = null

	if (petDocument.petDescriptionCustomFieldIds.length) {
		//*delete custom fields
		const deletingQueries = Queries.petDescriptionCustomField.equal(
			'$id',
			petDocument.petDescriptionCustomFieldIds,
		)
		deletingCustomFieldsPromise = collections.petDescriptionCustomField.deleteDocuments([
			deletingQueries,
		])
	}

	//*delete pet picture
	const petPictureFileName = buckets.petPictures.getFileNameFromUrl(
		petDocument.petPicture,
	)

	const deletingPetPicturePromise = buckets.petPictures.deleteFiles(petPictureFileName)

	//*delete pet document
	const deletingPetDocumentPromise = collections.pet.deleteDocument(petDocument._id)

	//*deleting pet id translation
	const deletingPetIdTranslationDocumentPromise =
		collections.petIdTranslation.deleteDocument([
			Queries.petIdTranslation.equal('petId', petId),
		])

	const [
		deletedCustomFields,
		deletedPetPicture,
		deletedPetDocument,
		deletedPetIdTranslationDocument,
	] = await Promise.all([
		deletingCustomFieldsPromise,
		deletingPetPicturePromise,
		deletingPetDocumentPromise,
		deletingPetIdTranslationDocumentPromise,
	])

	return true
}
