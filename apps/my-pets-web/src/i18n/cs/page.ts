import type { BaseTranslation } from '../i18n-types'

export const pageCS = {
	signIn: {
		unsuccessfulLogin: 'Přihlášení nebylo úspěšné',
		welcome:
			'Vítejte do aplikace My pet! \n Chcete mít jistotu, že o vašeho mazlíčka bude dobře postaráno, pokud se zatoulá? \n Registrujte se do aplikace a vytvořte si psí známku!',
	},
	oauth: {
		success: {
			errorMessage:
				'Omlouváme se, nebylo nám možné přihlásit vás do aplikace My Pets. Prosím, zkuste to znovu.',
		},
	},
	settings: {
		language: 'Jazyk',
		colorTheme: 'Barevné téma',
		logOut: {
			errorMessage: 'Nemohli jsme Vás odhlásit, zkuste to znovu prosím',
		},
	},
	selling: {
		sellingTagNFC:
			'Tato známka obsahuje jak QR kód, tak technologii NFC, aby kdokoliv, kdo najde vašeho mazlíčka, mohl snadno získat důležité informace a dovést ho k Vám domů.  \n Značka je vyrobena z epoxilové pryskyřice.',
	},
	errorPage: {
		label:
			'Omlouváme se, v naší aplikaci My Pets došlo k chybě. Pracujeme na jejím odstranění. Prosíme o trpělivost. Děkujeme, váš MyPets.',
	},
} satisfies BaseTranslation
