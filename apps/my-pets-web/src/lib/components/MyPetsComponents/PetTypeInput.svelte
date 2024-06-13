<script lang="ts">
	import Icon from '../Common/Icon.svelte'
	import Tabs from '../Common/Tabs.svelte'
	import IconCat from '../Icons/IconCat.svelte'
	import IconDog from '../Icons/IconDog.svelte'

	const items = [
		{
			title: '',
			key: 'dog',
		},
		{
			title: '',
			key: 'cat',
		},
	] as const

	export let value: (typeof items)[number]['key'] = 'dog'
</script>

<Tabs class="w-min bg-black" let:key bind:active={value} {items}>
	<Icon class="w-6 h-6 child:fill-white">
		{#if key === 'cat'}
			<IconCat></IconCat>
		{:else}
			<IconDog></IconDog>
		{/if}
	</Icon>
</Tabs>
