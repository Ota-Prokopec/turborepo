<script lang="ts">
	import LL from '$src/i18n/i18n-svelte'
	import type { Coords } from '@repo/ts-types'
	import { Button, Modal } from 'flowbite-svelte'
	import { twMerge } from 'tailwind-merge'
	import Icon from '../Common/Icon.svelte'
	import IconLocation from '../Icons/IconLocation.svelte'
	import GeocodingMap from '../Map/GeocodingMap/GeocodingMap.svelte'
	import Marker from '../Map/Marker.svelte'
	import lsStore from '$lib/utils/lsStore'
	import Right from '../Common/Right.svelte'
	import IconMap from '../Icons/IconMap.svelte'
	import mapTiler from '$lib/utils/mapTiler'
	import { at } from 'lodash'
	import { isCoords } from '@repo/utils'
	import Input from '../Common/Input.svelte'

	export let value: string

	export let markerLocation: Coords = $lsStore.usersLocation ?? [0, 0]

	let modalOpened = false

	let className = ''
	export { className as class }
</script>

<Input
	bind:value
	class={twMerge('w-full', className)}
	floatingLabel={$LL.component.PetAddressInput.title()}
	icon
	iconPosition="right"
>
	<Icon class="w-6 h-6" on:click={() => (modalOpened = true)}>
		<IconMap></IconMap>
	</Icon>
</Input>

<Modal bind:open={modalOpened} class="w-full h-full " classBody="w-full h-full ">
	<GeocodingMap class="min-h-[400px] top-[10px] ">
		<Marker draggable class="z-50 " bind:location={markerLocation}>
			<Icon class="child:h-10 child:w-10"><IconLocation /></Icon>
		</Marker>
	</GeocodingMap>
	<Right>
		<Button
			on:click={async () => {
				value =
					(await mapTiler.reverseGeocoding(...markerLocation, {})).at(0)?.place_name || ''

				modalOpened = false
			}}>{$LL.component.PetAddressInput.buttonSaveTitle()}</Button
		>
	</Right>
</Modal>
