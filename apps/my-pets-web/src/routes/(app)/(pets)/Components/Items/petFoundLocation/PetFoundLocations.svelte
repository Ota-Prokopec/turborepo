<script lang="ts">
	import ButtonWithIcon from '$lib/components/Buttons/ButtonWithIcon.svelte'
	import Center from '$lib/components/Common/Center.svelte'
	import Icon from '$lib/components/Common/Icon.svelte'
	import NoContent from '$lib/components/Common/NoContent.svelte'
	import IconAnglesDown from '$lib/components/Icons/IconAnglesDown.svelte'
	import IconLocation from '$lib/components/Icons/IconLocation.svelte'
	import IconRoute from '$lib/components/Icons/IconRoute.svelte'
	import Map from '$lib/components/Map/Map.svelte'
	import Marker from '$lib/components/Map/Marker.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import type { TPetData } from '@repo/my-pets-tstypes'
	import { Modal } from 'flowbite-svelte'
	import { Popup } from 'svelte-maplibre'
	import PetFoundLocationCard from './PetFoundLocationCard.svelte'

	export let locations: TPetData['lostPetLocations']

	let modalOpen = false

	let className = ''
	export { className as class }
</script>

<ButtonWithIcon
	class={className}
	on:click={() => (modalOpen = true)}
	props={{ color: 'green' }}
	icon={IconRoute}>{$LL.component.PetFoundLocationItem.buttonLabel()}</ButtonWithIcon
>

<Modal bind:open={modalOpen} title={$LL.component.PetFoundLocationItem.modal.title()}>
	<Map class="w-full h-[400px] !rounded-xl overflow-hidden">
		{#each locations as location}
			<Marker location={location.coords}>
				<Icon class="w-6 h-6">
					<IconLocation></IconLocation>
				</Icon>
				<Popup
					closeOnClickInside={false}
					closeOnClickOutside={false}
					lngLat={{ lat: location.coords[0], lng: location.coords[1] }}
					open
					closeButton={false}
				>
					{location.dateTime}
				</Popup>
			</Marker>
		{/each}
	</Map>

	<Center class="h-min">
		<Icon>
			<IconAnglesDown></IconAnglesDown>
		</Icon>
	</Center>

	{#if locations.length === 0}
		<NoContent></NoContent>
	{:else}
		{#each locations as location}
			<PetFoundLocationCard
				on:deleted={() =>
					(locations = locations.filter((item) => item._id !== location._id))}
				{location}
			></PetFoundLocationCard>
		{/each}
	{/if}
</Modal>
