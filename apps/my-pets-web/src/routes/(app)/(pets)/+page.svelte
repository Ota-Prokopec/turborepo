<script lang="ts">
	import { goto } from '$app/navigation'
	import Column from '$lib/components/Common/Column.svelte'
	import FullPageLoading from '$lib/components/Common/FullPageLoading.svelte'
	import Tabs from '$lib/components/Common/Tabs.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import { sdk } from '$src/graphql/sdk'
	import type { TPetData } from '@repo/my-pets-tstypes'
	import { onMount } from 'svelte'
	import Section from './Components/Section.svelte'
	import Icon from '$lib/components/Common/Icon.svelte'
	import IconAdd from '$lib/components/Icons/IconAdd.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import CreateNewPetModal from './notfound/Components/CreateNewPetModal.svelte'
	import Center from '$lib/components/Common/Center.svelte'

	let pageState: 'loading' | 'loaded' | 'error' | null = null

	let myPetsData:
		| Awaited<ReturnType<typeof sdk.getListOfPets>>['getListOfPets']
		| undefined

	let currentPetId: string | null = null

	onMount(async () => {
		pageState = 'loading'
		try {
			myPetsData = (await sdk.getListOfPets()).getListOfPets
			currentPetId = myPetsData?.at(0)?._id ?? null
			pageState = 'loaded'
		} catch (error) {
			pageState = 'error'
		}
	})

	$: tabItems = myPetsData?.map((pet) => ({ key: pet._id, title: pet.petName }))

	let currentPet: NonNullable<typeof myPetsData>[number] | undefined = undefined
	$: currentPet = myPetsData?.find((pet) => pet._id === currentPetId)

	$: if (pageState === 'loaded' && !(currentPetId && currentPet && tabItems))
		goto('notfound')
</script>

{#if pageState === 'loading'}
	<FullPageLoading></FullPageLoading>
{:else if currentPetId && currentPet && tabItems}
	<Center>
		<Column class="h-auto mobile:w-full w-[500px] justify-center flex items-center pt-10">
			<Row class="relative">
				<Tabs let:title bind:active={currentPetId} items={tabItems}>
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
				<Section petData={currentPet}></Section>
			{/if}
		</Column>
	</Center>
{/if}
