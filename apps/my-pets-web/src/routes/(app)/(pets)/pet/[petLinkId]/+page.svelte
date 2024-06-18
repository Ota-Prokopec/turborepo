<script lang="ts">
	import { page } from '$app/stores'
	import Center from '$lib/components/Common/Center.svelte'
	import FullPageLoading from '$lib/components/Common/FullPageLoading.svelte'
	import { sdk } from '$src/graphql/sdk'
	import { useQuery } from '@sveltestack/svelte-query'
	import Section from '../../Components/Section.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	const petLinkId: string = data.petLinkId

	$: petData = useQuery('getPetData', async () => {
		return (await sdk.getPet({ petLinkId: petLinkId })).getPet
	})
</script>

{#if $petData.isLoading}
	<FullPageLoading></FullPageLoading>
{:else if $petData.data}
	<Center class="w-full flex-wrap flex-col pt-20">
		<Section
			isOwner={$petData.data.userId === data.user?.userId}
			petData={{
				...$petData.data,
				petBirthDate: new Date($petData.data.petBirthDate),
			}}
		></Section>
	</Center>
{/if}
