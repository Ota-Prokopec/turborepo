<script lang="ts">
	import { TelInput } from 'svelte-tel-input'
	import type { CountryCode, E164Number } from 'svelte-tel-input/types'
	import Columns from './Columns.svelte'
	import Text from './Text.svelte'

	export let value: string | null

	let selectedCountry: CountryCode | null = 'CZ'
	export let placeholder = ''

	// Validity
	export let valid = true

	$: valueAsPhoneFormat = value as E164Number
</script>

<Columns class="items-center" columns="auto auto">
	<Text class="">CZ +420</Text>
	<TelInput
		{placeholder}
		class="rounded-lg"
		bind:valid
		country={selectedCountry}
		on:change={() => {
			value = valueAsPhoneFormat
		}}
		bind:value={valueAsPhoneFormat}
	></TelInput>
</Columns>
