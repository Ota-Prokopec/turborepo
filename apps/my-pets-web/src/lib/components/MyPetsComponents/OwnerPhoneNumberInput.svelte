<script lang="ts">
	import LL from '$src/i18n/i18n-svelte'
	import Card from '../Common/Card.svelte'
	import PhoneInput from '../Common/PhoneInput.svelte'
	import Text from '../Common/Text.svelte'

	export let value: string | null = '+36301234567'

	let className = ''
	export { className as class }
</script>

<Card class="flex flex-wrap flex-col !gap-2">
	<Text>{$LL.component.OwnerPhoneNumberInput.title()}</Text>
	<PhoneInput placeholder={$LL.component.OwnerPhoneNumberInput.title()} bind:value
	></PhoneInput>
</Card>
