<script lang="ts">
	import LL from '$src/i18n/i18n-svelte'
	import { Button, Modal } from 'flowbite-svelte'
	import Column from '../Common/Column.svelte'
	import Text from '../Common/Text.svelte'
	import Icon from '../Common/Icon.svelte'
	import IconCheck from '../Icons/IconCheck.svelte'
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher<{ goBack: undefined }>()
</script>

<Modal
	color="green"
	class="w-[200px] h-[160px] max-w-full max-h-full z-50"
	open
	dismissable={false}
>
	<Column class="w-full h-full flex justify-center items-center">
		<Text class="text-green-500 font-bold">{$LL.component.SavedModal.label()}</Text>
		<Icon class="w-8 h-8 fill-green-500">
			<IconCheck></IconCheck>
		</Icon>
		<Button
			on:click={() => {
				dispatch('goBack')
			}}>{$LL.component.SavedModal.returningButtonLabel()}</Button
		>
	</Column>
</Modal>
