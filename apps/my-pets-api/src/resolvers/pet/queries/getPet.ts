import { ApolloError } from 'apollo-server-express'
import { queryField, stringArg } from 'nexus'
import { Queries } from '../../../lib/appwrite/appwrite'

export default queryField('getPet', {
	type: 'Pet',
	args: { petId: stringArg() },
	resolve: async (source, args, ctx, info) => {
		if (!ctx.isAuthed(ctx.user)) throw new ApolloError('User is not authenticated')

		const { collections } = ctx.appwrite

		const queries = Queries.pet.equal('$id', args.petId)

		const pet = await collections.pet.getDocument([queries])

		if (!pet) throw new ApolloError('pet was not found')

		return pet
	},
})
