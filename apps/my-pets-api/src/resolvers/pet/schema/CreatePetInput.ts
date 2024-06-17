import { inputObjectType } from 'nexus'

export default inputObjectType({
	name: 'CreatePetInput',
	definition: (t) => {
		t.string('petName')
		t.field('petType', { type: 'PetType' })
		t.list.string('petAllergens')
		t.string('ownerPhoneNumber')
		t.string('petTreating')
		t.string('petPicture')
		t.field('petAddress', { type: 'CreatePetAddressInput' })
		t.field('petGender', { type: 'PetGender' })
		t.list.field('petDescriptionCustomFields', {
			type: 'CreatePetDescriptionCustomField',
		})
		t.field('petBirthDate', { type: 'Date' })
		t.nullable.field('petMicrochipping', { type: 'CreatePetChippingInput' })
	},
})
