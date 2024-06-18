<script lang="ts">
	import { goto } from '$app/navigation'
	import Line from '$lib/components/Common/Line.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import OwnerPhoneNumberInput from '$lib/components/MyPetsComponents/OwnerPhoneNumberInput.svelte'
	import PetAddressInput from '$lib/components/MyPetsComponents/PetAddressInput.svelte'
	import PetAgeInput from '$lib/components/MyPetsComponents/PetAgeInput.svelte'
	import PetAllergensInput from '$lib/components/MyPetsComponents/PetAllergensInput.svelte'
	import PetCustomTextInput from '$lib/components/MyPetsComponents/PetCustomTextInput.svelte.svelte'
	import PetGenderInput from '$lib/components/MyPetsComponents/PetGenderInput.svelte'
	import PetNameInput from '$lib/components/MyPetsComponents/PetNameInput.svelte'
	import PetPictureInput from '$lib/components/MyPetsComponents/PetPictureInput.svelte'
	import PetTreatInput from '$lib/components/MyPetsComponents/PetTreatInput.svelte'
	import PetTypeInput from '$lib/components/MyPetsComponents/PetTypeInput.svelte'
	import PetWeightInput from '$lib/components/MyPetsComponents/PetWeightInput.svelte'
	import { type TCreatePetData } from '@repo/my-pets-tstypes'
	import { Modal } from 'flowbite-svelte'

	export let open = false

	export let data: TCreatePetData
	export let title: string
</script>

<Modal
	on:close={() => {
		goto('/', { invalidateAll: true })
	}}
	class="relative"
	{title}
	bind:open
>
	<slot name="alerts" />

	<Row class="gap-4 items-center">
		<PetTypeInput bind:value={data.petType}></PetTypeInput>
		<Line class="h-6 w-[2px]"></Line>
		<PetGenderInput bind:value={data.petGender}></PetGenderInput>
	</Row>

	<PetPictureInput
		src={data.petPicture}
		on:image={(e) => {
			data.petPicture = e.detail.base64
		}}
	></PetPictureInput>

	<PetNameInput bind:value={data.petName}></PetNameInput>
	<PetAgeInput bind:date={data.petBirthDate}></PetAgeInput>
	<PetWeightInput bind:value={data.petWeight}></PetWeightInput>
	<OwnerPhoneNumberInput bind:value={data.ownerPhoneNumber}></OwnerPhoneNumberInput>
	<PetAddressInput
		coords={data.petAddress.petAddressCoords}
		value={data.petAddress.petAddress}
		on:change={(e) => {
			data.petAddress.petAddress = e.detail.value
			data.petAddress.petAddressCoords = e.detail.coords
		}}
	></PetAddressInput>
	<PetAllergensInput bind:allergens={data.petAllergens}></PetAllergensInput>
	<PetTreatInput maxInputLength={500} bind:value={data.petTreating}></PetTreatInput>
	<PetCustomTextInput bind:fields={data.petDescriptionCustomFields} aboutMaxLength={500}
	></PetCustomTextInput>

	<slot name="bottom" />
</Modal>
