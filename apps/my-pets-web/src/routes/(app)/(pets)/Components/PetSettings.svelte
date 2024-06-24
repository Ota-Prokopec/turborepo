<script lang="ts">
	import Column from '$lib/components/Common/Column.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import { Button, Modal } from 'flowbite-svelte'
	import EditPetButton from './EditPetButton.svelte'
	import DeletePetButton from './DeletePetButton.svelte'
	import UpdatePetTag from '$lib/components/MyPetsComponents/UpdatePetTag.svelte'
	import type { TPetData } from '@repo/my-pets-tstypes'
	import type { GraphqlDocument } from '@repo/appwrite-types'
	import { navigate } from '$lib/utils/navigator'
	import Row from '$lib/components/Common/Row.svelte'
	import Icon from '$lib/components/Common/Icon.svelte'
	import IconSettings from '$lib/components/Icons/IconSettings.svelte'
	import RemovePetTag from '$lib/components/MyPetsComponents/RemovePetTag.svelte'

	let modalOpen = false
	export let petData: GraphqlDocument<TPetData>
</script>

<Button on:click={() => (modalOpen = true)} color="dark">
	<Row class="items-center gap-2">
		{$LL.component.PetSettings.buttonLabel()}
		<Icon class="w-4 h-4">
			<IconSettings></IconSettings>
		</Icon>
	</Row>
</Button>

<Modal dismissable title={$LL.component.PetSettings.modal.title()} bind:open={modalOpen}>
	<Column>
		<UpdatePetTag {petData}></UpdatePetTag>
		<RemovePetTag petId={petData._id}></RemovePetTag>
		<EditPetButton
			on:click={() => navigate(`/pet/${petData.linkId}/edit`, { invalidateAll: true })}
			class=""
		></EditPetButton>
		<DeletePetButton
			on:deleted={() => navigate('/', { invalidateAll: true })}
			petId={petData._id}
		></DeletePetButton>
	</Column>
</Modal>
