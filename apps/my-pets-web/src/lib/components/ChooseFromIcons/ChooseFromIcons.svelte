<script lang="ts" generics="Key extends string">
	import ChooseFromIconsItem from './ChooseFromIconsItem.svelte'
	import { removeItemsFromArray } from '@repo/utils'
	import { twMerge } from 'tailwind-merge'
	import Row from '../Common/Row.svelte'

	export let data: {
		component: any
		key: Key
	}[]

	export let chosen: Key[] = []

	const change = (key: Key) => {
		if (chosen.includes(key)) remove(key)
		else choose(key)
	}

	const choose = (key: Key) => {
		chosen = [...chosen, key]
	}

	const remove = (key: (typeof data)[number]['key']) => {
		chosen = removeItemsFromArray(chosen, key)
	}

	let className = ''
	export { className as class }
</script>

<Row
	class={twMerge(
		'w-auto p-2 gap-2 justify-between h-auto border border-gray-800 rounded-full',
		className,
	)}
>
	{#each data as icon}
		<ChooseFromIconsItem
			on:click={() => change(icon.key)}
			chosen={chosen.includes(icon.key)}
		>
			<svelte:component this={icon.component} />
		</ChooseFromIconsItem>
	{/each}
</Row>
