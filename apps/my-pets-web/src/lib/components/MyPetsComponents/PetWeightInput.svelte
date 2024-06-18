<script lang="ts">
	import LL from '$src/i18n/i18n-svelte'
	import { twMerge } from 'tailwind-merge'
	import Input from '../Common/Input.svelte'
	import { Button } from 'flowbite-svelte'
	import Card from '../Common/Card.svelte'
	import Column from '../Common/Column.svelte'
	import Text from '../Common/Text.svelte'
	import NumberInput from '../Inputs/NumberInput.svelte'
	import Row from '../Common/Row.svelte'
	import Icon from '../Common/Icon.svelte'
	import IconWeight from '../Icons/IconWeight.svelte'

	export let value: number | undefined | null

	let className = ''
	export { className as class }
</script>

<Card>
	<Column class="gap-2">
		<Text>
			{$LL.component.PetWeightInput.title()}
		</Text>

		{#if typeof value === 'number'}
			<NumberInput
				icon
				iconPosition="right"
				maxLength={10}
				bind:value
				class={twMerge('w-full', className)}
			>
				<Row class="gap-2">
					<Text>kg</Text>
					<Icon><IconWeight></IconWeight></Icon>
				</Row>
			</NumberInput>
			<Button on:click={() => (value = undefined)} class="w-full" color="red"
				>{$LL.component.PetWeightInput.buttonRemoveWeight()}</Button
			>
		{:else}
			<Button on:click={() => (value = 25)} class="w-full" color="green"
				>{$LL.component.PetWeightInput.buttonAddWeight()}</Button
			>
		{/if}
	</Column>
</Card>
