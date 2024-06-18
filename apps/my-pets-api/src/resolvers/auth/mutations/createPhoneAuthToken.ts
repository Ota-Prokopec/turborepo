import { mutationField, queryField } from 'nexus'
import appwrite from '../../../lib/appwrite/appwrite'

export default mutationField('createPhoneAuthToken', {
	type: 'Boolean',
	resolve: async (source, args, ctx, info) => {
		const { account } = ctx.appwrite

		return true
	},
})

appwrite.setAdmin().users.updatePhone()
