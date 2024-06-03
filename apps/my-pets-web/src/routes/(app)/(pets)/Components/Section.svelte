<script lang="ts">
	import Avatar from '$lib/components/Common/Avatar.svelte'
	import List from '$lib/components/Common/List.svelte'
	import { type PetData } from '@repo/my-pets-tstypes'
	import { pick } from 'lodash'
	import PetAddressInput from './PetAddressInput.svelte'
	import PetNameInput from './PetNameInput.svelte'

	export let petData: PetData

	const petDataInList = Object.keys(pick(petData, 'name', 'address')) as (keyof Pick<
		typeof petData,
		'address' | 'name'
	>)[]
</script>

<Avatar size="xl"></Avatar>

<List let:item items={petDataInList}>
	{#if item === 'name'}
		<PetNameInput petName={petData.name}></PetNameInput>
	{:else if item === 'address'}
		<PetAddressInput petAddress={petData.address}></PetAddressInput>
	{/if}
</List>
