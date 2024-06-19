import { permissions } from '@repo/appwrite-ssr-graphql'
import { TCreatePetData } from '@repo/my-pets-tstypes'
import { ApolloError } from 'apollo-server-express'
import { mutationField, stringArg } from 'nexus'
import { Appwrite, Queries } from '../../../lib/appwrite/appwrite'
import { buckets } from '../../../lib/cloudinary'

export default mutationField('updatePet', {
	type: 'Boolean',
	args: { petId: stringArg(), data: 'CreatePetInput' },
	resolve: async (source, args, ctx, info) => {
		if (!ctx.isAuthed(ctx.user)) throw new ApolloError('User is not authenticated')

		try {
			return await updatePet(args.data, ctx.appwrite, ctx.user.$id, args.petId)
		} catch (error) {
			throw error
		}
	},
})

export const updatePet = async (
	params: TCreatePetData,
	appwrite: Appwrite,
	userId: string,
	petId: string,
) => {
	const { collections } = appwrite

	const petDocument = await collections.pet.getDocument(petId)

	if (!petDocument) throw new ApolloError('pet document has not been found')

	//
	//
	// !custom descriptions
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
	const creatingCustomFieldsPromise = params.petDescriptionCustomFields.map(
		(field: (typeof params.petDescriptionCustomFields)[number]) => {
			return collections.petDescriptionCustomField.createDocument(
				{
					text: field.text,
					title: field.title,
				},
				permissions.owner(userId),
			)
		},
	)

	//!upload picture
	//*delete pet picture
	const petPictureFileName = buckets.petPictures.getFileNameFromUrl(
		petDocument.petPicture,
	)
	const deletingPetPicturePromise = buckets.petPictures.deleteFiles(petPictureFileName)

	//* creating pet picture
	const creatingPetPicturePromise = buckets.petPictures.uploadBase64(params.petPicture)

	//! update address for pet
	const petAddressUpdatingPromise = collections.petAddress.updateDocument(
		petDocument.petAddressId,
		{
			petAddress: params.petAddress.petAddress,
			latitude: params.petAddress.petAddressCoords[0],
			longitude: params.petAddress.petAddressCoords[1],
		},
	)

	//
	//
	//! Promises
	//* deleting - updating promises
	const [deletedPetPicture, updatedAddress, createdPetPicture, deletedCustomFields] =
		await Promise.all([
			deletingPetPicturePromise,
			petAddressUpdatingPromise,
			creatingPetPicturePromise,
			deletingCustomFieldsPromise,
		])

	//* creating promises
	const [...createdCustomFields] = await Promise.all([...creatingCustomFieldsPromise])

	const updatedPetDocument = await collections.pet.updateDocument(
		petId,
		{
			petPicture: createdPetPicture.secure_url,
			ownerPhoneNumber: params.ownerPhoneNumber,
			petAddressId: updatedAddress._id,
			petAllergens: params.petAllergens,
			petDescriptionCustomFieldIds: createdCustomFields.map((field) => field._id),
			petGender: params.petGender,
			petName: params.petName,
			petTreating: params.petTreating,
			petType: params.petType,
			userId: userId,
			petBirthDate: params.petBirthDate.toISOString(),
			petWeight: params.petWeight,
		},
		permissions.owner(userId),
	)

	return true
}
