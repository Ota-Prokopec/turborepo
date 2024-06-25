import { ApolloError } from 'apollo-server-express'
import { mutationField, stringArg } from 'nexus'
import { Queries } from '../../../lib/appwrite/appwrite'

export default mutationField('removePetIdTranslation', {
	type: 'PetTag',
	args: { petId: stringArg() },
	resolve: async (source, args, ctx, info) => {
		if (!ctx.isAuthed(ctx.user)) throw new ApolloError('User is not authorizated')

		const { collections } = ctx.appwrite

		const getPetIdTranslationDocumentQueries = [
			Queries.petIdTranslation.equal('petId', args.petId),
		]

		const petIdTranslationDocument = await collections.petIdTranslation.getDocument(
			getPetIdTranslationDocumentQueries,
		)

		if (!petIdTranslationDocument)
			throw new ApolloError('Pet id translation with this query does not exist')

		const newpetIdTranslationDocument = await collections.petIdTranslation.updateDocument(
			petIdTranslationDocument._id,
			{
				linkId: args.petId,
			},
		)

		return { linkId: newpetIdTranslationDocument.linkId }
	},
})
