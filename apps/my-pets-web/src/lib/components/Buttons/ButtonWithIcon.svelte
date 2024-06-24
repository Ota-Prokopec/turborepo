<script lang="ts">
	import { Button } from 'flowbite-svelte'
	import Row from '../Common/Row.svelte'
	import type { ComponentType } from 'svelte'
	import Icon from '../Common/Icon.svelte'

	export let icon: ComponentType
	export let props: Button['$$prop_def'] = {}
</script>

<Button on:click {...props}>
	<Row class="items-center gap-2">
		<slot />
		<Icon class="w-4 h-4">
			<svelte:component this={icon}></svelte:component>
		</Icon>
	</Row>
</Button>
