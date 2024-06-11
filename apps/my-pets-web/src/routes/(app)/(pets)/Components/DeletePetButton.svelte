<script lang="ts">
	import Icon from '$lib/components/Common/Icon.svelte'
	import Right from '$lib/components/Common/Right.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import IconBan from '$lib/components/Icons/IconBan.svelte'
	import IconEdit from '$lib/components/Icons/IconEdit.svelte'
	import DeletedModal from '$lib/components/MyPetsComponents/DeletedModal.svelte'
	import DeletingModal from '$lib/components/MyPetsComponents/DeletingModal.svelte'
	import ErrorModal from '$lib/components/MyPetsComponents/ErrorModal.svelte'
	import { sdk } from '$src/graphql/sdk'
	import LL from '$src/i18n/i18n-svelte'
	import { Button, Modal } from 'flowbite-svelte'
	import { createEventDispatcher } from 'svelte'
	import { twMerge } from 'tailwind-merge'

	const dispatch = createEventDispatcher<{ deleted: undefined }>()

	export let petId: string
	export let modalOpen = false
	export let deletingState: 'deleted' | 'deleting' | 'error' | null = null

	const deletePet = async (petId: string) => {
		try {
			deletingState = 'deleting'
			await sdk.deletePet({ petId })
			deletingState = 'deleted'
		} catch (error) {
			deletingState = 'error'
		}
	}

	let className = ''
	export { className as class }
</script>

<Button
	on:click={() => (modalOpen = true)}
	on:click
	class={twMerge(className)}
	color="red"
>
	<Row class="gap-1 items-center">
		<Text>{$LL.component.DeletePetButton.label()}</Text>
		<Icon class="w-3 h-3">
			<IconBan></IconBan>
		</Icon>
	</Row>
</Button>

<Modal
	classHeader="bg-red-200"
	color="red"
	bind:open={modalOpen}
	title={$LL.component.DeletePetButton.modal.title()}
>
	<Text>{$LL.component.DeletePetButton.modal.text()}</Text>
	<Right>
		<Button
			on:click={() => {
				deletePet(petId)
			}}
			color="red">{$LL.component.DeletePetButton.label()}</Button
		>
	</Right>
</Modal>

{#if deletingState === 'error'}
	<ErrorModal></ErrorModal>
{:else if deletingState === 'deleting'}
	<DeletingModal></DeletingModal>
{:else if deletingState === 'deleted'}
	<DeletedModal
		on:return={() => {
			dispatch('deleted')
		}}
	></DeletedModal>
{/if}
