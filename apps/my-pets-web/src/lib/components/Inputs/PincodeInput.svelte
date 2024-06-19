<script lang="ts">
	import { createPinInput } from '@melt-ui/svelte'

	export let value: string[]
	export let size: number = 5

	const {
		elements: { root, input },
		states: { value: storeValue },
	} = createPinInput({
		defaultValue: [],
	})

	$: value = $storeValue
</script>

<div {...$root} use:root class="flex items-center gap-2">
	{#each Array.from({ length: size }) as _}
		<input
			class="size-12 rounded-md bg-white text-center text-lg text-magnum-900 shadow-sm"
			{...$input()}
			use:input
		/>
	{/each}
</div>
