<script lang="ts">
	import Column from '$lib/components/Common/Column.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import { Modal } from 'flowbite-svelte'
</script>

<Modal color="red" class=" h-[160px] max-w-full max-h-full z-50" open>
	<Column class="w-full h-full flex justify-center items-center">
		<Text class="text-red-500 font-bold"
			>{$LL.component.RequiredFieldsEmptlyPetCreatingErrorModal.title()}</Text
		>
		<Text class="text-red-500"
			>{$LL.component.RequiredFieldsEmptlyPetCreatingErrorModal.text()}</Text
		>
	</Column>
</Modal>
