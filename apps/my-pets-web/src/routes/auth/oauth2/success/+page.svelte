<script lang="ts">
	import { goto } from '$app/navigation'
	import FullPageLoading from '$lib/components/Common/FullPageLoading.svelte'
	import { storage } from '$lib/utils/lsStore'
	import { sdk } from '$src/graphql/sdk'
	import LL from '$src/i18n/i18n-svelte'
	import { alert } from '$src/routes/alertStore'
	import { onMount } from 'svelte'
	import type { PageData } from './$types'

	export let data: PageData

	onMount(async () => {
		try {
			//session in localstorage for client to appwrite
			storage.cookieFallback = { a_session_experiences: data.session }
			//cookies for ssr
			await sdk.setSession({ session: data.session })

			goto(`/`, { invalidateAll: true })
		} catch (error) {
			alert('', $LL.page.oauth.success.errorMessage(), { color: 'red' })
		}
	})
</script>

<FullPageLoading />
