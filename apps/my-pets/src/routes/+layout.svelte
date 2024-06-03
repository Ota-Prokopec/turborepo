<script lang="ts">
	import { navigating } from '$app/stores'
	import CookiesAlert from '$lib/components/Common/CookiesAlert.svelte'
	import FullPageLoading from '$lib/components/Common/FullPageLoading.svelte'
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query'
	import OfflinePage from '$lib/components/Pages/OfflinePage.svelte'
	import { isOnline } from '$lib/utils/online'

	import '../app.css'
	const queryClient = new QueryClient()
</script>

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
