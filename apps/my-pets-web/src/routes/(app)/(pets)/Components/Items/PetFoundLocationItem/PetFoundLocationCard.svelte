<script lang="ts">
	import DeleteButton from '$lib/components/Buttons/DeleteButton.svelte'
	import SeeOnGoogleMapsButton from '$lib/components/Buttons/SeeOnGoogleMapsButton.svelte'
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
	import { locale } from '$src/i18n/i18n-svelte'
	import type { TPetData } from '@repo/my-pets-tstypes'

	export let location: TPetData['lostPetLocations'][number]
	let showMap = false
	let deletingStatus: 'deleting' | 'deleted' | null | 'error' = null

	const placePromise = mapTiler.reverseGeocoding(
		location.coords[0],
		location.coords[1],
		{},
	)
	const date = new Date(location._createdAt)
	const placeNamePromise = placePromise.then((place) => {
		return place.at(0)?.place_name ?? location.coords
	})

	const normalizedDate = date.toLocaleDateString($locale, {
		day: 'numeric',
		year: 'numeric',
		month: 'long',
		hour: 'numeric',
		minute: 'numeric',
	})

	const deleteLocation = async () => {
		try {
			deletingStatus = 'deleting'
			await sdk.deleteRecordToLostPetsLocation({ documentId: location._id })
			deletingStatus = 'deleted'
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

<Card class="!w-full">
	<Column>
		<Columns columns="min-content auto" class="gap-2">
			<Map
				on:click={() => (showMap = true)}
				zoom={8}
				interactive={false}
				disableGeolocation
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
				on:click={() => (showMap = true)}
				class="w-full h-[350px] !rounded-lg overflow-hidden"
			>
				<Marker class="w-8 h-8 z-20" location={location.coords}>
					<Icon class="w-4 h-4"><IconLocation></IconLocation></Icon>
				</Marker>
			</Map>
		{/if}

		<Text class="ml-2 !text-gray-400">{normalizedDate}</Text>
		<Right>
			<Row class="gap-2">
				<SeeOnGoogleMapsButton coords={location.coords}></SeeOnGoogleMapsButton>
				<DeleteButton on:click={deleteLocation}></DeleteButton>
			</Row>
		</Right>
	</Column>
</Card>
