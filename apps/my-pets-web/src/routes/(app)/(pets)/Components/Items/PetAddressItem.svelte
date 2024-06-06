<script lang="ts">
	import Icon from '$lib/components/Common/Icon.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import IconLocation from '$lib/components/Icons/IconLocation.svelte'
	import ItemsEditingModal from '$lib/components/MyPetsComponents/ItemsEditingModal.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import InfoItem from '../../Components/InfoItem.svelte'

	let modalOpen = false
	export let petAddress: string
</script>

<Row class=" flex gap-2">
	<Icon class="w-6 h-6">
		<IconLocation></IconLocation>
	</Icon>
	<Text class="ml-4">{petAddress}</Text>
</Row>
