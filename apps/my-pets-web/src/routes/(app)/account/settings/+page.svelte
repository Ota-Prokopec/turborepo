<script lang="ts">
	import { goto } from '$app/navigation'
	import { PUBLIC_SESSION_NAME } from '$env/static/public'
	import { account } from '$lib/appwrite/appwrite'
	import LogOutButton from '$lib/components/Buttons/LogOutButton.svelte'
	import Card from '$lib/components/Common/Card.svelte'
	import Column from '$lib/components/Common/Column.svelte'
	import LanguageSwitch from '$lib/components/Common/LanguageSwitch.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import ThemeSwitch from '$lib/components/Common/ThemeSwitch.svelte'
	import UpdatePetIdTranslation from '$lib/components/MyPetsComponents/UpdatePetIdTranslation.svelte'
	import lsStore from '$lib/utils/lsStore'
	import { sdk } from '$src/graphql/sdk'
	import LL from '$src/i18n/i18n-svelte'
	import { alert } from '$src/routes/alertStore'
	import type { PageData } from './$types'

	const logOut = async () => {
		try {
			await account.deleteSessions()
			await sdk.logOut()
			$lsStore.cookieFallback = { [PUBLIC_SESSION_NAME]: '' }
			goto('/auth')
		} catch (error) {
			alert('', $LL.page.settings.logOut.errorMessage(), { color: 'red' })
		}
	}
</script>

<Column class="items-center justify-center h-full">
	<Card class="">
		<Column>
			<Text>{$LL.page.settings.language()}</Text>
			<LanguageSwitch></LanguageSwitch>
		</Column>
	</Card>
	<Card>
		<Column>
			<Text>{$LL.page.settings.colorTheme()}</Text>
			<ThemeSwitch
				on:themeChange={(e) => ($lsStore.colorTheme = e.detail.theme)}
				theme={$lsStore.colorTheme ?? 'light'}
			></ThemeSwitch>
		</Column>
	</Card>
	<Card>
		<LogOutButton on:click={logOut}></LogOutButton>
	</Card>
</Column>
