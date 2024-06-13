import type { BaseTranslation } from '../i18n-types'

export const componentsCS = {
	CookiesAlert: {
		title:
			'Tato stránka používá soubory cookie k ukládání relací uživatelů a dat uživatelů..',
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

	NoPetFound: {
		title: 'No pets found',
		message: 'Go ahead and create a page for your pet!',
	},
	CreateNewPetModal: {
		title: 'create new pet',
		saveButtonLabel: 'save',
	},
	UpdatePetModal: {
		title: 'update your pet',
		saveButtonLabel: 'update',
	},
	PetNameInput: {
		title: 'your pets name',
	},
	PetAddressInput: {
		title: 'your pets address',
		mapTitle: 'find your pet accurate location using the map',
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
	SavingModal: {
		label: 'saving...',
	},
	ErrorModal: {
		title: 'Error occured',
		text: 'Please try it again',
	},
	SavedModal: {
		label: 'saved',
		returningButtonLabel: 'go back',
	},

	PetAllergensItem: {
		title: "Pet's allergens",
	},

	PetTreatItem: {
		title: 'How to treat me?',
	},
	PetPictureInput: {
		title: "Pet's picture",
	},
	RequiredBadge: {
		label: 'required',
	},
	RequiredFieldsEmptlyPetCreatingErrorModal: {
		title: 'Required fields are empty',
		text: 'Please fill up all required fields',
	},
	PetUrlItem: {
		label: "pet's url",
		copied: 'copied!',
	},
	EditPetButton: {
		label: 'Edit pet',
	},
	DeletePetButton: {
		label: 'Delete pet',
		modal: {
			title: 'Delete your pet',
			text: 'If you delete your pet, you will not be able to recover it. Are you sure you want to do this?',
		},
	},
	DeletingModal: {
		label: 'deleting....',
	},
	DeletedModal: {
		label: 'deleted',
		returningButtonLabel: 'go back',
	},
	LanguageSwitch: {
		english: 'english',
		czech: 'czech',
	},
	LogOutButton: {
		label: 'Log out',
	},
	ButtonLinkToDeveloperPage: {
		label: 'Vývojář and majitel',
	},
	PetAddressItem: {
		title: 'I live here',
	},
	FoundPetButton: {
		label: 'I found this pet!',
		Modal: {
			title: 'I found this pet',
			text: 'You can send your current location to the owner of the dog.',
			buttonLabel: 'Send my current location',
			sent: 'Your current location has been sent',
		},
	},
	SeeOnGoogleMapsButton: {
		label: 'See on Google map',
	},
	PetFoundLocationItem: {
		buttonLabel: 'Your pet was found, click and found out where',
		modal: {
			title: 'Locations where your pet was found',
		},
	},
	NoContent: {
		nothingHere: 'Nothing here',
	},
	LoadingModal: {
		label: 'loading...',
	},
	DeleteButton: {
		label: 'Delete',
	},
	Terms: {
		terms: 'Conditions for application using',
		acceptButtonLabel: 'Accept',
	},
	SeeOnMapButton: {
		label: 'See on map',
	},
} satisfies BaseTranslation
