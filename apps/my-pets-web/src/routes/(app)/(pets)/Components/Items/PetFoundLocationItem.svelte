<script lang="ts">
	import SeeOnGoogleMapsButton from '$lib/components/Buttons/SeeOnGoogleMapsButton.svelte'
	import Card from '$lib/components/Common/Card.svelte'
	import Icon from '$lib/components/Common/Icon.svelte'
	import Loading from '$lib/components/Common/Loading.svelte'
	import NoContent from '$lib/components/Common/NoContent.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import IconLocation from '$lib/components/Icons/IconLocation.svelte'
	import Map from '$lib/components/Map/Map.svelte'
	import Marker from '$lib/components/Map/Marker.svelte'
	import mapTiler from '$lib/utils/mapTiler'
	import LL from '$src/i18n/i18n-svelte'
	import type { TPetData } from '@repo/my-pets-tstypes'
	import { Button, Modal } from 'flowbite-svelte'

	export let locations: TPetData['lostPetLocations']

	let modalOpen = false

	let className = ''
	export { className as class }
</script>

<Button class={className} on:click={() => (modalOpen = true)} color="green"
	>{$LL.component.PetFoundLocationItem.buttonLabel()}</Button
>

<Modal bind:open={modalOpen} title={$LL.component.PetFoundLocationItem.modal.title()}>
	{#if locations.length === 0}
		<NoContent></NoContent>
	{:else}
		{#each locations as { coords }}
			<Card>
				{@const placePromise = mapTiler.reverseGeocoding(coords[0], coords[1], {})}
				{#await placePromise}
					<Loading></Loading>
				{:then place}
					<Row class="gap-2">
						<Text>{place.at(0)?.place_name ?? coords}</Text>
						<Map class="w-full h-[350px]">
							<Marker class="w-8 h-8 z-20" location={coords}>
								<Icon class="w-7 h-7"><IconLocation></IconLocation></Icon>
							</Marker>
						</Map>
						<SeeOnGoogleMapsButton {coords}></SeeOnGoogleMapsButton>
					</Row>
				{/await}
			</Card>
		{/each}
	{/if}
</Modal>
