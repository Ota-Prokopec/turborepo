<script lang="ts">
	import PetNameInput from '$lib/components/MyPetsComponents/PetNameInput.svelte'
	import PetAddressInput from '$lib/components/MyPetsComponents/PetAddressInput.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import { type TPetData } from '@repo/my-pets-tstypes'
	import { Modal } from 'flowbite-svelte'
	import PetTypeInput from '$lib/components/MyPetsComponents/PetTypeInput.svelte'

	export let open = false

	const data: TPetData = {
		petAddress: '',
		petName: '',
		petId: 'new Id',
		petType: 'cat',
	}
</script>

<Modal title={$LL.component.CreateNewPetModal.title()} bind:open size="xs">
	<PetTypeInput bind:value={data.petType}></PetTypeInput>
	<PetNameInput bind:value={data.petName}></PetNameInput>
	<PetAddressInput bind:value={data.petAddress}></PetAddressInput>
</Modal>
