// @ts-nocheck
import { setLocale } from '$src/i18n/i18n-svelte'
import { loadLocaleAsync } from '$src/i18n/i18n-util.async'
import { LayoutLoad } from './$types'
export const load = async () => {
	await loadLocaleAsync('cs')
	await loadLocaleAsync('en')
	await setLocale('cs')
}
;null as any as LayoutLoad;