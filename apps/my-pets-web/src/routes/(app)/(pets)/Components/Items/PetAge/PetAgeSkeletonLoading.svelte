<script lang="ts">
	import Card from '$lib/components/Common/Card.svelte'
	import Column from '$lib/components/Common/Column.svelte'
	import Right from '$lib/components/Common/Right.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import LineSkeletonLoading from '$lib/components/SkeletonLoadings/LineSkeletonLoading.svelte'
</script>

<Card class="p-0">
	<Column class="relative justify-between gap-2 p-2">
		<LineSkeletonLoading class="w-[50%] h-10"></LineSkeletonLoading>

		<Right>
			<LineSkeletonLoading
				class="w-[150px] ml-4 !text-gray-500 self-end pb-[2px] pr-[2px]"
			></LineSkeletonLoading>
		</Right>
	</Column>
</Card>
