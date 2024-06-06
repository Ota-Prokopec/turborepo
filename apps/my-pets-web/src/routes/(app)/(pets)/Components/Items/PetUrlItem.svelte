<script lang="ts">
	import Icon from '$lib/components/Common/Icon.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import IconLink from '$lib/components/Icons/IconLink.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import { clipboard } from '@repo/utils'
	import { A, Button } from 'flowbite-svelte'
	import { twMerge } from 'tailwind-merge'

	export let petUrl: string
	export let copied = false

	let className = ''
	export { className as class }
</script>

<Button
	color="green"
	on:click={() => {
		clipboard.copy(petUrl)
	}}
	on:click={() => (copied = true)}
	class={twMerge('w-min', className)}
>
	<Row class="justify-between w-full items-center">
		<Row class=" flex gap-2">
			<Icon class="w-6 h-6 fill-blue-900">
				<IconLink></IconLink>
			</Icon>
			<Row class="gap-1 items-center">
				<Text class="text-blue-300">{$LL.component.PetUrlItem.label()}</Text>
			</Row>
		</Row>
		{#if copied}
			<Text>Copied!</Text>
		{/if}
	</Row>
</Button>
