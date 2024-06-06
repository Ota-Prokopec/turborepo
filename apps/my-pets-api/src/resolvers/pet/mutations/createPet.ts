import { appwriteGraphqlKeys, permissions } from '@repo/appwrite-ssr-graphql'
import { ApolloError } from 'apollo-server-express'
import { mutationField } from 'nexus'
import { buckets } from '../../../lib/cloudinary'
import { pick } from 'lodash'

export default mutationField('createPet', {
	type: 'Pet',
	args: { input: 'CreatePetInput' },
	resolve: async (source, args, ctx, info) => {
		if (!ctx.isAuthed(ctx.user)) throw new ApolloError('User is not authenticated')

		const { collections } = ctx.appwrite
		const params = args.input

		const petDescriptionCustomFieldsPromise = params.petDescriptionCustomFields.map(
			(field: (typeof params.petDescriptionCustomFields)[number]) => {
				if (!ctx.isAuthed(ctx.user)) throw new ApolloError('User is not authenticated')

				return collections.petDescriptionCustomField.createDocument(
					{
						text: field.text,
						title: field.title,
					},
					permissions.owner(ctx.user.$id),
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
				petDescriptionCustomFieldIds: petDescriptionCustomFields.map(
					(field) => field._id,
				),
				petGender: params.petGender,
				petName: params.petName,
				petTreating: params.petTreating,
				petType: params.petType,
				userId: ctx.user.$id,
			},
			permissions.owner(ctx.user.$id),
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
			userId: ctx.user.$id,
			petId: petDocument._id,
			...pick(petDocument, appwriteGraphqlKeys),
		}
	},
})
