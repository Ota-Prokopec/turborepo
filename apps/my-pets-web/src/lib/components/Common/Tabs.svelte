<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { twMerge } from 'tailwind-merge'
	type TKey = $$Generic<string>

	const dispatch = createEventDispatcher<{ click: { key: TKey } }>()

	$: dispatch('click', { key: active })

	export let items: Readonly<{ key: TKey; title: string }[]>

	export let active: TKey

	let className: string = ''
	export { className as class }
</script>

<div role="tablist" class={twMerge('tabs tabs-boxed', className)}>
	{#each items as { key, title }}
		<button
			on:click={() => (active = key)}
			role="tab"
			class={twMerge('tab', active === key ? 'tab-active' : '')}
		>
			<slot {key} />
		</button>
	{/each}
</div>
