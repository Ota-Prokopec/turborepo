<script lang="ts">
	import Line from '$lib/components/Common/Line.svelte'
	import Right from '$lib/components/Common/Right.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import ErrorModal from '$lib/components/MyPetsComponents/ErrorModal.svelte'
	import OwnerPhoneNumberInput from '$lib/components/MyPetsComponents/OwnerPhoneNumberInput.svelte'
	import PetAddressInput from '$lib/components/MyPetsComponents/PetAddressInput.svelte'
	import PetAllergensInput from '$lib/components/MyPetsComponents/PetAllergensInput.svelte'
	import PetCustomTextInput from '$lib/components/MyPetsComponents/PetCustomTextInput.svelte.svelte'
	import PetGenderInput from '$lib/components/MyPetsComponents/PetGenderInput.svelte'
	import PetNameInput from '$lib/components/MyPetsComponents/PetNameInput.svelte'
	import PetPictureInput from '$lib/components/MyPetsComponents/PetPictureInput.svelte'
	import PetTreatInput from '$lib/components/MyPetsComponents/PetTreatInput.svelte'
	import PetTypeInput from '$lib/components/MyPetsComponents/PetTypeInput.svelte'
	import SavedModal from '$lib/components/MyPetsComponents/SavedModal.svelte'
	import SavingModal from '$lib/components/MyPetsComponents/SavingModal.svelte'
	import { sdk } from '$src/graphql/sdk'
	import LL from '$src/i18n/i18n-svelte'
	import { zodCreatingPetData, type TCreatePetData } from '@repo/my-pets-tstypes'
	import { Button, Modal } from 'flowbite-svelte'
	import { createEventDispatcher } from 'svelte'
	import RequiredFieldsEmptlyPetCreatingErrorModal from './RequiredFieldsEmptlyPetCreatingErrorModal.svelte'
	import { goto } from '$app/navigation'

	export let open = false
	export let savingState:
		| null
		| 'saving'
		| 'saved'
		| 'error'
		| 'required-fields-empty-error' = null

	const data: TCreatePetData = {
		petAddress: '',
		petName: '',
		petType: 'dog',
		petAllergens: [],
		ownerPhoneNumber: '',
		petTreating: '',
		petGender: 'female',
		petDescriptionCustomFields: [{ text: '', title: '' }],
		petPicture: '',
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

<Modal
	on:close={() => {
		goto('/', { invalidateAll: true })
	}}
	class="relative"
	title={$LL.component.CreateNewPetModal.title()}
	bind:open
>
	{#if savingState === 'saving'}
		<SavingModal></SavingModal>
	{:else if savingState === 'error'}
		<ErrorModal></ErrorModal>
	{:else if savingState === 'saved'}
		<SavedModal
			on:goBack={() => {
				goto('/', { invalidateAll: true })
			}}
		></SavedModal>
	{:else if savingState === 'required-fields-empty-error'}
		<RequiredFieldsEmptlyPetCreatingErrorModal
		></RequiredFieldsEmptlyPetCreatingErrorModal>
	{/if}
	<Row class="gap-4 items-center">
		<PetTypeInput bind:value={data.petType}></PetTypeInput>
		<Line class="h-6 w-[2px]"></Line>
		<PetGenderInput bind:value={data.petGender}></PetGenderInput>
	</Row>

	<PetPictureInput
		on:image={(e) => {
			data.petPicture = e.detail.base64
		}}
	></PetPictureInput>

	<PetNameInput bind:value={data.petName}></PetNameInput>
	<PetAddressInput bind:value={data.petAddress}></PetAddressInput>
	<OwnerPhoneNumberInput bind:value={data.ownerPhoneNumber}></OwnerPhoneNumberInput>
	<PetAllergensInput></PetAllergensInput>
	<PetTreatInput maxInputLength={500} bind:value={data.petTreating}></PetTreatInput>
	<PetCustomTextInput bind:fields={data.petDescriptionCustomFields} aboutMaxLength={500}
	></PetCustomTextInput>
	<Right>
		<Button on:click={save} color="green"
			>{$LL.component.CreateNewPetModal.saveButtonLabel()}</Button
		>
	</Right>
</Modal>