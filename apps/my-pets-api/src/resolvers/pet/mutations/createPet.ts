import { ApolloError } from 'apollo-server-express'
import { mutationField } from 'nexus'

export default mutationField('createPet', {
	type: 'Pet',
	args: { input: 'CreatePetInput' },
	resolve: async (source, args, ctx, info) => {
		if (!ctx.isAuthed(ctx.user)) throw new ApolloError('User is not authenticated')

		const { collections } = ctx.appwrite
		const params = args.input

		const petDescriptionCustomFieldsPromise = params.petDescriptionCustomFields.map(
			(field: (typeof params.petDescriptionCustomFields)[number]) => {
				return collections.petDescriptionCustomField.createDocument({
					text: field.text,
					title: field.title,
				})
			},
		)

		const petDescriptionCustomFields = await Promise.all(
			petDescriptionCustomFieldsPromise,
		)

		const petDocument = await collections.pet.createDocument({
			ownerPhoneNumber: params.ownerPhoneNumber,
			petAddress: params.petAddress,
			petAllergens: params.petAllergens,
			petDescriptionCustomFieldIds: petDescriptionCustomFields.map((field) => field._id),
			petGender: params.petGender,
			petName: params.petName,
			petTreating: params.petTreating,
			petType: params.petType,
			userId: ctx.user.$id,
		})

		return {
			ownerPhoneNumber: params.ownerPhoneNumber,
			petAddress: params.petAddress,
			petAllergens: params.petAllergens,
			petDescriptionCustomFieldIds: petDescriptionCustomFields.map((field) => field._id),
			petGender: params.petGender,
			petName: params.petName,
			petTreating: params.petTreating,
			petType: params.petType,
			userId: ctx.user.$id,
			petId: petDocument._id,
		}
	},
})
