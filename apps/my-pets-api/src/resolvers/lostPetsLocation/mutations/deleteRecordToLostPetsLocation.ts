import { mutationField, stringArg } from 'nexus'

export default mutationField('deleteRecordToLostPetsLocation', {
	type: 'Boolean',
	args: { documentId: stringArg() },
	resolve: async (source, args, ctx, info) => {
		const { collections } = ctx.appwrite

		const res = collections.lostPetsLocation.deleteDocument(args.documentId)

		return true
	},
})
