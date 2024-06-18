<script lang="ts">
	import { twMerge } from 'tailwind-merge'

	export let orientation: 'vertical' | 'horizontal' = 'vertical'

	let className = ''
	export { className as class }
</script>

{#if orientation === 'vertical'}
	<div
		class={twMerge(
			'bg-gray-300 h-[3px] rounded-full w-[calc(100%-0px)] relative left-[0px]',
			className,
		)}
	></div>
{:else}
	<div
		class={twMerge(
			'bg-gray-300 h-auto rounded-full w-[3px] relative top-[0px]',
			className,
		)}
	></div>
{/if}
