import { objectType } from 'nexus'

export default objectType({
	name: 'PetTag',
	definition: (t) => {
		t.string('linkId')
	},
})
