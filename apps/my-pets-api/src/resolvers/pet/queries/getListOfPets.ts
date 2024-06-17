import { ApolloError } from 'apollo-server-express'
import { list, queryField } from 'nexus'
import { Queries } from '../../../lib/appwrite/appwrite'
import { appwriteGraphqlKeys } from '@repo/appwrite-ssr-graphql'
import { omit, pick } from 'lodash'

export default queryField('getListOfPets', {
	type: list('Pet'),
	resolve: async (source, args, ctx, info) => {
		if (!ctx.isAuthed(ctx.user)) throw new ApolloError('User is not authenticated')

		const { collections } = ctx.appwrite

		const pets = (
			await collections.pet.listDocuments([Queries.pet.equal('userId', ctx.user.$id)])
		).documents

		return pets.map((pet: (typeof pets)[number]) => ({
			petId: pet._id,
			...pet,
			...pick(pet, appwriteGraphqlKeys),
			petBirthDate: new Date(pet.petBirthDate),
		}))
	},
})
