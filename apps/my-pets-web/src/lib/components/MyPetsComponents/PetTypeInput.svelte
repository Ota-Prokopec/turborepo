<script lang="ts">
	import { type TPetType } from '@repo/my-pets-tstypes'
	import { RadioButton } from 'flowbite-svelte'
	import Icon from '../Common/Icon.svelte'
	import IconDog from '../Icons/IconDog.svelte'
	import IconCat from '../Icons/IconCat.svelte'

	export let value: TPetType

	const tabItems = [
		{
			key: 'j',
			title: 'jlkdsa',
		},
	]
</script>

<Tabs active={'j'} items={tabItems} />

<RadioButton
	value={'dog'}
	bind:group={value}
	custom
	class="bg-white peer-checked:border-"
>
	<Icon class="w-5 h-5">
		<IconDog></IconDog>
	</Icon>
</RadioButton>
<RadioButton
	value={'cat'}
	bind:group={value}
	custom
	class="bg-white peer-checked:border-"
>
	<Icon class="w-5 h-5">
		<IconCat></IconCat>
	</Icon>
</RadioButton>
