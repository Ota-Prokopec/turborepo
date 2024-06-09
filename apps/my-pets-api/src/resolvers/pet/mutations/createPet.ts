import { appwriteGraphqlKeys, permissions } from '@repo/appwrite-ssr-graphql'
import { ApolloError } from 'apollo-server-express'
import { mutationField } from 'nexus'
import { buckets } from '../../../lib/cloudinary'
import { pick } from 'lodash'
import { TCreatePetData } from '@repo/my-pets-tstypes'
import { Appwrite } from '../../../lib/appwrite/appwrite'
import { ID } from 'appwrite'

export default mutationField('createPet', {
	type: 'Pet',
	args: { input: 'CreatePetInput' },
	resolve: async (source, args, ctx, info) => {
		if (!ctx.isAuthed(ctx.user)) throw new ApolloError('User is not authenticated')

		const params = args.input

		return await createPet(params, ctx.appwrite, ctx.user.$id)
	},
})

export const createPet = async (
	params: TCreatePetData,
	appwrite: Appwrite,
	userId: string,
	petDocumentId: string = ID.unique(),
) => {
	const { collections } = appwrite

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

	const uploadPetPictureResponsePromise = buckets.petPictures.uploadBase64(
		params.petPicture,
	)

	const [uploadPetPictureResponse, ...petDescriptionCustomFields] = await Promise.all([
		uploadPetPictureResponsePromise,
		...petDescriptionCustomFieldsPromise,
	])

	const petDocument = await collections.pet.createDocument(
		{
			petPicture: uploadPetPictureResponse.secure_url,
			ownerPhoneNumber: params.ownerPhoneNumber,
			petAddress: params.petAddress,
			petAllergens: params.petAllergens,
			petDescriptionCustomFieldIds: petDescriptionCustomFields.map((field) => field._id),
			petGender: params.petGender,
			petName: params.petName,
			petTreating: params.petTreating,
			petType: params.petType,
			userId: userId,
		},
		permissions.owner(userId),
		petDocumentId,
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
		petId: petDocument._id,
		...pick(petDocument, appwriteGraphqlKeys),
	}
}
