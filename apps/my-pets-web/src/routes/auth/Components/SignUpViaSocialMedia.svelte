<script lang="ts">
	import { account } from '$lib/appwrite/appwrite'
	import Icon from '$lib/components/Common/Icon.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import IconDiscord from '$lib/components/Icons/IconDiscord.svelte'
	import IconGithub from '$lib/components/Icons/IconGithub.svelte'
	import IconGoogle from '$lib/components/Icons/IconGoogle.svelte'
	import LoadingModal from '$lib/components/MyPetsComponents/LoadingModal.svelte'
	import { OAuthProvider } from 'appwrite'
	import { twMerge } from 'tailwind-merge'

	export let isLoading = false

	const logout = async () => {
		try {
			await account.deleteSessions() //first things first, i will delete session, if some exists
		} catch (error) {}
	}

	const login = async (platform: OAuthProvider) => {
		isLoading = true
		await logout()

		await account.createOAuth2Session(
			platform,
			`${location.origin}/auth/oauth2/success`,
			`${location.origin}/auth/oauth2/failure`,
		)
	}

	const socials = [
		{
			key: OAuthProvider.Google,
			icon: IconGoogle,
		},
		{
			key: OAuthProvider.Discord,
			icon: IconDiscord,
		},
		{
			key: OAuthProvider.Github,
			icon: IconGithub,
		},
	] as const
</script>

{#if isLoading}
	<LoadingModal></LoadingModal>
{/if}
<Row class="gap-10 items-center justify-center dark:bg-gray-200 rounded-xl w-auto">
	{#each socials as { icon, key }}
		<Icon
			disableDefaultDarkMode
			class={twMerge('child:w-14 child:h-14')}
			on:click={() => login(key)}
		>
			<svelte:component this={icon} />
		</Icon>
	{/each}
</Row>
