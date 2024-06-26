<script lang="ts">
	import Center from '$lib/components/Common/Center.svelte'
	import Icon from '$lib/components/Common/Icon.svelte'
	import QRcode from '$lib/components/Common/QRcode.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import IconQRcode from '$lib/components/Icons/IconQRcode.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import { Button, Modal } from 'flowbite-svelte'

	export let tagLinkId: string
	$: tagLink = `${location.origin}/pet/${tagLinkId}`
	let modalOpen = false
</script>

<Button on:click={() => (modalOpen = true)} color="none" class="w-max">
	<Row class="gap-2 items-center">
		<Icon>
			<IconQRcode></IconQRcode>
		</Icon>
		<Text>{tagLinkId}</Text>
	</Row>
</Button>

<Modal title={$LL.component.TagItem.title()} bind:open={modalOpen}>
	<Center>
		<QRcode class="!h-[200px] !w-[200px] !rounded-2xl" value={tagLink}></QRcode>
	</Center>
</Modal>
