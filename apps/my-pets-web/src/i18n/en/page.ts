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
				'We are sorry, we were not able to sign you in the My Pets. Please try it again.',
		},
	},
	settings: {
		language: 'Language',
		colorTheme: 'Color theme',
		logOut: {
			errorMessage: 'We were not able to sign you out',
		},
	},
	selling: {
		sellingTagNFC:
			"This tag features both a QR code and NFC technology to make it easy for anyone who finds your pet to access important information. By simply scanning the QR code with their phone or placing an NFC-enabled device near the tag, they can retrieve your pet's details and even send you its location. The QR code allows for quick access by taking a photo, while the NFC functionality provides instant information with a tap.",
		sellingTagQR:
			"This tag features a QR code, making it easy for anyone who finds your pet to access important information. By simply scanning the QR code with their phone, they can retrieve your pet's details and even send you its location. The QR code allows for quick access by taking a photo.",
	},

	errorPage: {
		label:
			"We're sorry, there's been an error in our My Pets app. We are working on its removal. Please be patient. Thank you, your MyPets.",
	},
} satisfies BaseTranslation
