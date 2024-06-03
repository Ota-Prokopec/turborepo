import { ApolloError } from 'apollo-server-express'
import { queryField } from 'nexus'

export default queryField('getAccount', {
	type: 'Account',
	resolve: (source, args, ctx, info) => {
		if (!ctx.isAuthed(ctx.user)) throw new ApolloError('User is not authenticated')

		return { userId: ctx.user.$id }
	},
})
