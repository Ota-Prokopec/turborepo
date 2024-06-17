import { objectType } from 'nexus'

export default objectType({
	name: 'petMicrochipping',
	definition: (t) => {
		t.string('locationOfChip')
		t.field('dateOfChipping', { type: 'Date' })
	},
})
