import { inputObjectType } from 'nexus'

export default inputObjectType({
	name: 'UpdatePetIdTranslationInput',
	definition: (t) => {
		t.string('petId')
		t.string('passCode')
	},
})
