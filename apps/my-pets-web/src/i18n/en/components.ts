import type { BaseTranslation } from '../i18n-types'

export const componentsCS = {
	CookiesAlert: {
		title:
			'Tato stránka používá soubory cookie k ukládání relací uživatelů a dat uživatelů.',
		acceptButtonLabel: 'Přijmout soubory cookie',
	},

	SystemDownAlert: {
		title: 'Omlouváme se, naše systémy jsou dočasně nedostupné',
		message: 'Pracujeme na tom',
		donationAsking: 'Můžete nás podpořit darem, abychom mohli koupit lepší server',
	},
	GPSOffAlert: {
		title: 'Vaše GPS není zaplá',
		message:
			'Vaše GPS není zaplá nebo jste neudělil povolení, prohlížeči chrom nebo safari, o používání GPS. Jestli jste geolokaci povolili a stále to nefunguje, zkuste se pohnout.',
	},
	EditPetNameInput: {
		title: 'Edit your pet`s name',
	},
	NoPetFound: {
		title: 'No pets found',
		message: 'Go ahead and create a page for your pet!',
	},
	CreateNewPetModal: {
		title: 'create new pet',
	},
	PetNameInput: {
		title: 'your pets name',
	},
	PetAddressInput: {
		title: 'your pets address',
		buttonSaveTitle: 'save',
	},
	PetAllergensInput: {
		title: 'Allergens',
	},
	OwnerPhoneNumberInput: {
		title: 'Your phone number',
	},
	PetTreatInput: {
		title: 'How to treat your pet?',
	},
	PetCustomTextInput: {
		placeholder: {
			title: 'title',
			text: 'text',
		},
	},
} satisfies BaseTranslation
