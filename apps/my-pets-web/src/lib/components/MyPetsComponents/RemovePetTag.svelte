<script lang="ts">
	import LL from '$src/i18n/i18n-svelte'
	import { Button, Modal } from 'flowbite-svelte'
	import ButtonWithIcon from '../Buttons/ButtonWithIcon.svelte'
	import IconBan from '../Icons/IconBan.svelte'
	import Text from '../Common/Text.svelte'
	import Right from '../Common/Right.svelte'
	import DoneModal from './DoneModal.svelte'
	import DeletingModal from './DeletingModal.svelte'
	import ErrorModal from './ErrorModal.svelte'
	import Loading from '../Common/Loading.svelte'
	import { sdk } from '$src/graphql/sdk'
	import { goto } from '$app/navigation'
	import { type TPetData } from '@repo/my-pets-tstypes'
	import { type GraphqlDocument } from '@repo/appwrite-types'

	export let petData: GraphqlDocument<TPetData>

	let modalOpen = false
	let state: 'removing' | 'removed' | 'error' | null = null

	const remove = async () => {
		try {
			state = 'removing'

			petData.linkId = (
				await sdk.removePetIdTranslation({ petId: petData._id })
			).removePetIdTranslation.linkId

			state = 'removed'
		} catch (error) {
			state = 'error'
		}
	}
</script>

<ButtonWithIcon
	on:click={() => (modalOpen = true)}
	props={{ color: 'red' }}
	icon={IconBan}
>
	{$LL.component.RemovePetTag.buttonLabel()}
</ButtonWithIcon>

<Modal title={$LL.component.RemovePetTag.modal.title()} bind:open={modalOpen}>
	<Text>{$LL.component.RemovePetTag.modal.text()}</Text>
	<Right>
		<ButtonWithIcon on:click={remove} props={{ color: 'red' }} icon={IconBan}>
			{#if state === 'removing'}
				<Loading></Loading>
			{:else}
				{$LL.component.RemovePetTag.buttonLabel()}
			{/if}
		</ButtonWithIcon>
	</Right>
</Modal>

{#if state === 'removed'}
	<DoneModal
		on:goBack={() => {
			state = null
			modalOpen = false
		}}
	></DoneModal>
{/if}
{#if state === 'error'}
	<ErrorModal></ErrorModal>
{/if}
