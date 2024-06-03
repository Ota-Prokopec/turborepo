<script lang="ts">
	import Card from '$lib/components/Common/Card.svelte'
	import Column from '$lib/components/Common/Column.svelte'
	import Icon from '$lib/components/Common/Icon.svelte'
	import Right from '$lib/components/Common/Right.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import IconAdd from '$lib/components/Icons/IconAdd.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import { createEventDispatcher } from 'svelte'
	import CreateNewPetModal from './CreateNewPetModal.svelte'

	const dispatch = createEventDispatcher<{ clickAdd: undefined }>()

	let createNewPetModalOpen = true
</script>

<Card class="bg-gray-200">
	<Column>
		<Text class="text-2xl font-bold">{$LL.component.NoPetFound.title()}</Text>

		<Text>{$LL.component.NoPetFound.message()}</Text>
		<Right>
			<Icon
				on:click={() => (createNewPetModalOpen = true)}
				class="h-10 w-10 fill-green-400"
			>
				<IconAdd></IconAdd>
			</Icon>
		</Right>
	</Column>
</Card>

<CreateNewPetModal bind:open={createNewPetModalOpen}></CreateNewPetModal>
