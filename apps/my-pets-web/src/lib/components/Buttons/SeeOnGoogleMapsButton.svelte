<script lang="ts">
	import { navigate } from '$lib/utils/navigator'
	import LL from '$src/i18n/i18n-svelte'
	import type { Coords } from '@repo/ts-types'
	import { getLocationUrlOfGoogleMaps } from '@repo/utils'
	import { Button } from 'flowbite-svelte'

	export let coords: Coords

	const goToGoogleMaps = () => {
		navigate(getLocationUrlOfGoogleMaps(coords))
	}
</script>

<Button on:click={goToGoogleMaps} color="green"
	>{$LL.component.SeeOnGoogleMapsButton.label()}</Button
>
