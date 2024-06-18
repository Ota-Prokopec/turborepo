<script lang="ts">
	import { goto } from '$app/navigation'
	import Right from '$lib/components/Common/Right.svelte'
	import ErrorModal from '$lib/components/MyPetsComponents/ErrorModal.svelte'
	import SavedModal from '$lib/components/MyPetsComponents/SavedModal.svelte'
	import SavingModal from '$lib/components/MyPetsComponents/SavingModal.svelte'
	import lsStore from '$lib/utils/lsStore'
	import { sdk } from '$src/graphql/sdk'
	import LL from '$src/i18n/i18n-svelte'
	import { zodCreatingPetData, type TCreatePetData } from '@repo/my-pets-tstypes'
	import { Button } from 'flowbite-svelte'
	import CreatePetModalSkeleton from './CreatePetModalSkeleton.svelte'
	import RequiredFieldsEmptlyPetCreatingErrorModal from './RequiredFieldsEmptlyPetCreatingErrorModal.svelte'

	export let open = false
	export let savingState:
		| null
		| 'saving'
		| 'saved'
		| 'error'
		| 'required-fields-empty-error' = null

	let data: TCreatePetData = {
		petAddress: { petAddress: '', petAddressCoords: $lsStore.usersLocation ?? [0, 0] },
		petName: '',
		petType: 'dog',
		petAllergens: [],
		ownerPhoneNumber: '',
		petTreating: '',
		petGender: 'female',
		petDescriptionCustomFields: [{ text: '', title: '' }],
		petPicture: '',
		petBirthDate: new Date(Date.now()),
		petWeight: undefined,
	}

	const save = async () => {
		savingState = 'saving'

		let dataToSave: typeof data | null = null

		try {
			dataToSave = zodCreatingPetData.parse(data)
		} catch (error) {
			savingState = 'required-fields-empty-error'
			return
		}

		try {
			if (!dataToSave) throw new Error('not all required fields are full')
			await sdk.createPet({
				input: {
					...dataToSave,
					petAllergens: data.petAllergens.filter((allergen) => allergen.length),
					petDescriptionCustomFields: dataToSave.petDescriptionCustomFields.filter(
						(field) => field.text.length && field.title.length,
					),
				},
			})
			savingState = 'saved'
		} catch (error) {
			savingState = 'error'
		}
	}
</script>

<CreatePetModalSkeleton {open} title={$LL.component.CreateNewPetModal.title()} bind:data>
	<svelte:fragment slot="alerts">
		{#if savingState === 'saving'}
			<SavingModal></SavingModal>
		{:else if savingState === 'error'}
			<ErrorModal></ErrorModal>
		{:else if savingState === 'saved'}
			<SavedModal
				on:goBack={() => {
					goto('/', { invalidateAll: false })
				}}
			></SavedModal>
		{:else if savingState === 'required-fields-empty-error'}
			<RequiredFieldsEmptlyPetCreatingErrorModal
			></RequiredFieldsEmptlyPetCreatingErrorModal>
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="bottom">
		<Right>
			<Button on:click={save} color="green"
				>{$LL.component.CreateNewPetModal.saveButtonLabel()}</Button
			>
		</Right>
	</svelte:fragment>
</CreatePetModalSkeleton>
