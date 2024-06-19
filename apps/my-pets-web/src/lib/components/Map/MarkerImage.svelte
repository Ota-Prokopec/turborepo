<script lang="ts">
	import type { Coords } from '@repo/ts-types'
	import { twMerge } from 'tailwind-merge'
	import Marker from './Marker.svelte'

	export let location: Coords
	export let imgSrc: URL | string
	export let zoom: number = 14

	const avatarURL = imgSrc as unknown as string

	let className = ''
	export { className as class }

	let size: string = 'w-12 h-12'
	$: size = zoom > 18 ? 'w-20 h-20' : zoom > 10 ? 'w-12 h-12' : 'h-8 w-8'
</script>

<Marker {location}>
	<button on:click class={twMerge(size, className)}>
		<img class={twMerge(size, className)} alt="" src={avatarURL} />
	</button>
	<slot />
</Marker>
