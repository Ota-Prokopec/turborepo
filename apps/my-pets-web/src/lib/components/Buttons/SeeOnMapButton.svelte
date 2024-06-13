<script lang="ts">
	import { navigate } from '$lib/utils/navigator'
	import LL from '$src/i18n/i18n-svelte'
	import type { Coords } from '@repo/ts-types'
	import { getLocationUrlOfGoogleMaps } from '@repo/utils'
	import { Button } from 'flowbite-svelte'
</script>

<Button on:click color="green">{$LL.component.SeeOnMapButton.label()}</Button>
