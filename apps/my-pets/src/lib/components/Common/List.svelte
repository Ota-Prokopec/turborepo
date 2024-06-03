<script lang="ts">
	import Column from './Column.svelte'
	import Line from './Line.svelte'

	type Item = $$Generic

	export let items: Item[]
</script>

<Column class="w-full h-auto gap-0">
	{#each items as item}
		<slot {item} />
		<Line></Line>
	{/each}
</Column>
