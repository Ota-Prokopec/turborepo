<script lang="ts">
	import Icon from '../Common/Icon.svelte'
	import Row from '../Common/Row.svelte'
	import Text from '../Common/Text.svelte'
	import IconEdit from '../Icons/IconEdit.svelte'

	export let value: string
	export let modalOpen = false
</script>

<Row class="w-full h-auto p-4 justify-between  border-gray-500 rounded-2xl items-center">
	<Text class="text-xl">{value}</Text>
	<Icon on:click={() => (modalOpen = true)} class="w-4 h-4"><IconEdit /></Icon>
</Row>
