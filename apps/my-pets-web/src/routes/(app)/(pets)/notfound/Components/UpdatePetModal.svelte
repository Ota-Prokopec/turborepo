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
	import PetTreatInput from '$lib/components/MyPetsComponents/PetTreatInput.svelte'
	import PetTypeInput from '$lib/components/MyPetsComponents/PetTypeInput.svelte'
	import SavedModal from '$lib/components/MyPetsComponents/SavedModal.svelte'
	import SavingModal from '$lib/components/MyPetsComponents/SavingModal.svelte'
	import { sdk } from '$src/graphql/sdk'
	import LL from '$src/i18n/i18n-svelte'
	import { type GraphqlDocument } from '@repo/appwrite-types'
	import { type TPetData } from '@repo/my-pets-tstypes'
	import { Button, Modal } from 'flowbite-svelte'
	import { createEventDispatcher } from 'svelte'
	import RequiredFieldsEmptlyPetCreatingErrorModal from './RequiredFieldsEmptlyPetCreatingErrorModal.svelte'
	import PetPictureInput from '$lib/components/MyPetsComponents/PetPictureInput.svelte'

	const dispatch = createEventDispatcher<{ returnBack: undefined }>()

	export let open = false
	export let updatingState:
		| null
		| 'updating'
		| 'updated'
		| 'error'
		| 'required-fields-empty-error' = null

	export let data: Omit<GraphqlDocument<TPetData>, 'petDescriptionCustomFields'> & {
		petDescriptionCustomFields: GraphqlDocument<
			TPetData['petDescriptionCustomFields'][number]
		>[]
	}

	const update = async () => {
		updatingState = 'updating'

		try {
			await sdk.updatePet({ petId: data._id, data: data })

			updatingState = 'updated'
		} catch (error) {
			updatingState = 'error'
		}
	}
</script>

<Modal
	on:close={() => dispatch('returnBack')}
	class="relative"
	title={$LL.component.UpdatePetModal.title()}
	bind:open
	size="xs"
>
	{#if updatingState === 'updating'}
		<SavingModal></SavingModal>
	{:else if updatingState === 'error'}
		<ErrorModal></ErrorModal>
	{:else if updatingState === 'updated'}
		<SavedModal
			on:return={() => (open = false)}
			on:return={() => {
				dispatch('returnBack')
			}}
		></SavedModal>
	{:else if updatingState === 'required-fields-empty-error'}
		<RequiredFieldsEmptlyPetCreatingErrorModal
		></RequiredFieldsEmptlyPetCreatingErrorModal>
	{/if}
	<Row class="gap-4 items-center">
		<PetTypeInput bind:value={data.petType}></PetTypeInput>
		<Line class="h-6 w-[2px]"></Line>
		<PetGenderInput bind:value={data.petGender}></PetGenderInput>
	</Row>

	<PetPictureInput
		src={data.petPicture}
		on:image={(e) => (data.petPicture = e.detail.base64)}
	></PetPictureInput>

	<PetNameInput bind:value={data.petName}></PetNameInput>
	<PetAddressInput bind:value={data.petAddress}></PetAddressInput>
	<OwnerPhoneNumberInput bind:value={data.ownerPhoneNumber}></OwnerPhoneNumberInput>
	<PetAllergensInput></PetAllergensInput>
	<PetTreatInput maxInputLength={500} bind:value={data.petTreating}></PetTreatInput>
	<PetCustomTextInput fields={data.petDescriptionCustomFields} aboutMaxLength={500}
	></PetCustomTextInput>
	<Right>
		<Button on:click={update} color="green"
			>{$LL.component.UpdatePetModal.saveButtonLabel()}</Button
		>
	</Right>
</Modal>
