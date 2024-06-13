<script lang="ts">
	import { PUBLIC_MAP_TILER_API_KEY } from '$env/static/public'
	import { lsStore } from '$lib/utils/lsStore'
	import type { Base64, Coords } from '@repo/ts-types'
	import { createEventDispatcher, onMount } from 'svelte'
	import {
		FillExtrusionLayer,
		GeolocateControl,
		MapLibre,
		ZoomRange,
		type Map,
	} from 'svelte-maplibre'
	import { twMerge } from 'tailwind-merge'
	import FullPageLoading from '../Common/FullPageLoading.svelte'
	import { MapLibreGL, IControl, NavigationControl } from 'maplibre-gl'

	const dispatch = createEventDispatcher<{
		load: { userCenter: Coords }
		dblclick: { dblclickLocation: Coords }
		moveend: { moveEndLocation: Coords }
	}>()

	export let map: Map | undefined = undefined
	export let userCenter: Coords | undefined | null = $lsStore.usersLocation
	export let disableGeolocation = false
	export let activeZoomRange = false
	$: usersLocation = $lsStore.usersLocation
	export let interactive = true

	export let zoom: number = 16
	export let maxZoom: number | undefined = undefined
	export let minZoom: number | undefined = undefined
	export let deg = 0
	let style = `https://api.maptiler.com/maps/4f1c74c8-1b8c-4deb-b478-1f58653a6389/style.json?key=${PUBLIC_MAP_TILER_API_KEY}`

	//events

	$: map?.on('dblclick', (e) =>
		dispatch('dblclick', { dblclickLocation: [e.lngLat.lat, e.lngLat.lng] }),
	)
	$: map?.on('moveend', (e) => {
		const mapBoxCenter = e.target.getCenter()
		if (!mapBoxCenter) return
		dispatch('moveend', { moveEndLocation: [mapBoxCenter.lat, mapBoxCenter.lng] })
	})

	$: map?.scrollZoom.enable({ around: 'center' })

	let className = ''
	export { className as class }
</script>

<div class={twMerge('w-full h-full relative', className)}>
	{#if userCenter}
		<MapLibre
			{interactive}
			{style}
			{maxZoom}
			{minZoom}
			bind:map
			center={[userCenter[1], userCenter[0]]}
			{zoom}
			on:click
			bind:pitch={deg}
			on:zoom={(e) => {
				zoom = e.detail.map.getZoom()
			}}
			on:load={(e) => {
				if (!userCenter) throw new Error('center is not defined')
				dispatch('load', { userCenter })
			}}
		>
			{#if !disableGeolocation}
				<GeolocateControl
					position="top-left"
					positionOptions={{ enableHighAccuracy: true }}
					trackUserLocation
					showAccuracyCircle={false}
					showUserLocation
				/>
			{/if}

			<FillExtrusionLayer
				source="maptiler_planet"
				sourceLayer="building"
				beforeLayerType={(l) => l.type === 'symbol' && !!l.paint?.['text-color']}
				minzoom={14}
				paint={{
					// Show lower buildings in green, higher in red.
					'fill-extrusion-color': [
						'interpolate',
						['linear'],
						['get', 'render_height'],
						0,
						'#0a0',
						70,
						'#a00',
					],

					// use an 'interpolate' expression to add a smooth transition effect to the
					// buildings as the user zooms in
					'fill-extrusion-height': [
						'interpolate',
						['linear'],
						['zoom'],
						14,
						0,
						14.05,
						['get', 'render_height'],
					],
					'fill-extrusion-base': [
						'interpolate',
						['linear'],
						['zoom'],
						14,
						0,
						14.05,
						['get', 'render_min_height'],
					],
					'fill-extrusion-opacity': 0.6,
				}}
			/>

			<slot />
		</MapLibre>
	{:else}
		<FullPageLoading />
	{/if}
</div>

<style>
	:global(.mapboxgl-marker) {
		cursor: pointer;
	}
	:global(.mapboxgl-ctrl-logo) {
		display: none !important;
	}
	:global(.mapboxgl-ctrl-bottom-right) {
		display: none !important;
	}
	:global(.maplibregl-compact-show) {
		display: none !important;
	}
	:global(.maplibregl-compact) {
		display: none !important;
	}
</style>
