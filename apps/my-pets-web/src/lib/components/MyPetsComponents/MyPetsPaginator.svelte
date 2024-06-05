<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import Icon from '../Common/Icon.svelte'
	import Row from '../Common/Row.svelte'
	import IconAdd from '../Icons/IconAdd.svelte'
	import IconXMark from '../Icons/IconXMark.svelte'

	const dispatch = createEventDispatcher<{ add: undefined; remove: undefined }>()
</script>

<Row class="gap-2 justify-center items-center">
	<Icon
		on:click={() => {
			dispatch('remove')
		}}
		class="w-5 h-5"
	>
		<IconXMark></IconXMark>
	</Icon>
	<Icon
		on:click={() => {
			dispatch('add')
		}}
		class="w-6 h-6"
	>
		<IconAdd></IconAdd>
	</Icon>
</Row>
