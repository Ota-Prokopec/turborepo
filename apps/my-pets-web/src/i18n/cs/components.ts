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

	NoPetFound: {
		title: 'Žádná zvířata nebyla nalezena',
		message: 'Vytvořte stránku pro svého mazlíčka!',
	},
	CreateNewPetModal: {
		title: 'Vytvořit nového mazlíčka',
		saveButtonLabel: 'Uložit',
	},
	UpdatePetModal: {
		title: 'Aktualizujte svého mazlíčka',
		saveButtonLabel: 'Aktualizovat',
	},
	PetNameInput: {
		title: 'Jméno vašeho mazlíčka',
	},
	PetAddressInput: {
		title: 'Adresa vašeho mazlíčka',
		buttonSaveTitle: 'Uložit',
	},
	PetAllergensInput: {
		title: 'Alergeny',
	},
	OwnerPhoneNumberInput: {
		title: 'Vaše telefonní číslo',
	},
	PetTreatInput: {
		title: 'Jak léčit vašeho mazlíčka?',
	},
	PetCustomTextInput: {
		placeholder: {
			title: 'Název',
			text: 'Text',
		},
	},
	SavingModal: {
		label: 'Ukládání...',
	},
	ErrorModal: {
		title: 'Došlo k chybě',
		text: 'Zkuste to prosím znovu',
	},
	SavedModal: {
		label: 'Uloženo',
		returningButtonLabel: 'Zpět',
	},

	PetAllergensItem: {
		title: 'Alergeny mazlíčka',
	},

	PetTreatItem: {
		title: 'Jak mě léčit?',
	},
	PetPictureInput: {
		title: 'Fotografie mazlíčka',
	},
	RequiredBadge: {
		label: 'Povinné',
	},
	RequiredFieldsEmptlyPetCreatingErrorModal: {
		title: 'Povinná pole jsou prázdná',
		text: 'Vyplňte prosím všechna povinná pole',
	},
	PetUrlItem: {
		label: 'URL mazlíčka',
	},
	EditPetButton: {
		label: 'Upravit mazlíčka',
	},
	DeletePetButton: {
		label: 'Smazat mazlíčka',
		modal: {
			title: 'Smazat vašeho mazlíčka',
			text: 'Pokud smažete svého mazlíčka, nebudete ho moci obnovit. Jste si jisti, že to chcete udělat?',
		},
	},
	DeletingModal: {
		label: 'Mazání...',
	},
	DeletedModal: {
		label: 'Smazáno',
		returningButtonLabel: 'Zpět',
	},
	LanguageSwitch: {
		english: 'Angličtina',
		czech: 'Čeština',
	},
	LogOutButton: {
		label: 'Odhlásit se',
	},
	ButtonLinkToDeveloperPage: {
		label: 'Vývojář a majitel',
	},
} satisfies BaseTranslation
