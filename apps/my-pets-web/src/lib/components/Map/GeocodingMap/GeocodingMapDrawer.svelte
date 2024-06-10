<script lang="ts">
	import Drawer from '$lib/components/Common/Drawer.svelte'
	import type { Coords } from '@repo/ts-types'
	import Geocoding from '../Geocoding/Geocoding.svelte'
	import { twMerge } from 'tailwind-merge'

	export let hidden: boolean
	export let searchingLocation: Coords | undefined = undefined
	export let searchingText = ''

	let className = ''
	export { className as class }
</script>

<Drawer bind:hidden placement="auto" class={twMerge('h-full mobile:w-full', className)}>
	<Geocoding
		class="mt-[32px]"
		bind:searchingText
		on:clear={() => (searchingLocation = undefined)}
		on:select
	/>
</Drawer>
