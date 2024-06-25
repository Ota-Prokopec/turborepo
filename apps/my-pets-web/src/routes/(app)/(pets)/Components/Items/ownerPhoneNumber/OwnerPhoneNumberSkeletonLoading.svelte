<script lang="ts">
	import Icon from '$lib/components/Common/Icon.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import IconLink from '$lib/components/Icons/IconLink.svelte'
	import IconPhone from '$lib/components/Icons/IconPhone.svelte'
	import LineSkeletonLoading from '$lib/components/SkeletonLoadings/LineSkeletonLoading.svelte'
</script>

<Row class=" gap-2 w-full grid grid-cols-[min-content_auto]">
	<Icon class="w-6 h-6 fill-blue-900">
		<IconPhone></IconPhone>
	</Icon>
	<Row class="gap-1 items-center w-[75%] grid grid-cols-[auto_min-content]">
		<LineSkeletonLoading class=""></LineSkeletonLoading>
		<Icon class="w-5 h-5 ">
			<IconLink></IconLink>
		</Icon>
	</Row>
</Row>
