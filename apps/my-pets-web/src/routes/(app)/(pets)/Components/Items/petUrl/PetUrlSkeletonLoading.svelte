<script lang="ts">
	import Icon from '$lib/components/Common/Icon.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import IconLink from '$lib/components/Icons/IconLink.svelte'
	import LineSkeletonLoading from '$lib/components/SkeletonLoadings/LineSkeletonLoading.svelte'
	import { Button } from 'flowbite-svelte'
	import { twMerge } from 'tailwind-merge'

	let className = ''
	export { className as class }
</script>

<Button color="blue" class={twMerge('w-min', className)}>
	<Row class="gap-2 w-full items-center grid grid-cols-[min-content_auto]">
		<Icon class="w-6 h-6 fill-blue-900">
			<IconLink></IconLink>
		</Icon>
		<LineSkeletonLoading class=" w-full"></LineSkeletonLoading>
	</Row>
</Button>
