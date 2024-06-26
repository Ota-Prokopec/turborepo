<script lang="ts">
	import DeleteButton from '$lib/components/Buttons/DeleteButton.svelte'
	import SeeOnGoogleMapsButton from '$lib/components/Buttons/SeeOnGoogleMapsButton.svelte'
	import SeeOnMapButton from '$lib/components/Buttons/SeeOnMapButton.svelte'
	import Card from '$lib/components/Common/Card.svelte'
	import Column from '$lib/components/Common/Column.svelte'
	import Columns from '$lib/components/Common/Columns.svelte'
	import Icon from '$lib/components/Common/Icon.svelte'
	import Loading from '$lib/components/Common/Loading.svelte'
	import Right from '$lib/components/Common/Right.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import IconLocation from '$lib/components/Icons/IconLocation.svelte'
	import Map from '$lib/components/Map/Map.svelte'
	import Marker from '$lib/components/Map/Marker.svelte'
	import DeletedModal from '$lib/components/MyPetsComponents/DeletedModal.svelte'
	import DeletingModal from '$lib/components/MyPetsComponents/DeletingModal.svelte'
	import ErrorModal from '$lib/components/MyPetsComponents/ErrorModal.svelte'
	import mapTiler from '$lib/utils/mapTiler'
	import { sdk } from '$src/graphql/sdk'
	import type { TPetData } from '@repo/my-pets-tstypes'
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher<{ deleted: undefined }>()

	export let location: TPetData['lostPetLocations'][number]
	let showMap = false
	let deletingStatus: 'deleting' | 'deleted' | null | 'error' = null
	export let disabled = false

	const placePromise = mapTiler.reverseGeocoding(
		location.coords[0],
		location.coords[1],
		{},
	)

	const placeNamePromise = placePromise.then((place) => {
		return place.at(0)?.place_name ?? location.coords
	})

	const deleteLocation = async () => {
		try {
			deletingStatus = 'deleting'
			await sdk.deleteRecordToLostPetsLocation({ documentId: location._id })
			deletingStatus = 'deleted'
			disabled = true
			dispatch('deleted')
		} catch (error) {
			deletingStatus = 'error'
		}
	}
</script>

{#if deletingStatus === 'deleting'}
	<DeletingModal></DeletingModal>
{:else if deletingStatus === 'deleted'}
	<DeletedModal></DeletedModal>
{:else if deletingStatus === 'error'}
	<ErrorModal></ErrorModal>
{/if}

<Card {disabled} class="!w-full">
	<Column>
		<Columns columns="min-content auto" class="gap-2">
			<Map
				on:click={() => (showMap = true)}
				defaultZoom={8}
				userCenter={location.coords}
				interactive={false}
				disableGeolocation
				disableNavigation
				class="w-[100px] h-[100px] !rounded-lg overflow-hidden"
			>
				<Marker class="w-8 h-8 z-20" location={location.coords}>
					<Icon class="w-4 h-4"><IconLocation></IconLocation></Icon>
				</Marker>
			</Map>
			{#await placeNamePromise}
				<Loading></Loading>
			{:then placeName}
				<Text>{placeName}</Text>
			{/await}
		</Columns>

		{#if showMap}
			<Map
				zoom={8}
				on:click={() => (showMap = true)}
				userCenter={location.coords}
				class="w-full h-[350px] !rounded-lg overflow-hidden"
			>
				<Marker class="w-8 h-8 z-20" location={location.coords}>
					<Icon class="w-4 h-4"><IconLocation></IconLocation></Icon>
				</Marker>
			</Map>
		{/if}

		<Text class="ml-2 !text-gray-400">{location.dateTime}</Text>
		<Right>
			<Row class="gap-2">
				{#if !showMap}
					<SeeOnMapButton on:click={() => (showMap = true)}></SeeOnMapButton>
				{/if}
				<SeeOnGoogleMapsButton coords={location.coords}></SeeOnGoogleMapsButton>
				<DeleteButton on:click={deleteLocation}></DeleteButton>
			</Row>
		</Right>
	</Column>
</Card>
