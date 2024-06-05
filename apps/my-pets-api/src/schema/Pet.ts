import { objectType, list } from 'nexus'
import { Queries } from '../lib/appwrite/appwrite'

export default objectType({
	name: 'Pet',
	definition: (t) => {
		t.string('petAddress')
		t.string('petName')
		t.string('petId')
		t.field('petType', { type: 'PetType' })
		t.list.string('petAllergens')
		t.string('ownerPhoneNumber')
		t.string('petTreating')
		t.list.string('petDescriptionCustomFieldIds')
		t.field('petGender', { type: 'PetGender' }),
			t.field('petDescriptionCustomFields', {
				type: list('PetDescriptionCustomField'),
				resolve: async (source, args, ctx) => {
					const { collections } = ctx.appwrite
					const query = Queries.petDescriptionCustomField.equal(
						'$id',
						source.petDescriptionCustomFieldIds,
					)
					const res = await collections.petDescriptionCustomField.listDocuments([query])
					return res.documents
				},
			})
	},
})
