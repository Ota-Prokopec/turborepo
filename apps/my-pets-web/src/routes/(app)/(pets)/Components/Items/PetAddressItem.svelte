<script lang="ts">
	import SeeOnGoogleMapsButton from '$lib/components/Buttons/SeeOnGoogleMapsButton.svelte'
	import SeeOnMapButton from '$lib/components/Buttons/SeeOnMapButton.svelte'
	import Card from '$lib/components/Common/Card.svelte'
	import Column from '$lib/components/Common/Column.svelte'
	import Icon from '$lib/components/Common/Icon.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import IconLocation from '$lib/components/Icons/IconLocation.svelte'
	import Map from '$lib/components/Map/Map.svelte'
	import Marker from '$lib/components/Map/Marker.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import type { TPetData } from '@repo/my-pets-tstypes'

	export let petAddress: TPetData['petAddress']

	export let viewMap = false
</script>

<Card>
	<Column>
		<Text class="text-lg">{$LL.component.PetAddressItem.title()}</Text>

		<Row class=" flex gap-2">
			<Icon class="w-6 h-6">
				<IconLocation></IconLocation>
			</Icon>
			<Text class="ml-4">{petAddress.petAddress}</Text>
		</Row>

		{#if !viewMap}
			<SeeOnMapButton on:click={() => (viewMap = true)}></SeeOnMapButton>
		{:else}
			<Map userCenter={petAddress.petAddressCoords} class="w-full h-[500px]">
				<Marker class="z-30" location={petAddress.petAddressCoords}>
					<Icon class="w-7 h-7"><IconLocation></IconLocation></Icon>
				</Marker>
			</Map>
		{/if}
		<SeeOnGoogleMapsButton coords={petAddress.petAddressCoords}></SeeOnGoogleMapsButton>
	</Column>
</Card>
