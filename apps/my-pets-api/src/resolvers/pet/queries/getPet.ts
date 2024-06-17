import { ApolloError } from 'apollo-server-express'
import { queryField, stringArg } from 'nexus'
import { Queries } from '../../../lib/appwrite/appwrite'

export default queryField('getPet', {
	type: 'Pet',
	args: { petLinkId: stringArg() },
	resolve: async (source, args, ctx, info) => {
		const { collections } = ctx.appwrite

		const petLinkIdDocument = await collections.petIdTranslation.getDocument([
			Queries.petIdTranslation.equal('linkId', args.petLinkId),
		])

		if (!petLinkIdDocument) throw new ApolloError('pet link id document does not exist')

		const queries = Queries.pet.equal('$id', petLinkIdDocument?.petId)

		const pet = await collections.pet.getDocument([queries])

		if (!pet) throw new ApolloError('pet was not found')

		return { ...pet, petBirthDate: new Date(pet.petBirthDate) }
	},
})
