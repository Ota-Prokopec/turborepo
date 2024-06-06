<script lang="ts">
	import LL from '$src/i18n/i18n-svelte'
	import { twMerge } from 'tailwind-merge'
	import Input from '../Common/Input.svelte'

	export let value: string

	let className = ''
	export { className as class }
</script>

<Input
	bind:value
	required
	class={twMerge('w-full', className)}
	floatingLabel={$LL.component.PetNameInput.title()}
/>
