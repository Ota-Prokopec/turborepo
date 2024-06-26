<script lang="ts">
	import { Card, Img } from 'flowbite-svelte'
	import Row from '../Common/Row.svelte'
	import Text from '../Common/Text.svelte'
	import Right from '../Common/Right.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import Carousel from '../Carousel/Carousel.svelte'

	export let price: string
	export let description: string
	export let title: string
	export let size: string
	export let imgSources: string[]
</script>

<Card>
	<Carousel autoplay arrows swiping>
		{#each imgSources as img}
			<Img class="rounded-xl" src={img} />
		{/each}
	</Carousel>
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
