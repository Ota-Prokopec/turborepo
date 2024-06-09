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

	//*delete custom fields
	const deletingQueries = Queries.petDescriptionCustomField.equal(
		'$id',
		petDocument.petDescriptionCustomFieldIds,
	)
	const deletingCustomFieldsPromise =
		collections.petDescriptionCustomField.deleteDocuments([deletingQueries])

	//*delete pet picture
	const petPictureFileName = buckets.petPictures.getFileNameFromUrl(
		petDocument.petPicture,
	)
	const deletingPetPicturePromise = buckets.petPictures.deleteFiles(petPictureFileName)

	//*delete pet document
	const deletingPetDocumentPromise = collections.pet.deleteDocument(petDocument._id)

	const [deletedCustomFields, deletedPetPicture, deletedPetDocument] = await Promise.all([
		deletingCustomFieldsPromise,
		deletingPetPicturePromise,
		deletingPetDocumentPromise,
	])

	return true
}
