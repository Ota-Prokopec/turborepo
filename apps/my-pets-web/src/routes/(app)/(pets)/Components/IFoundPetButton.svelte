<script lang="ts">
	import Card from '$lib/components/Common/Card.svelte'
	import Icon from '$lib/components/Common/Icon.svelte'
	import Loading from '$lib/components/Common/Loading.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import IconCheck from '$lib/components/Icons/IconCheck.svelte'
	import ErrorModal from '$lib/components/MyPetsComponents/ErrorModal.svelte'
	import lsStore, { storage } from '$lib/utils/lsStore'
	import { sdk } from '$src/graphql/sdk'
	import LL from '$src/i18n/i18n-svelte'
	import { getUsersLocation } from '@repo/utils'
	import { Button, Modal } from 'flowbite-svelte'
	import { twMerge } from 'tailwind-merge'

	export let petId: string
	export let ownerUserId: string

	let modalOpen = false
	let sendingStatus: 'sending' | 'sent' | null | 'error' | 'gpsOff' = null

	const sendLocation = async () => {
		sendingStatus = 'sending'
		const coords = await getUsersLocation({ enableHighAccuracy: true })
		try {
			if (!coords) throw new Error('User does not have any location')
			await sdk.createRecordToLostPetsLocation({
				coords: coords,
				petId: petId,
				ownerUserId,
			})
			sendingStatus = 'sent'
		} catch (error) {
			if (!coords) sendingStatus = 'gpsOff'
			else sendingStatus = 'error'
		}
	}

	let className = ''
	export { className as class }
</script>

<Button on:click={() => (modalOpen = true)} class={twMerge(className)} color="blue">
	<Row class="gap-1 items-center">
		<Text>{$LL.component.FoundPetButton.label()}</Text>
	</Row>
</Button>

{#if sendingStatus === 'error'}
	<ErrorModal></ErrorModal>
{:else if sendingStatus === 'gpsOff'}
	<ErrorModal>
		{$LL.error.gpsIsOff()}
	</ErrorModal>
{:else}
	<Modal bind:open={modalOpen} title={$LL.component.FoundPetButton.Modal.title()}>
		<Text>{$LL.component.FoundPetButton.Modal.text()}</Text>
		{#if sendingStatus === 'sent'}
			<Row class="gap-2 items-center">
				<Text class="!text-green-500">
					{$LL.component.FoundPetButton.Modal.sent()}
				</Text>
				<Icon class="w-5 h-5 child:fill-green-500">
					<IconCheck></IconCheck>
				</Icon>
			</Row>
		{:else}
			<Button on:click={sendLocation}>
				{#if sendingStatus === 'sending'}
					<Loading></Loading>
				{:else}
					{$LL.component.FoundPetButton.Modal.buttonLabel()}
				{/if}
			</Button>
		{/if}
	</Modal>
{/if}
