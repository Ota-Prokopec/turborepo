<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { twMerge } from 'tailwind-merge'
	type TKey = $$Generic<string>

	const dispatch = createEventDispatcher<{ click: { key: TKey } }>()

	$: dispatch('click', { key: active })

	export let items: { key: TKey; title: string }[]
	export let active: TKey
</script>

<div role="tablist" class="tabs tabs-boxed">
	{#each items as { key, title }}
		<button
			on:click={() => (active = key)}
			role="tab"
			class={twMerge('tab', active === key ? 'tab-active' : '')}>{title}</button
		>
	{/each}
</div>
