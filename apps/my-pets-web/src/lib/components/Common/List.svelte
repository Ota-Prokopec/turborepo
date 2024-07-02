<script lang="ts">
	import { twMerge } from 'tailwind-merge'
	import Card from './Card.svelte'
	import Column from './Column.svelte'

	type Item = $$Generic

	export let items: Item[]

	let className = ''
	export { className as class }
	export let cardClass = ''
</script>

<Column class={twMerge('w-full h-auto gap-0', className)}>
	{#each items as item}
		<Card class={cardClass}>
			<slot {item} />
		</Card>
	{/each}
</Column>
