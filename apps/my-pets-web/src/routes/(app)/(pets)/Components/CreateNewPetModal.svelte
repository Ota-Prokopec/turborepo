<script lang="ts">
	import PetNameInput from '$lib/components/MyPetsComponents/PetNameInput.svelte'
	import PetAddressInput from '$lib/components/MyPetsComponents/PetAddressInput.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import { type TPetData } from '@repo/my-pets-tstypes'
	import { Modal } from 'flowbite-svelte'
	import PetTypeInput from '$lib/components/MyPetsComponents/PetTypeInput.svelte'
	import PetAllergensInput from '$lib/components/MyPetsComponents/PetAllergensInput.svelte'
	import OwnerPhoneNumberInput from '$lib/components/MyPetsComponents/OwnerPhoneNumberInput.svelte'
	import PetTreatInput from '$lib/components/MyPetsComponents/PetTreatInput.svelte'
	import PetGenderInput from '$lib/components/MyPetsComponents/PetGenderInput.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import Line from '$lib/components/Common/Line.svelte'
	import PetCustomTextInput from '$lib/components/MyPetsComponents/PetCustomTextInput.svelte.svelte'

	export let open = false

	const data: TPetData = {
		petAddress: '',
		petName: '',
		petId: 'new Id',
		petType: 'dog',
		petAllergens: [],
		ownerPhoneNumber: '',
		petTreating: '',
		petGender: 'female',
		customFields: [{ text: '', title: '' }],
	}
</script>

<Modal
	class="relative"
	title={$LL.component.CreateNewPetModal.title()}
	bind:open
	size="xs"
>
	<Row class="gap-4 items-center">
		<PetTypeInput bind:value={data.petType}></PetTypeInput>
		<Line class="h-6 w-[2px]"></Line>
		<PetGenderInput bind:value={data.petGender}></PetGenderInput>
	</Row>

	<PetNameInput bind:value={data.petName}></PetNameInput>
	<PetAddressInput bind:value={data.petAddress}></PetAddressInput>
	<OwnerPhoneNumberInput bind:value={data.ownerPhoneNumber}></OwnerPhoneNumberInput>
	<PetAllergensInput></PetAllergensInput>
	<PetTreatInput maxInputLength={500} bind:value={data.petTreating}></PetTreatInput>
	<PetCustomTextInput fields={data.customFields} aboutMaxLength={500}
	></PetCustomTextInput>
</Modal>
