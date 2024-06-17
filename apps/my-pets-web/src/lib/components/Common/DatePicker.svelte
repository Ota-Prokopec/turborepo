<script lang="ts">
	import Input from './Input.svelte'

	export let floatingLabel = ''
	export let required = false

	export let dateValue: Date = new Date()

	export let stringValue: string = dateValue.toLocaleDateString().replaceAll('/', '.')

	$: dateValue = new Date(stringValue)
</script>

<Input bind:value={stringValue} {required} {floatingLabel} class="w-full" type="date" />
