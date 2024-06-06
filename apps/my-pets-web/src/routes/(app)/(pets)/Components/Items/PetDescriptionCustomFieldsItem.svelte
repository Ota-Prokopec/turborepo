<script lang="ts">
	import Card from '$lib/components/Common/Card.svelte'
	import Column from '$lib/components/Common/Column.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import { type TPetData } from '@repo/my-pets-tstypes'

	let modalOpen = false
	export let fields: TPetData['petDescriptionCustomFields']
</script>

<Column class="justify-between flex gap-2">
	{#each fields as { title, text }}
		<Card>
			<Column>
				<Text class="font-bold">{title}</Text>
				<Text class="ml-4">{text}</Text>
			</Column>
		</Card>
	{/each}
</Column>
