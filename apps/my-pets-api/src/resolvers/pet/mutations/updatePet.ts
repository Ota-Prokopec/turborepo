import { ApolloError } from 'apollo-server-express'
import { mutationField, stringArg } from 'nexus'
import { deletePet } from './deletePet'
import { createPet } from './createPet'

export default mutationField('updatePet', {
	type: 'Pet',
	args: { petId: stringArg(), data: 'CreatePetInput' },
	resolve: async (source, args, ctx, info) => {
		if (!ctx.isAuthed(ctx.user)) throw new ApolloError('User is not authenticated')

		await deletePet(args.petId, ctx.appwrite)

		return await createPet(args.data, ctx.appwrite, ctx.user.$id)
	},
})
