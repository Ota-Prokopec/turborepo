<script lang="ts">
	import Row from '$lib/components/Common/Row.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import InfoItem from '../../Components/InfoItem.svelte'

	export let text: string
</script>

<InfoItem title={$LL.component.PetTreatItem.title()}>
	<Row class="justify-between flex gap-2">
		<Text class="ml-4">{text}</Text>
	</Row>
</InfoItem>
