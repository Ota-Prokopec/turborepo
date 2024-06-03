import { objectType } from 'nexus'

export default objectType({
	name: 'Account',
	definition: (t) => {
		t.string('userId')
	},
})
