<script lang="ts">
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
	import { Button } from 'flowbite-svelte'

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
			<Button on:click={() => (viewMap = true)}
				>{$LL.component.PetAddressItem.seeOnMap()}</Button
			>
		{:else}
			<Map class="w-full h-[500px]">
				<Marker class="z-30" location={petAddress.petAddressCoords}>
					<Icon class="w-7 h-7"><IconLocation></IconLocation></Icon>
				</Marker>
			</Map>
		{/if}
	</Column>
</Card>
