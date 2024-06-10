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
	import { type GraphqlDocument } from '@repo/appwrite-types'
	import {
		type TCreatePetData,
		zodCreatingPetData,
		type TPetData,
	} from '@repo/my-pets-tstypes'
	import { urlToBase64 } from '@repo/utils'
	import { Button, Modal } from 'flowbite-svelte'
	import { createEventDispatcher } from 'svelte'
	import RequiredFieldsEmptlyPetCreatingErrorModal from './RequiredFieldsEmptlyPetCreatingErrorModal.svelte'

	const dispatch = createEventDispatcher<{ returnBack: undefined }>()

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

	let updatingData: TCreatePetData = currentData

	const update = async () => {
		updatingState = 'updating'

		try {
			updatingData = zodCreatingPetData.parse(updatingData)

			await sdk.updatePet({
				petId: currentData._id,
				data: {
					...updatingData,
					petPicture: await urlToBase64(updatingData.petPicture),
				},
			})

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
		<PetTypeInput bind:value={updatingData.petType}></PetTypeInput>
		<Line class="h-6 w-[2px]"></Line>
		<PetGenderInput bind:value={updatingData.petGender}></PetGenderInput>
	</Row>

	<PetPictureInput
		src={updatingData.petPicture}
		on:image={(e) => (updatingData.petPicture = e.detail.base64)}
	></PetPictureInput>

	<PetNameInput bind:value={updatingData.petName}></PetNameInput>
	<PetAddressInput bind:value={updatingData.petAddress}></PetAddressInput>
	<OwnerPhoneNumberInput bind:value={updatingData.ownerPhoneNumber}
	></OwnerPhoneNumberInput>
	<PetAllergensInput></PetAllergensInput>
	<PetTreatInput maxInputLength={500} bind:value={updatingData.petTreating}
	></PetTreatInput>
	<PetCustomTextInput
		fields={updatingData.petDescriptionCustomFields}
		aboutMaxLength={500}
	></PetCustomTextInput>
	<Right>
		<Button on:click={update} color="green"
			>{$LL.component.UpdatePetModal.saveButtonLabel()}</Button
		>
	</Right>
</Modal>
