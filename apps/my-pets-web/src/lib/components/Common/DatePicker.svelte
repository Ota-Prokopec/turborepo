<script lang="ts">
	import Input from './Input.svelte'

	export let floatingLabel = ''
	export let required = false

	export let dateValue: Date = new Date()

	export let stringValue: string = dateValue.toJSON().slice(0, 10).replaceAll('/', '-')

	$: dateValue = new Date(stringValue)
</script>

<Input
	value={stringValue}
	datepicker
	{required}
	{floatingLabel}
	class="w-full"
	type="date"
/>
