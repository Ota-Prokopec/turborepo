<script lang="ts">
	import Text from './Text.svelte'

	import { Dropdown, DropdownItem } from 'flowbite-svelte'

	import { createEventDispatcher } from 'svelte'
	import { twMerge } from 'tailwind-merge'
	import Icon from './Icon.svelte'
	import IconAnglesRight from '../Icons/IconAnglesRight.svelte'
	type TKey = $$Generic<string>

	const dispatch = createEventDispatcher<{ click: { key: TKey } }>()

	$: dispatch('click', { key: active })

	export let items: Readonly<{ key: TKey; title: string }[]>
	export let active: TKey
	export let maxTabsCountVisible = 3

	let className: string = ''
	export { className as class }
</script>

<div role="tablist" class={twMerge('tabs tabs-boxed', className)}>
	{#each items as { key, title }, i}
		{#if i < maxTabsCountVisible}
			<button
				on:click={() => (active = key)}
				role="tab"
				class={twMerge('tab', active === key ? 'tab-active' : '')}
			>
				<Text class="!text-white">
					<slot {title} {key} />
				</Text>
			</button>
		{/if}
	{/each}
	{#if items.length > maxTabsCountVisible}
		<Icon class="w-5 absolute right-[-20px] top-0 h-full flex items-center">
			<IconAnglesRight></IconAnglesRight>
		</Icon>
	{/if}

	<Dropdown class="tabs tabs-boxed">
		{#each items.slice(maxTabsCountVisible, items.length) as { key, title }, i}
			<DropdownItem
				class={twMerge('tab', active === key ? 'tab-active' : '')}
				on:click={() => (active = key)}
			>
				<Text class="!text-white">
					{title}
				</Text>
			</DropdownItem>
		{/each}
	</Dropdown>
</div>
