<script lang="ts">
	import { Modal } from 'flowbite-svelte'
	import Text from '../Common/Text.svelte'
	import LL from '$src/i18n/i18n-svelte'
</script>

<Modal color="red" title={$LL.component.PetNotFound.title()} open>
	<Text>{$LL.component.PetNotFound.message()}</Text>
</Modal>
