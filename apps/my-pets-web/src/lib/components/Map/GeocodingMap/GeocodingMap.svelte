<script lang="ts">
	import type { Coords } from '@repo/ts-types'
	import Map from '../Map.svelte'
	import Geocoding from '../Geocoding/Geocoding.svelte'
	import Icon from '../../Common/Icon.svelte'
	import IconMagnifyingGlass from '../../Icons/IconMagnifyingGlass.svelte'
	import GeocodingMapDrawer from './GeocodingMapDrawer.svelte'

	export let userCenter: Coords | undefined = undefined

	let searchingHidden = true

	let className = ''
	export { className as class }
</script>

<Map class={className} on:dblclick on:moveend bind:userCenter>
	<Icon
		on:click={() => (searchingHidden = false)}
		class="child:w-8 child:h-8 absolute top-0 right-0 m-4 child:fill-black"
	>
		<IconMagnifyingGlass />
	</Icon>
	{#if !searchingHidden}
		<GeocodingMapDrawer
			on:select={(e) => {
				userCenter = e.detail.location
				searchingHidden = true
			}}
			bind:hidden={searchingHidden}
		/>
	{/if}

	<slot />
</Map>
