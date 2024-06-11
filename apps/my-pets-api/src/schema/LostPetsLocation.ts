import { objectType } from 'nexus'

export default objectType({
	name: 'LostPetsLocation',
	definition: (t) => {
		t.string('_createdAt')
		t.string('_updatedAt')
		t.string('_collectionId')
		t.string('_id')
		t.list.string('_permissions')
		t.string('_databaseId')
		t.field('coords', { type: 'Coords' })
	},
})
