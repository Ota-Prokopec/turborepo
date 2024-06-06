<script lang="ts">
	import Card from '$lib/components/Common/Card.svelte'
	import Column from '$lib/components/Common/Column.svelte'
	import Line from '$lib/components/Common/Line.svelte'
	import Text from '$lib/components/Common/Text.svelte'

	export let title: string

	let className = ''
	export { className as class }
</script>

<Card class={className}>
	<Column>
		<Text class="font-bold">{title}</Text>
		<slot />
	</Column>
</Card>
