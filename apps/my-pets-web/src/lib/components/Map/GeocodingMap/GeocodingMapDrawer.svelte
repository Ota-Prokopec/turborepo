<script lang="ts">
	import Drawer from '$lib/components/Common/Drawer.svelte'
	import type { Coords } from '@repo/ts-types'
	import Geocoding from '../Geocoding/Geocoding.svelte'

	export let hidden: boolean
	export let searchingLocation: Coords | undefined = undefined
	export let searchingText = ''
</script>

<Drawer bind:hidden placement="auto" class="h-full mobile:w-full">
	<Geocoding
		class="mt-[32px]"
		bind:searchingText
		on:clear={() => (searchingLocation = undefined)}
		on:select
	/>
</Drawer>
