import { inputObjectType } from 'nexus'

export default inputObjectType({
	name: 'CreatePetDescriptionCustomField',
	definition: (t) => {
		t.string('title')
		t.string('text')
	},
})
