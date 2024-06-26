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
		title: 'Vlastní políčka',
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
		label: 'Vidět na Google mapách',
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
	LoadingModal: {
		label: 'načítání...',
	},
	DeleteButton: {
		label: 'Vymazat',
	},
	Terms: {
		terms: 'Podmínky pro užívání aplikace',
		acceptButtonLabel: 'Akceptovat',
	},
	SeeOnMapButton: {
		label: 'Vidět na mapách',
	},
	SellingCard: {
		sizes: 'velikosti',
	},
	PetAgeInput: {
		datePicker: {
			label: 'Datum narození',
		},
	},
	PetAgeItem: {
		yearsOld: 'let starý',
		born: 'narozen',
	},
	PetWeightInput: {
		title: 'Hmotnost zvířete',
		buttonAddWeight: 'Přidat hmotnost',
		buttonRemoveWeight: 'Odebrat hmotnost',
	},
	PetWeightItem: {
		title: 'Moje hmotnost je',
	},
	DoneModal: {
		returningButtonLabel: 'Jít zpět',
		label: 'Hotovo',
	},

	UpdatePetIdTranslation: {
		buttonLabel: 'Aktualizovat známku zvířátka',
		modal: {
			title: 'Aktualizovate si známku zvířátka',
			text: 'Vložte svůj kód.',
			updateTagButtonLabel: 'Aktualizovat známku',
		},
		error:
			'Oups, něco se pokazilo, pokud si myslíte, že jste zadali správný kód a nemáte žádného jiného mazlíčka registrovaného s tímto kódem, kontaktujte nás.',
	},
	SignUpViaPhone: {
		buttonLabel: 'Přihlásit se pomocí telefonního čísla',
		phoneModal: {
			title: 'Zadejte své telefonní číslo, pošleme vám ověřovací kód.',
			sendButtonLabel: 'Odeslat',
		},
		verificationModal: {
			title:
				'Poslali jsme vám ověřovací kód, zadejte ho pro ověření vašeho telefonního čísla.',
			verfifyButtonLabel: 'Ověřit',
		},
		tokenErrorMessage: 'Něco se pokazilo, zkontrolujte své číslo znovu.',
		verificationErrorMessage:
			'Něco se pokazilo při ověřování, zkontrolujte svůj kód znovu.',
	},
	PetNotFound: {
		title: 'Zvíře, které hledáte, nebylo nalezeno v naší databázi.',
		message:
			'Pokud je toto váš štítek, musíte jej nejprve zaregistrovat. Můžete to udělat v profilu vašeho zvířete.',
	},
	PetSettings: {
		modal: {
			title: "Your pet's settings",
		},
		buttonLabel: 'Nastavení',
	},

	RemovePetTag: {
		buttonLabel: 'Odstranit štítek tohoto mazlíčka',
		modal: {
			title: 'Odstranit štítek tohoto mazlíčka',
			text: 'Po odstranění budete moci štítek znovu registrovat k tomuto mazlíčkovi, ale také budete moci tento štítek registrovat k jinému vašemu mazlíčkovi.',
		},
	},
	TagItem: {
		title: 'QR kód vašeho mazlíčka',
	},
} satisfies BaseTranslation
