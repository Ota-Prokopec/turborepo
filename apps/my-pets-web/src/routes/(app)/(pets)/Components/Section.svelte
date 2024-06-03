<script lang="ts">
	import Avatar from '$lib/components/Common/Avatar.svelte'
	import List from '$lib/components/Common/List.svelte'
	import { type TPetData } from '@repo/my-pets-tstypes'
	import { pick } from 'lodash'
	import PetAddressInput from './EditPetAddressInput.svelte'
	import PetNameInput from './EditPetNameInput.svelte'

	export let petData: TPetData

	const petDataInList = Object.keys(
		pick(petData, 'petName', 'petAddress'),
	) as (keyof Pick<typeof petData, 'petAddress' | 'petName'>)[]
</script>

<Avatar size="xl"></Avatar>

<List let:item items={petDataInList}>
	{#if item === 'petName'}
		<PetNameInput petName={petData.petName}></PetNameInput>
	{:else if item === 'petAddress'}
		<PetAddressInput petAddress={petData.petAddress}></PetAddressInput>
	{/if}
</List>
