<script lang="ts">
	import Center from '$lib/components/Common/Center.svelte'
	import Column from '$lib/components/Common/Column.svelte'
	import Tabs from '$lib/components/Common/Tabs.svelte'
	import { sdk } from '$src/graphql/sdk'
	import { useQuery } from '@sveltestack/svelte-query'
	import NoPetFound from './Components/NoPetFound.svelte'
	import Section from './Components/Section.svelte'
	import { onMount } from 'svelte'

	let myPetsData:
		| Awaited<ReturnType<typeof sdk.getListOfPets>>['getListOfPets']
		| undefined

	onMount(async () => {
		myPetsData = (await sdk.getListOfPets()).getListOfPets
	})

	$: tabItems = myPetsData?.map((pet) => ({ key: pet.petId, title: pet.petName }))

	$: currentPetId = myPetsData?.at(0)?.petId
	$: currentPet = myPetsData?.find((pet) => pet.petId === currentPetId)
</script>

{#if currentPetId && currentPet && tabItems}
	<Column class="h-auto w-full justify-center flex items-center pt-10">
		<Tabs bind:active={currentPetId} items={tabItems} />
		{#if currentPet}
			<Section petData={currentPet}></Section>
		{/if}
	</Column>
{:else}
	<Center class="w-full h-full"><NoPetFound></NoPetFound></Center>
{/if}
