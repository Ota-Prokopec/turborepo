<script lang="ts">
	import NoContent from '$lib/components/Common/NoContent.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import type { TPetData } from '@repo/my-pets-tstypes'
	import { Button, Modal } from 'flowbite-svelte'
	import PetFoundLocationCard from './PetFoundLocationCard.svelte'

	export let locations: TPetData['lostPetLocations']

	let modalOpen = false

	let className = ''
	export { className as class }
</script>

<Button class={className} on:click={() => (modalOpen = true)} color="green"
	>{$LL.component.PetFoundLocationItem.buttonLabel()}</Button
>

<Modal bind:open={modalOpen} title={$LL.component.PetFoundLocationItem.modal.title()}>
	{#if locations.length === 0}
		<NoContent></NoContent>
	{:else}
		{#each locations as location}
			<PetFoundLocationCard
				on:deleted={() =>
					(locations = locations.filter((item) => item._id !== location._id))}
				{location}
			></PetFoundLocationCard>
		{/each}
	{/if}
</Modal>
