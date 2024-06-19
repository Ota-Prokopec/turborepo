<script lang="ts">
	import { goto } from '$app/navigation'
	import Right from '$lib/components/Common/Right.svelte'
	import ErrorModal from '$lib/components/MyPetsComponents/ErrorModal.svelte'
	import SavedModal from '$lib/components/MyPetsComponents/SavedModal.svelte'
	import SavingModal from '$lib/components/MyPetsComponents/SavingModal.svelte'
	import { sdk } from '$src/graphql/sdk'
	import LL from '$src/i18n/i18n-svelte'
	import { type GraphqlDocument } from '@repo/appwrite-types'
	import {
		zodCreatingPetData,
		type TCreatePetData,
		type TPetData,
	} from '@repo/my-pets-tstypes'
	import { urlToBase64 } from '@repo/utils'
	import { Button } from 'flowbite-svelte'
	import CreatePetModalSkeleton from './CreatePetModalSkeleton.svelte'
	import RequiredFieldsEmptlyPetCreatingErrorModal from '../../../../../lib/components/MyPetsComponents/RequiredFiledsEmptyErrorModal.svelte'

	export let open = false
	export let updatingState:
		| null
		| 'updating'
		| 'updated'
		| 'error'
		| 'required-fields-empty-error' = null

	export let currentData: Omit<
		GraphqlDocument<TPetData>,
		'petDescriptionCustomFields'
	> & {
		petDescriptionCustomFields: GraphqlDocument<
			TPetData['petDescriptionCustomFields'][number]
		>[]
	}

	let updatingData = currentData

	const update = async () => {
		updatingState = 'updating'

		try {
			const dataToUpdate = zodCreatingPetData.parse(updatingData)

			await sdk.updatePet({
				petId: currentData._id,
				data: {
					...dataToUpdate,
					petPicture: await urlToBase64(dataToUpdate.petPicture),
				},
			})
			updatingState = 'updated'
		} catch (error) {
			updatingState = 'error'
		}
	}
</script>

<CreatePetModalSkeleton
	{open}
	title={$LL.component.CreateNewPetModal.title()}
	bind:data={updatingData}
>
	<svelte:fragment slot="alerts">
		{#if updatingState === 'updating'}
			<SavingModal></SavingModal>
		{:else if updatingState === 'error'}
			<ErrorModal></ErrorModal>
		{:else if updatingState === 'updated'}
			<SavedModal
				on:goBack={() => (open = false)}
				on:goBack={() => {
					goto('/', { replaceState: true })
				}}
			></SavedModal>
		{:else if updatingState === 'required-fields-empty-error'}
			<RequiredFieldsEmptlyPetCreatingErrorModal
			></RequiredFieldsEmptlyPetCreatingErrorModal>
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="bottom">
		<Right>
			<Button on:click={update} color="green"
				>{$LL.component.UpdatePetModal.saveButtonLabel()}</Button
			>
		</Right>
	</svelte:fragment>
</CreatePetModalSkeleton>
