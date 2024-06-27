<script lang="ts">
	import { goto } from '$app/navigation'
	import Center from '$lib/components/Common/Center.svelte'
	import Column from '$lib/components/Common/Column.svelte'
	import FullPageLoading from '$lib/components/Common/FullPageLoading.svelte'
	import Icon from '$lib/components/Common/Icon.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import Tabs from '$lib/components/Common/Tabs.svelte'
	import IconAdd from '$lib/components/Icons/IconAdd.svelte'
	import IconSettings from '$lib/components/Icons/IconSettings.svelte'
	import { sdk } from '$src/graphql/sdk'
	import { onMount } from 'svelte'
	import type { PageData } from './$types'
	import Section from './Components/Section.svelte'
	import { page } from '$app/stores'
	import { svelteParams } from '$lib/utils/paramsStore'
	import SectionLoading from './Components/SectionLoading.svelte'

	export let data: PageData

	let pageState: 'loading' | 'loaded' | 'error' | null = 'loading'

	let myPetsData:
		| Awaited<ReturnType<typeof sdk.getListOfPets>>['getListOfPets']
		| undefined

	let currentPetId = svelteParams('petId')

	onMount(async () => {
		pageState = 'loading'
		try {
			myPetsData = (await sdk.getListOfPets()).getListOfPets

			// if there is no pet chosen by query, choose first one loaded
			const firstPet = myPetsData ? myPetsData.at(0) : undefined

			if (!$currentPetId) $currentPetId = firstPet ? firstPet._id : null

			pageState = 'loaded'
		} catch (error) {
			pageState = 'error'
		}
	})

	$: tabItems = myPetsData?.map((pet) => ({ key: pet._id, title: pet.petName }))

	let currentPet: NonNullable<typeof myPetsData>[number] | undefined = undefined
	$: currentPet = myPetsData?.find((pet) => pet._id === $currentPetId)

	$: if (pageState === 'loaded' && !($currentPetId && currentPet && tabItems?.length))
		goto('notfound')
</script>

<Icon class="w-8 h-8" on:click={() => goto('/account/settings')}>
	<IconSettings></IconSettings>
</Icon>

<Center>
	<Column class="h-auto mobile:w-full w-[500px] justify-center flex items-center pt-10">
		{#if pageState === 'loading'}
			<SectionLoading></SectionLoading>
		{:else if $currentPetId && currentPet && tabItems}
			<Row class="relative">
				<Tabs let:title bind:active={$currentPetId} items={tabItems}>
					{title}
				</Tabs>
				<Icon
					on:click={() => goto('/addpet')}
					class="w-8 h-8 child:fill-green-400 absolute right-[-20px] top-[30px]"
				>
					<IconAdd></IconAdd>
				</Icon>
			</Row>

			{#if currentPet}
				<Section
					isOwner={currentPet.userId === data.user?.userId}
					petData={{
						...currentPet,
						petBirthDate: new Date(currentPet.petBirthDate),
					}}
				></Section>
			{/if}
		{/if}
	</Column>
</Center>
