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
	import SectionLoading from '../../Components/SectionLoading.svelte'

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

<Center class="w-full flex-wrap flex-col pt-20">
	{#if status === 'loading'}
		<SectionLoading></SectionLoading>
	{:else if status === 'found' && petData}
		<Section
			isOwner={petData.userId === data.user?.userId}
			petData={{
				...petData,
				petBirthDate: new Date(petData.petBirthDate),
			}}
		></Section>
	{:else if status === 'not-found'}
		<PetNotFound></PetNotFound>
	{/if}
</Center>
