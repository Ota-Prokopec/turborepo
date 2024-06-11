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
		mapTitle: 'Najděte svému mazlíčkovi přesnou lokaci pomocí mapy',
	},
	PetAllergensInput: {
		title: 'Alergeny',
	},
	OwnerPhoneNumberInput: {
		title: 'Vaše telefonní číslo',
	},
	PetTreatInput: {
		title: 'Jak se starat o vašeho mazlíčka?',
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
		title: 'Jak se o mě starat?',
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
		copied: 'zkopírováno!',
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
	PetAddressItem: {
		title: 'Tady bydlím',
		seeOnMap: 'See on map',
	},
	FoundPetButton: {
		label: 'Našel jsem toto zvířátko!',
		Modal: {
			title: 'Našel jsem toto zvířátko',
			text: 'Můžete poslat vaši lokaci majitelovi zvířátka.',
			buttonLabel: 'Poslat moji přímou lokaci',
			sent: 'Vaše lokace byla poslána',
		},
	},
	SeeOnGoogleMapsButton: {
		label: 'Vidět na Google map',
	},
	PetFoundLocationItem: {
		buttonLabel: 'Vaše zvířátko bylo nalezeno, klikněte a zjistěte kde',
		modal: {
			title: 'Lokace kde bylo vaše zvířátko nalezeno',
		},
	},
	NoContent: {
		nothingHere: 'Tady nic',
	},
} satisfies BaseTranslation
