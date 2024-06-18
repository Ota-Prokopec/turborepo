<script lang="ts">
	import { twMerge } from 'tailwind-merge'
	import Input from '../Common/Input.svelte'

	export let maxLength: number | undefined = undefined
	export let value: number
	export let icon: boolean = false
	export let iconPosition: 'right' | 'left' | undefined = undefined

	let valueAsString: string = value ? value.toString() : ''

	$: value = parseFloat(valueAsString)

	let className = ''
	export { className as class }
</script>

<Input
	{icon}
	{iconPosition}
	type="text"
	{maxLength}
	pattern={/[^0-9]/}
	bind:value={valueAsString}
	class={twMerge('w-full appearance-none m-0', className)}
>
	<slot />
</Input>
