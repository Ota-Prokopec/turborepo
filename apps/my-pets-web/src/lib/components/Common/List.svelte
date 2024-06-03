<script lang="ts">
	import Card from './Card.svelte'
	import Column from './Column.svelte'

	type Item = $$Generic

	export let items: Item[]
</script>

<Column class="w-full h-auto gap-0">
	{#each items as item}
		<Card>
			<slot {item} />
		</Card>
	{/each}
</Column>
