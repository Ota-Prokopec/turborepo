<script lang="ts">
	import { sdk } from '$src/graphql/sdk'
	import type { GraphqlDocument } from '@repo/appwrite-types'
	import type { TPetData } from '@repo/my-pets-tstypes'
	import { Button, Modal } from 'flowbite-svelte'
	import Center from '../Common/Center.svelte'
	import Column from '../Common/Column.svelte'
	import Text from '../Common/Text.svelte'
	import PincodeInput from '../Inputs/PincodeInput.svelte'
	import DoneModal from './DoneModal.svelte'
	import ErrorModal from './ErrorModal.svelte'
	import LoadingModal from './LoadingModal.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import Row from '../Common/Row.svelte'
	import Icon from '../Common/Icon.svelte'
	import IconTag from '../Icons/IconTag.svelte'
	import { goto } from '$app/navigation'
	import ButtonWithIcon from '../Buttons/ButtonWithIcon.svelte'
	import IconQRcode from '../Icons/IconQRcode.svelte'

	export let petData: GraphqlDocument<TPetData>

	let modalOpen = false

	let passCode: string = ''
	let status: 'updating' | 'updated' | 'error' | null = null

	const updateTag = async () => {
		try {
			status = 'updating'

			petData.linkId = (
				await sdk.updatePetIdTranslation({
					input: {
						petId: petData._id,
						passCode: passCode,
					},
				})
			).updatePetIdTranslation.linkId

			status = 'updated'
		} catch (error) {
			status = 'error'
		}
	}
</script>

<Button on:click={() => (modalOpen = true)}>
	<Row class="gap-2 items-center">
		{$LL.component.UpdatePetIdTranslation.buttonLabel()}
		<Icon class="w-4 h-4">
			<IconTag></IconTag>
		</Icon>
	</Row>
</Button>

<Modal title={$LL.component.UpdatePetIdTranslation.modal.title()} bind:open={modalOpen}>
	<Column class="">
		<Text>{$LL.component.UpdatePetIdTranslation.modal.text()}</Text>

		<Center class="h-min">
			<PincodeInput size={5} bind:value={passCode}></PincodeInput>
		</Center>
		<ButtonWithIcon icon={IconQRcode} on:click={updateTag}
			>{$LL.component.UpdatePetIdTranslation.modal.updateTagButtonLabel()}</ButtonWithIcon
		>
	</Column>
</Modal>

{#if status === 'error'}
	<ErrorModal>{$LL.component.UpdatePetIdTranslation.error()}</ErrorModal>
{:else if status === 'updating'}
	<LoadingModal></LoadingModal>
{:else if status === 'updated'}
	<DoneModal
		on:goBack={() => {
			modalOpen = false
			status = null
		}}
	></DoneModal>
{/if}
