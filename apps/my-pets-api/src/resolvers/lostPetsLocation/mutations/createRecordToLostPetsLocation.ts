import { mutationField, stringArg } from 'nexus'
import appwrite from '../../../lib/appwrite/appwrite'
import { permissions } from '@repo/appwrite-ssr-graphql'

export default mutationField('createRecordToLostPetsLocation', {
	type: 'Boolean',
	args: { coords: 'Coords', petId: stringArg(), ownerUserId: stringArg() },
	resolve: async (source, args, ctx, info) => {
		const { collections } = appwrite.setAdmin()

		const res = await collections.lostPetsLocation.createDocument(
			{
				latitude: args.coords[0],
				longitude: args.coords[1],
				petId: args.petId,
			},
			permissions.owner(args.ownerUserId),
		)

		return true
	},
})
