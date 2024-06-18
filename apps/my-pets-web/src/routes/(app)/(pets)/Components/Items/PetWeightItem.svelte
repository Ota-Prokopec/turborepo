<script lang="ts">
	import Card from '$lib/components/Common/Card.svelte'
	import Column from '$lib/components/Common/Column.svelte'
	import Icon from '$lib/components/Common/Icon.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import IconWeight from '$lib/components/Icons/IconWeight.svelte'
	import PetWeightInput from '$lib/components/MyPetsComponents/PetWeightInput.svelte'
	import LL from '$src/i18n/i18n-svelte'

	export let weight: number
</script>

<Card>
	<Column>
		<Text class="text-lg">{$LL.component.PetWeightItem.title()}</Text>

		<Row class="justify-between gap-2">
			<Text class="font-bold ml-4">{weight} kg</Text>

			<Icon class="w-6 h-6">
				<IconWeight></IconWeight>
			</Icon>
		</Row>
	</Column>
</Card>
