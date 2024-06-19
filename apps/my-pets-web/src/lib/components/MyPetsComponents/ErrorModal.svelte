<script lang="ts">
	import LL from '$src/i18n/i18n-svelte'
	import { Modal } from 'flowbite-svelte'
	import Column from '../Common/Column.svelte'
	import Text from '../Common/Text.svelte'
</script>

<Modal color="red" class="w-max h-auto max-w-full max-h-full z-50" open>
	<Column class="w-full h-full flex justify-center items-center">
		<Text class="!text-red-500 font-bold">{$LL.component.ErrorModal.title()}</Text>
		<Text><slot /></Text>
	</Column>
</Modal>
