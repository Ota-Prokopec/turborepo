<script lang="ts">
	import Icon from '$lib/components/Common/Icon.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import IconEdit from '$lib/components/Icons/IconEdit.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import { Button } from 'flowbite-svelte'
	import { twMerge } from 'tailwind-merge'

	let className = ''
	export { className as class }
</script>

<Button on:click class={twMerge(className)} color="blue">
	<Row class="gap-1 items-center">
		<Text>{$LL.component.EditPetButton.label()}</Text>
		<Icon class="w-3 h-3">
			<IconEdit></IconEdit>
		</Icon>
	</Row>
</Button>
