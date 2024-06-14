<script lang="ts">
	import { Card } from 'flowbite-svelte'
	import Row from '../Common/Row.svelte'
	import Text from '../Common/Text.svelte'
	import Right from '../Common/Right.svelte'
	import LL from '$src/i18n/i18n-svelte'

	export let price: string
	export let description: string
	export let title: string
	export let size: string
</script>

<Card>
	<img class="p-8 rounded-t-lg" src="/pictures/sellingTags/tag1.webp" alt="product 1" />
	<Row class="justify-between p-3 items-center">
		<Text class="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
			{title}
		</Text>

		<Text class="text-2xl font-bold text-gray-500 dark:text-white">{price}</Text>
	</Row>
	<Text class="font-bold text-gray-700">{description}</Text>
	<Right>
		<Text class="font-bold text-gray-800"
			>{$LL.component.SellingCard.sizes()}: {size}</Text
		>
	</Right>
</Card>
