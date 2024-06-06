<script lang="ts">
	import LL from '$src/i18n/i18n-svelte'
	import { Badge, Indicator } from 'flowbite-svelte'
	import { twMerge } from 'tailwind-merge'
	import Row from '../Common/Row.svelte'

	let className = ''
	export { className as class }
</script>

<Badge color="red" rounded class={twMerge(className)}>
	<Row class="gap-1 items-center">
		<Indicator size="xs" color="red" class=""></Indicator>
		{$LL.component.RequiredBadge.label()}
	</Row>
</Badge>
