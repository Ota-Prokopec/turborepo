<script lang="ts">
	import { twMerge } from 'tailwind-merge'

	let className = ''
	export { className as class }
</script>

<div
	class={twMerge(
		'bg-gray-300 h-[3px] rounded-full w-[calc(100%-0px)] relative left-[0px]',
		className,
	)}
></div>
