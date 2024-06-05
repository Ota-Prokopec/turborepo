import { ApolloError } from 'apollo-server-express'
import { list, queryField } from 'nexus'
import { Queries } from '../../../lib/appwrite/appwrite'

export default queryField('getListOfPets', {
	type: list('Pet'),
	resolve: async (source, args, ctx, info) => {
		if (!ctx.isAuthed(ctx.user)) throw new ApolloError('User is not authenticated')

		const { collections } = ctx.appwrite

		const pets = (
			await collections.pet.listDocuments([Queries.pet.equal('userId', ctx.user.$id)])
		).documents

		return pets.map((pet: (typeof pets)[number]) => ({
			petAddress: pet.petAddress,
			petId: pet._id,
			petName: pet.petAddress,
			ownerPhoneNumber: pet.ownerPhoneNumber,
			petAllergens: pet.petAllergens,
			petDescriptionCustomFieldIds: pet.petDescriptionCustomFieldIds,
			petGender: pet.petGender,
			petTreating: pet.petTreating,
			petType: pet.petType,
		}))
	},
})
