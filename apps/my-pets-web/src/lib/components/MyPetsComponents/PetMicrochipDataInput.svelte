<script lang="ts">
	import Card from '../Common/Card.svelte'
	import DatePicker from '../Common/DatePicker.svelte'
	import Column from '../Common/Column.svelte'
	import Input from '../Common/Input.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import Text from '../Common/Text.svelte'
	import type { TCreatePetData } from '@repo/my-pets-tstypes'
	import { Button } from 'flowbite-svelte'

	export let data: TCreatePetData['petMicrochipping'] | undefined

	let className = ''
	export { className as class }
</script>

<Card>
	<Column class="gap-2">
		<Text class="">{$LL.component.PetMicrochipDataInput.petChip()}</Text>
		{#if data}
			<Column class="gap-2">
				<Input
					showLetterCount
					maxLength={150}
					bind:value={data.locationOfChip}
					class="w-full"
					floatingLabel={$LL.component.PetMicrochipDataInput.locationInput.label()}
				/>
				<DatePicker
					bind:dateValue={data.dateOfChipping}
					floatingLabel={$LL.component.PetMicrochipDataInput.datePicker.label()}
				></DatePicker>
			</Column>
			<Button
				color="red"
				on:click={() => {
					data = undefined
				}}
				>{$LL.component.PetMicrochipDataInput.buttonRemoveChipInformationLabel()}</Button
			>
		{:else}
			<Button
				color="green"
				on:click={() => {
					data = { locationOfChip: '', dateOfChipping: new Date(Date.now()) }
				}}>{$LL.component.PetMicrochipDataInput.buttonAddChipInformationLabel()}</Button
			>
		{/if}
	</Column>
</Card>
