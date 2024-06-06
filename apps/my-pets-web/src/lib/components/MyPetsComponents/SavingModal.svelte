<script lang="ts">
	import { Modal } from 'flowbite-svelte'
	import Loading from '../Common/Loading.svelte'
	import Column from '../Common/Column.svelte'
	import Text from '../Common/Text.svelte'
	import LL from '$src/i18n/i18n-svelte'
</script>

<Modal class="w-[200px] h-[160px] max-w-full max-h-full z-50" open dismissable={false}>
	<Column class="w-full h-full flex justify-center items-center">
		<Text>{$LL.component.SavingModal.label()}</Text>
		<Loading></Loading>
	</Column>
</Modal>
