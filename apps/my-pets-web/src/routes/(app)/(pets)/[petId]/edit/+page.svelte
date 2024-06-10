<script lang="ts">
	import { page } from '$app/stores'
	import FullPageLoading from '$lib/components/Common/FullPageLoading.svelte'
	import { sdk } from '$src/graphql/sdk'
	import { useQuery } from '@sveltestack/svelte-query'
	import UpdatePetModal from '../../notfound/Components/UpdatePetModal.svelte'
	import { navigate } from '$lib/utils/navigator'

	const petId: string = $page.params.petId

	$: petData = useQuery('getPetData', async () => {
		return (await sdk.getPet({ petId: petId })).getPet
	})
</script>

{#if $petData.isLoading}
	<FullPageLoading></FullPageLoading>
{:else if $petData.data}
	<UpdatePetModal
		on:returnBack={() => navigate('/', { invalidateAll: true })}
		open
		currentData={$petData.data}
	></UpdatePetModal>
{/if}
