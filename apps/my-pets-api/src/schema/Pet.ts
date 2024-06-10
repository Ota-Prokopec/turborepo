import { objectType, list } from 'nexus'
import { Queries } from '../lib/appwrite/appwrite'
import { ApolloError } from 'apollo-server-express'

export default objectType({
	name: 'Pet',
	definition: (t) => {
		t.string('_createdAt')
		t.string('_updatedAt')
		t.string('_collectionId')
		t.string('_id')
		t.list.string('_permissions')
		t.string('_databaseId')
		t.string('userId')
		t.string('petName')
		t.field('petType', { type: 'PetType' })
		t.list.string('petAllergens')
		t.string('ownerPhoneNumber')
		t.string('petTreating')
		t.string('petAddressId')
		t.string('petPicture', { description: 'Pet Picture is pet pictures URL' })
		t.list.string('petDescriptionCustomFieldIds')
		t.field('petGender', { type: 'PetGender' }),
			t.field('petDescriptionCustomFields', {
				type: list('PetDescriptionCustomField'),
				resolve: async (source, args, ctx) => {
					const { collections } = ctx.appwrite
					if (source.petDescriptionCustomFieldIds.length === 0) return []
					const query = Queries.petDescriptionCustomField.equal(
						'$id',
						source.petDescriptionCustomFieldIds,
					)
					const res = await collections.petDescriptionCustomField.listDocuments([query])
					return res.documents
				},
			})
		t.field('petAddress', {
			type: 'PetAddress',
			resolve: async (source, args, ctx) => {
				const { collections } = ctx.appwrite
				const addressDocument = await collections.petAddress.getDocument(
					source.petAddressId,
				)
				if (!addressDocument)
					throw new ApolloError('address that suits to the pet was not found')
				return {
					petAddress: addressDocument.petAddress,
					petAddressCoords: [addressDocument.latitude, addressDocument.longitude],
				}
			},
		})
	},
})
