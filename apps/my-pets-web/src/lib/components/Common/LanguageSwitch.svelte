<script lang="ts">
	import { user } from '$lib/appwrite/appwrite'
	import { lsStore } from '$lib/utils/lsStore'
	import LL, { locale, setLocale } from '$src/i18n/i18n-svelte'
	import { Select } from 'flowbite-svelte'

	const languageItems: [
		{
			name: 'czech'
			value: 'cs'
		},
		{
			name: 'english'
			value: 'en'
		},
	] = [
		{
			name: $LL.component.LanguageSwitch.czech() as 'czech',
			value: 'cs',
		},
		{
			name: $LL.component.LanguageSwitch.english() as 'english',
			value: 'en',
		},
	]

	let selected: (typeof languageItems)[number]['value'] = $locale

	$: setLocale(selected)
	$lsStore.language = selected

	let className = ''
	export { className as class }
</script>

<Select class={className} items={languageItems} bind:value={selected} />
