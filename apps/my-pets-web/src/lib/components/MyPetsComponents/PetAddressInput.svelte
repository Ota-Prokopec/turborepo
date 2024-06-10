<script lang="ts">
	import lsStore from '$lib/utils/lsStore'
	import mapTiler from '$lib/utils/mapTiler'
	import LL from '$src/i18n/i18n-svelte'
	import type { Coords } from '@repo/ts-types'
	import { twMerge } from 'tailwind-merge'
	import Card from '../Common/Card.svelte'
	import Center from '../Common/Center.svelte'
	import Column from '../Common/Column.svelte'
	import Icon from '../Common/Icon.svelte'
	import Input from '../Common/Input.svelte'
	import IconLocation from '../Icons/IconLocation.svelte'
	import IconMap from '../Icons/IconMap.svelte'
	import IconTransfer from '../Icons/IconTransfer.svelte'
	import GeocodingMap from '../Map/GeocodingMap/GeocodingMap.svelte'
	import Marker from '../Map/Marker.svelte'
	import Text from '../Common/Text.svelte'
	import RequiredBadge from '../Badges/RequiredBadge.svelte'
	import Loading from '../Common/Loading.svelte'

	export let value: string
	export let coords: Coords = $lsStore.usersLocation ?? [0, 0]

	export let isTrasferingLoading = false
	const transferCoordsToCity = async () => {
		try {
			isTrasferingLoading = true

			const city = await mapTiler.reverseGeocoding(coords[0], coords[1], {})
			value = city.at(0)?.place_name ?? ''
		} catch (error) {}
		isTrasferingLoading = false
	}

	let className = ''
	export { className as class }
</script>

<Card>
	<Column>
		<Input
			bind:value
			class={twMerge('w-full', className)}
			floatingLabel={$LL.component.PetAddressInput.title()}
			icon
			required
			iconPosition="right"
		>
			<Icon class="w-6 h-6">
				<IconMap></IconMap>
			</Icon>
		</Input>

		<Center>
			<Icon on:click={transferCoordsToCity} class="w-6 h-6">
				{#if isTrasferingLoading}
					<Loading></Loading>
				{:else}
					<IconTransfer></IconTransfer>
				{/if}
			</Icon>
		</Center>

		<Column class="gap-0 relative">
			<RequiredBadge class="absolute top-[45px] right-[-8px] z-20"></RequiredBadge>
			<Text class="text-center">{$LL.component.PetAddressInput.mapTitle()}</Text>
			<GeocodingMap class="min-h-[400px] top-[10px] ">
				<Marker draggable class="z-50 " bind:location={coords}>
					<Icon class="child:h-10 child:w-10"><IconLocation /></Icon>
				</Marker>
			</GeocodingMap>
		</Column>
	</Column>
</Card>
