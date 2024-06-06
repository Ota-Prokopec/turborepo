<script lang="ts">
	import { type TPetData } from '@repo/my-pets-tstypes'
	import { Input } from 'flowbite-svelte'
	import Card from '../Common/Card.svelte'
	import Column from '../Common/Column.svelte'
	import Line from '../Common/Line.svelte'
	import Right from '../Common/Right.svelte'
	import Text from '../Common/Text.svelte'
	import TextArea from '../Common/TextArea.svelte'
	import MyPetsPaginator from './MyPetsPaginator.svelte'
	import LL from '$src/i18n/i18n-svelte'

	export let fields: TPetData['petDescriptionCustomFields'] = [{ title: '', text: '' }]

	export let aboutMaxLength: number
</script>

<Card class="w-full h-auto max-w-none !gap-4 flex flex-wrap flex-col">
	<Text>Custom</Text>

	<Column class="ml-2">
		{#each fields as { title, text }}
			<Input
				bind:value={title}
				class="w-[calc(100%-40px)]"
				placeholder={$LL.component.PetCustomTextInput.placeholder.title()}
			/>
			<TextArea
				bind:value={text}
				class="w-[calc(100%-20px)] relative left-[20px]"
				letterCount
				maxLength={aboutMaxLength}
				placeholder={$LL.component.PetCustomTextInput.placeholder.text()}
			></TextArea>
			{#if fields.length > 1}
				<Line></Line>
			{/if}
		{/each}

		<Right>
			<MyPetsPaginator
				on:add={() => {
					fields = [...fields, { title: '', text: '' }]
				}}
				on:remove={() => {
					if (fields.length === 1) return
					fields = fields.slice(0, fields.length - 1)
				}}
			></MyPetsPaginator>
		</Right>
	</Column>
</Card>
