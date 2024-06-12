<script lang="ts">
	import { navigating } from '$app/stores'
	import CookiesAlert from '$lib/components/Common/CookiesAlert.svelte'
	import FullPageLoading from '$lib/components/Common/FullPageLoading.svelte'
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query'
	import OfflinePage from '$lib/components/Pages/OfflinePage.svelte'
	import { isOnline } from '$lib/utils/online'

	import '../app.css'
	import Alert from '$lib/components/Alert/Alert.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import { alertStore } from './alertStore'
	import { Button } from 'flowbite-svelte'
	import lsStore from '$lib/utils/lsStore'
	import Terms from '$lib/components/MyPetsComponents/Terms.svelte'
	const queryClient = new QueryClient()
</script>

{#if !$lsStore.temrsAccepted}
	<Terms class=" z-50"></Terms>
{/if}

<Alert
	class="z-[9999] absolute top-0 max-w-[500px] w-[95%] m-2"
	on:close={() => ($alertStore.shown = false)}
	visible={$alertStore.shown}
	color={$alertStore.details?.color}
>
	<Text slot="title">{$alertStore.title}</Text>
	<Text slot="message">{$alertStore.message}</Text>
	<span slot="buttons">
		{#if !$alertStore.details?.buttons}
			<Button
				on:click={() => ($alertStore.shown = false)}
				color={$alertStore.details?.color}>ok</Button
			>
		{:else}
			{#each $alertStore.details.buttons as button}
				<Button color={$alertStore.details?.color} on:click={button.onClick}
					>{button.title}</Button
				>
			{/each}
		{/if}
	</span>
</Alert>

<CookiesAlert />

<QueryClientProvider client={queryClient}>
	{#if $navigating}
		<FullPageLoading />
	{:else}
		<div class="w-full h-full bg-white dark:bg-black overflow-auto">
			{#if $isOnline === 'offline'}
				<OfflinePage />
			{:else}
				<slot />
			{/if}
		</div>
	{/if}
</QueryClientProvider>
