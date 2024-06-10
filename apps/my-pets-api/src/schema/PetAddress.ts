import { objectType } from 'nexus'

export default objectType({
	name: 'PetAddress',
	definition: (t) => {
		t.string('petAddress')
		t.field('petAddressCoords', { type: 'Coords' })
	},
})
