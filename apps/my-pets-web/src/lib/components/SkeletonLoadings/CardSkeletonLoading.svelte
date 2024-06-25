<script lang="ts">
	import { twMerge } from 'tailwind-merge'
	import Card from '../Common/Card.svelte'

	let className = ''
	export { className as class }
</script>

<Card class={twMerge('placeholder-circle  animate-pulse', className)}>
	<slot />
</Card>
