<script lang="ts">
	import EditableItem from '$lib/components/MyPetsComponents/EditableItem.svelte'
	import ItemsEditingModal from '$lib/components/MyPetsComponents/ItemsEditingModal.svelte'
	import LL from '$src/i18n/i18n-svelte'

	let modalOpen = false
	export let petName: string
</script>

<EditableItem bind:modalOpen value={petName}></EditableItem>

<ItemsEditingModal
	bind:value={petName}
	title={$LL.component.PetNameInput.title()}
	bind:open={modalOpen}
></ItemsEditingModal>
