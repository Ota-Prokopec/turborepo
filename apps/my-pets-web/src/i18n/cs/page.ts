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
				'Omlouváme se, nebylo nám možné přihlásit vás do aplikace Tourmate. Prosím, zkuste to znovu.',
		},
	},
	settings: {
		language: 'Language',
		colorTheme: 'Color theme',
		logOut: {
			errorMessage: 'We were not able to sign you out',
		},
	},
} satisfies BaseTranslation
