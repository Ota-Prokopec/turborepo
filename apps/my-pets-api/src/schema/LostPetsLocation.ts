import { objectType } from 'nexus'

export default objectType({
	name: 'LostPetsLocation',
	definition: (t) => {
		t.field('coords', { type: 'Coords' })
	},
})
