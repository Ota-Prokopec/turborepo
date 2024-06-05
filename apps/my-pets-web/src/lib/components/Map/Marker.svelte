<script lang="ts">
	import type { Coords } from '@repo/ts-types'
	import { createEventDispatcher } from 'svelte'
	import { Marker } from 'svelte-maplibre'
	const dispatch = createEventDispatcher<{
		dragend: { location: Coords }
	}>()

	export let location: Coords
	export let draggable: boolean = false

	const onChange = (localLocationValue: Coords) => {
		location = localLocationValue
		dispatch('dragend', { location })
	}

	let className = ''
	export { className as class }
</script>

<Marker
	{draggable}
	on:dragend={(e) => onChange([e.detail.lngLat[1], e.detail.lngLat[0]])}
	class={className}
	lngLat={{ lat: location[0], lon: location[1] }}
>
	<button on:click> <slot /> </button>
</Marker>
