import { permissions } from '@repo/appwrite-ssr-graphql'
import { ApolloError } from 'apollo-server-express'
import { mutationField } from 'nexus'
import appwrite, { Queries } from '../../../lib/appwrite/appwrite'
import { Query } from 'node-appwrite'

export default mutationField('updatePetIdTranlation', {
	type: 'Boolean',
	args: { input: 'UpdatePetIdTranslationInput' },
	resolve: async (source, args, ctx, info) => {
		if (!ctx.isAuthed(ctx.user)) throw new ApolloError('User is not authorizated')

		const params = args.input

		const { collections: adminColletion } = appwrite.setAdmin()

		const passCodeDocument = await adminColletion.petIdTranslationPassCode.getDocument([
			Queries.petIdTranslationPassCode.equal('passCode', params.passCode, 'admin'),
		])

		if (!passCodeDocument) throw new ApolloError('Passcode is wrong')

		const petIdTranslationDocument = await adminColletion.petIdTranslation.getDocument([
			Queries.petIdTranslation.equal('petId', params.petId, 'admin'),
		])

		if (!petIdTranslationDocument)
			throw new ApolloError('Pet id translation document was not found')

		await adminColletion.petIdTranslation.updateDocument(
			petIdTranslationDocument._id,
			{
				linkId: passCodeDocument.petLinkId,
			},
			permissions.owner(ctx.user.$id),
		)

		return true
	},
})
