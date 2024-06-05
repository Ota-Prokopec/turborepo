import { objectType } from 'nexus'

export default objectType({
	name: 'PetDescriptionCustomField',
	definition: (t) => {
		t.string('title')
		t.string('text')
	},
})
