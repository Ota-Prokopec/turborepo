<script lang="ts">
	import LL from '$src/i18n/i18n-svelte'
	import { twMerge } from 'tailwind-merge'
	import Input from '../Common/Input.svelte'
	import Card from '../Common/Card.svelte'
	import Text from '../Common/Text.svelte'
	import Column from '../Common/Column.svelte'
	import TextArea from '../Common/TextArea.svelte'

	export let value: string
	export let maxInputLength: number

	let className = ''
	export { className as class }
</script>

<Card>
	<Column class="">
		<Text>
			{$LL.component.PetTreatInput.title()}
		</Text>
		<TextArea
			letterCount
			maxLength={maxInputLength}
			bind:value
			class={twMerge('w-full', className)}
		/>
	</Column>
</Card>
