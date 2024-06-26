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

	errorPage: {
		label:
			"We're sorry, there's been an error in our My Pets app. We are working on its removal. Please be patient. Thank you, your MyPets.",
	},
} satisfies BaseTranslation
