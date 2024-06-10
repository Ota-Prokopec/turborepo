import { inputObjectType } from 'nexus'

export default inputObjectType({
	name: 'CreatePetAddressInput',
	definition: (t) => {
		t.string('petAddress')
		t.field('petAddressCoords', { type: 'Coords' })
	},
})
