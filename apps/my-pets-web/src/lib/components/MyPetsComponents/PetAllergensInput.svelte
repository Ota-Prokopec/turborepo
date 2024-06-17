<script lang="ts">
	import Card from '../Common/Card.svelte'
	import Column from '../Common/Column.svelte'
	import Icon from '../Common/Icon.svelte'
	import Right from '../Common/Right.svelte'
	import Row from '../Common/Row.svelte'
	import Text from '../Common/Text.svelte'
	import IconAdd from '../Icons/IconAdd.svelte'
	import IconXMark from '../Icons/IconXMark.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import MyPetsPaginator from './MyPetsPaginator.svelte'
	import Input from '../Common/Input.svelte'

	export let allergens: string[] = ['']
</script>

<Card class="w-full h-auto max-w-none !gap-4 flex flex-wrap flex-col">
	<Text>{$LL.component.PetAllergensInput.title()}</Text>

	<Column class="ml-2">
		{#each allergens as allergen}
			<Input maxLength={255} showLetterCount bind:value={allergen} class="w-full" />
		{/each}
		<Right>
			<MyPetsPaginator
				on:add={() => {
					allergens = [...allergens, '']
				}}
				on:remove={() => {
					if (allergens.length === 1) return
					allergens = allergens.slice(0, allergens.length - 1)
				}}
			></MyPetsPaginator>
		</Right>
	</Column>
</Card>
