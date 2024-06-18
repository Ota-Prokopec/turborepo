<script lang="ts">
	import Card from '$lib/components/Common/Card.svelte'
	import Line from '$lib/components/Common/Line.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import LL from '$src/i18n/i18n-svelte'

	export let age: number

	export let birthDate: Date
</script>

<Card class="p-0">
	<Row class="!gap-[1px] relative justify-between ">
		<Text class="font-bold text-2xl ml-4 p-4"
			>{age} {$LL.component.PetAgeItem.yearsOld()}</Text
		>

		<Text class="font-bold  ml-4 !text-gray-500 self-end pb-[2px] pr-[2px]"
			>{$LL.component.PetAgeItem.born()}: {birthDate
				.toLocaleDateString()
				.replaceAll('/', '. ')}</Text
		>
	</Row>
</Card>
