<script lang="ts">
	import { page } from '$app/stores'
	import Center from '$lib/components/Common/Center.svelte'
	import FullPageLoading from '$lib/components/Common/FullPageLoading.svelte'
	import { sdk } from '$src/graphql/sdk'
	import { useQuery } from '@sveltestack/svelte-query'
	import Section from '../../Components/Section.svelte'
	import type { PageData } from './$types'
	import PetNotFound from '$lib/components/MyPetsComponents/PetNotFound.svelte'
	import { onMount } from 'svelte'

	export let data: PageData

	const petLinkId: string = data.petLinkId

	let petData: Awaited<ReturnType<typeof sdk.getPet>>['getPet'] | null
	let status: 'loading' | 'not-found' | 'found' = 'loading'

	onMount(async () => {
		try {
			status = 'loading'
			petData = (await sdk.getPet({ petLinkId: petLinkId })).getPet
			status = 'found'
		} catch (error) {
			status = 'not-found'
		}
	})
</script>

{#if status === 'loading'}
	<FullPageLoading></FullPageLoading>
{:else if status === 'found' && petData}
	<Center class="w-full flex-wrap flex-col pt-20">
		<Section
			isOwner={petData.userId === data.user?.userId}
			petData={{
				...petData,
				petBirthDate: new Date(petData.petBirthDate),
			}}
		></Section>
	</Center>
{:else if status === 'not-found'}
	<PetNotFound></PetNotFound>
{/if}
