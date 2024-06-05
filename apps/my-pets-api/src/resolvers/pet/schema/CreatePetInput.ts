import { inputObjectType } from 'nexus'

export default inputObjectType({
	name: 'CreatePetInput',
	definition: (t) => {
		t.string('petAddress')
		t.string('petName')
		t.field('petType', { type: 'PetType' })
		t.list.string('petAllergens')
		t.string('ownerPhoneNumber')
		t.string('petTreating')
		t.field('petGender', { type: 'PetGender' })
		t.list.field('petDescriptionCustomFields', {
			type: 'CreatePetDescriptionCustomField',
		})
	},
})
