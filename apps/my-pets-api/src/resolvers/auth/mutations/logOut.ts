import { mutationField, queryField } from 'nexus'

export default mutationField('logout', {
	type: 'Boolean',
	resolve: async (source, args, ctx, info) => {
		const { account } = ctx.appwrite

		const { sessionToken: cookie } = await account.logOut()

		ctx.res.clearCookie(cookie.name)

		return true
	},
})
