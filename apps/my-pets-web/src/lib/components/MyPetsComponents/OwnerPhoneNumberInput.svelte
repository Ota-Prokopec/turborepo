<script lang="ts">
	import LL from '$src/i18n/i18n-svelte'
	import { twMerge } from 'tailwind-merge'
	import RequiredBadge from '../Badges/RequiredBadge.svelte'
	import Card from '../Common/Card.svelte'
	import PhoneInput from '../Common/PhoneInput.svelte'
	import Text from '../Common/Text.svelte'

	export let value: string | null = '+36301234567'

	let className = ''
	export { className as class }
</script>

<Card class={twMerge('flex flex-wrap flex-col !gap-2 relative', className)}>
	<Text>{$LL.component.OwnerPhoneNumberInput.title()}</Text>
	<RequiredBadge class="absolute top-[-8px] right-[-8px]"></RequiredBadge>

	<PhoneInput placeholder={$LL.component.OwnerPhoneNumberInput.title()} bind:value
	></PhoneInput>
</Card>
