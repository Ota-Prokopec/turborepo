// @ts-nocheck
import { browser } from '$app/environment'
import { storage } from '$lib/utils/lsStore'
import { setLocale } from '$src/i18n/i18n-svelte'
import { loadLocaleAsync } from '$src/i18n/i18n-util.async'
import { getSystemLanguageAbbreviation, getThemeInternalMode } from '@repo/utils'
import type { LayoutLoad } from './$types'
export const load = async () => {
	if (!browser) return
	await loadLocaleAsync('cs')
	await loadLocaleAsync('en')
	await setLocale('cs')

	const myLanguage = storage.language
	const deviceLanguage = getSystemLanguageAbbreviation()

	if (myLanguage) {
		setLocale(myLanguage) //set the users locale language
	} else if (deviceLanguage) {
		if (deviceLanguage === 'en' || deviceLanguage === 'cs') setLocale(deviceLanguage)
	} else setLocale('en') //set the default language

	// theme dark mode-light mode
	const preferencedTheme = storage.colorTheme
	const deviceTheme = getThemeInternalMode()

	if (
		(preferencedTheme && preferencedTheme === 'dark') ||
		(!preferencedTheme && deviceTheme === 'dark')
	) {
		document.documentElement.classList.add('dark')
	}
}
;null as any as LayoutLoad;