import { objectType } from 'nexus'

export default objectType({
	name: 'Pet',
	definition: (t) => {
		t.string('petAddress')
		t.string('petName')
		t.string('petId')
	},
})
