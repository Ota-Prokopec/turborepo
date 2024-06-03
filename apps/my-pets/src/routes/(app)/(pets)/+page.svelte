<script lang="ts">
	import Column from '$lib/components/Common/Column.svelte'
	import Tabs from '$lib/components/Common/Tabs.svelte'
	import type { PetData } from '@repo/my-pets-tstypes'
	import Section from './Components/Section.svelte'

	const myPets: PetData[] = [
		{ name: 'Jessinka', id: '1', address: 'fa' },
		{ name: 'Bobek', id: '2', address: '' },
		{ name: 'Karina', id: '3', address: '' },
	] as const

	const tabItems = myPets.map((pet) => ({ key: pet.id, title: pet.name }))

	let currentPetId: (typeof myPets)[number]['id'] = '1'
	$: currentPet = myPets.find((pet) => pet.id === currentPetId)
</script>

<Column class="h-auto w-full justify-center flex items-center pt-10">
	<Tabs bind:active={currentPetId} items={tabItems} />
	{#if currentPet}
		<Section petData={currentPet}></Section>
	{/if}
</Column>
