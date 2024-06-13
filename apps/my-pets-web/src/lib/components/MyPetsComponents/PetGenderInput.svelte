<script lang="ts">
	import { type TPetData } from '@repo/my-pets-tstypes'
	import Icon from '../Common/Icon.svelte'
	import Tabs from '../Common/Tabs.svelte'
	import IconFemale from '../Icons/IconFemale.svelte'
	import IconMale from '../Icons/IconMale.svelte'

	const items: Readonly<{ title: string; key: TPetData['petGender'] }[]> = [
		{
			title: '',
			key: 'male',
		},
		{
			title: '',
			key: 'female',
		},
	]

	export let value: (typeof items)[number]['key']
</script>

<Tabs class="w-min bg-black" let:key bind:active={value} {items}>
	<Icon class="w-5 h-5 child:fill-white">
		{#if key === 'male'}
			<IconMale></IconMale>
		{:else}
			<IconFemale></IconFemale>
		{/if}
	</Icon>
</Tabs>
