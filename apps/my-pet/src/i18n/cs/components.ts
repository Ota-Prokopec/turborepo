import type { BaseTranslation } from '../i18n-types';

export const componentsCS = {
	EmailInput: {
		label: 'Zadejte e-mail'
	},
	PasswordInput: {
		label: 'Zadejte heslo'
	},
	UsernameInput: {
		label: 'Zadejte své jméno'
	},
	EmailSent: {
		title: 'Poslali jsme vám potvrzení e-mailem.',
		text: 'Otevřete svůj e-mail a klikněte na odkaz, který jsme vám poslali. Ověřovací adresu URL otevřete pouze ve stejném prohlížeči na stejném zařízení, na kterém jste uživatele zaregistrovali! Je to opravdu nezbytné!'
	},
	MyIdInput: {
		label: 'Zadejte své vlastní Tourmate ID'
	},

	LogOutButton: {
		label: 'Odhlásit se'
	},
	MapSettings: {
		saveErrorMessage:
			'Omlouváme se, ale vaše preference mapy nebyly uloženy. Zkuste to později znovu.',
		mapRange: 'Rozsah mapy',
		exceededMaxRange: 'We are sorry, but you have to choose a smaller map range'
	},
	NoContent: {
		notFound: 'Nic nenalezeno'
	},


	ImageInput: {
		throughGallery: 'Přes galerii',
		throughClipboard: 'Přes schránku',
		clipboardNotFound: 'V schránce není k dispozici žádný obrázek.'
	},
	CookiesAlert: {
		title:
			'Tato stránka používá soubory cookie k ukládání relací uživatelů a dat uživatelů, včetně aktuální polohy uživatelů.',
		acceptButtonLabel: 'Přijmout soubory cookie'
	},
	ContinueButton: {
		label: 'Pokračovat'
	},

	SetLocationForNotificationsPage: {
		errorMessage: 'Nepodařilo se nastavit vaši polohu pro oznámení',
		yourLocationIsCurrently_InRangeOf:
			'Vaše poloha je aktuálně {location: number[]} v rozsahu {range: string}',
		chooseYourLocationForNotifications: 'Vyberte si polohu pro oznámení',
		cancel: 'Zrušit',
		save: 'Uložit',
		help: 'Když lidé vytvoří nový zážitek a přihlásíte se k místu, kde bude tento zážitek umístěn, budete o tomto novém zážitku informováni.'
	},
	MoreInformationButton: {
		label: 'Zobrazit více informací'
	},
	




	
	CancelButton: {
		label: 'Zrušit'
	},
	BasicImageInput: {
		title: 'Klikněte pro nahrání nebo přetáhněte soubor sem'
	},
	InstallApp: {
		title: 'Nainstalujte aplikaci Tourmate',
		text: 'Nainstalujte naši aplikaci Tourmate pro lepší zážitek',
		installButtonLabel: 'Nainstalovat',
		useChrome: 'Nebo použijte naší webovou verzi'
	},

	WhatAppOffersButton: {
		label: 'Co vám Tourmate nabízí'
	},

	SystemDownAlert: {
		title: 'Omlouváme se, naše systémy jsou dočasně nedostupné',
		message: 'Pracujeme na tom',
		donationAsking: 'Můžete nás podpořit darem, abychom mohli koupit lepší server'
	},
	GPSOffAlert: {
		title: 'Vaše GPS není zaplá',
		message:
			'Vaše GPS není zaplá nebo jste neudělil povolení, prohlížeči chrom nebo safari, o používání GPS. Jestli jste geolokaci povolili a stále to nefunguje, zkuste se pohnout.'
	},
	ButtonLinkToDeveloperPage: {
		label: 'Vývojář and majitel'
	},
	ButtonCreateAnonymousSession: {
		label: 'Pokračovat v anonymním režimu (experimentální)',
		warningPopup: {
			message:
				'Pokud budete pokračovat v anonymní relaci, nebudete moci obnovit svůj účet. Vyberte prosím normální způsob přihlášení.',
			iRead: 'Přečetl jsem'
		}
	}
} satisfies BaseTranslation;
