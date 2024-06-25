<script lang="ts">
	import { twMerge } from 'tailwind-merge'

	let className = ''
	export { className as class }
</script>

<div class={twMerge('placeholder animate-pulse', className)} />
