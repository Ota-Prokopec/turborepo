<script lang="ts">
	import Icon from '$lib/components/Common/Icon.svelte'
	import IconCat from '$lib/components/Icons/IconCat.svelte'
	import IconDog from '$lib/components/Icons/IconDog.svelte'
	import type { TPetData } from '@repo/my-pets-tstypes'

	export let petType: TPetData['petType']
</script>

<Icon class="child:h-8 child:w-8 bg-blue-500 rounded-full p-4">
	{#if petType === 'dog'}
		<IconDog></IconDog>
	{:else}
		<IconCat></IconCat>
	{/if}
</Icon>
