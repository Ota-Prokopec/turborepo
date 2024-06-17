import { inputObjectType } from 'nexus'

export default inputObjectType({
	name: 'CreatePetChippingInput',
	definition: (t) => {
		t.field('dateOfChipping', { type: 'Date' })
		t.field('locationOfChip', { type: 'String' })
	},
})
