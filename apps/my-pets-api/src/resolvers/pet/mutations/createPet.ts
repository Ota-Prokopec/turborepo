import { appwriteGraphqlKeys, permissions } from '@repo/appwrite-ssr-graphql'
import { ApolloError } from 'apollo-server-express'
import { mutationField } from 'nexus'
import { buckets } from '../../../lib/cloudinary'
import { pick } from 'lodash'
import { TCreatePetData, TPetData } from '@repo/my-pets-tstypes'
import { Appwrite } from '../../../lib/appwrite/appwrite'
import { ID } from 'appwrite'

export default mutationField('createPet', {
	type: 'Boolean',
	args: { input: 'CreatePetInput' },
	resolve: async (source, args, ctx, info) => {
		if (!ctx.isAuthed(ctx.user)) throw new ApolloError('User is not authenticated')

		const params = args.input

		await createPet(params, ctx.appwrite, ctx.user.$id)

		return true
	},
})

export const createPet = async (
	params: TCreatePetData,
	appwrite: Appwrite,
	userId: string,
	petDocumentId: string = ID.unique(),
) => {
	const { collections } = appwrite

	// custom descriptions
	const petDescriptionCustomFieldsPromise = params.petDescriptionCustomFields.map(
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

	//upload picture
	const uploadPetPictureResponsePromise = buckets.petPictures.uploadBase64(
		params.petPicture,
	)

	// create address for pet
	const petAddressCreatingPromise = collections.petAddress.createDocument({
		petAddress: params.petAddress.petAddress,
		latitude: params.petAddress.petAddressCoords[0],
		longitude: params.petAddress.petAddressCoords[1],
	})

	const [uploadPetPictureResponse, petAddressDocument, ...petDescriptionCustomFields] =
		await Promise.all([
			uploadPetPictureResponsePromise,
			petAddressCreatingPromise,
			...petDescriptionCustomFieldsPromise,
		])

	const petDocument = await collections.pet.createDocument(
		{
			petPicture: uploadPetPictureResponse.secure_url,
			ownerPhoneNumber: params.ownerPhoneNumber,
			petAddressId: petAddressDocument._id,
			petAllergens: params.petAllergens,
			petDescriptionCustomFieldIds: petDescriptionCustomFields.map((field) => field._id),
			petGender: params.petGender,
			petName: params.petName,
			petTreating: params.petTreating,
			petType: params.petType,
			userId: userId,
			petBirthDate: params.petBirthDate.toISOString(),
			petWeight: params.petWeight,
		},
		permissions.owner(userId),
		petDocumentId,
	)

	const linkId = await collections.petIdTranslation.getDocumentsCount()

	const petIdTranslationDocument = await collections.petIdTranslation.createDocument(
		{
			linkId: linkId.toString(),
			petId: petDocument._id,
		},
		permissions.owner(userId),
	)

	return {
		ownerPhoneNumber: params.ownerPhoneNumber,
		petAddress: params.petAddress,
		petPicture: petDocument.petPicture,
		petAllergens: params.petAllergens,
		petDescriptionCustomFieldIds: petDescriptionCustomFields.map((field) => field._id),
		petGender: params.petGender,
		petName: params.petName,
		petTreating: params.petTreating,
		petType: params.petType,
		userId: userId,
		petAddressId: petAddressDocument._id,
		petId: petDocument._id,
		petBirthDate: petDocument.petBirthDate,
		...pick(petDocument, appwriteGraphqlKeys),
	}
}
