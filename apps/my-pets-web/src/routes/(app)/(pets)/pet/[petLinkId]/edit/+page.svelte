<script lang="ts">
	import { page } from '$app/stores'
	import FullPageLoading from '$lib/components/Common/FullPageLoading.svelte'
	import { sdk } from '$src/graphql/sdk'
	import { useQuery } from '@sveltestack/svelte-query'
	import UpdatePetModal from '../../../notfound/Components/UpdatePetModal.svelte'
	import { navigate } from '$lib/utils/navigator'
	import type { PageData } from './$types'

	const petLinkId: string = $page.params.petLinkId

	export let data: PageData
	const petData = data.petData
</script>

<UpdatePetModal
	on:returnBack={() => console.log('return')}
	on:returnBack={() => navigate('/', { invalidateAll: true })}
	open
	currentData={{
		...petData,
		petBirthDate: new Date(petData.petBirthDate),
	}}
></UpdatePetModal>
