<script lang="ts">
	import Row from '$lib/components/Common/Row.svelte'
	import SellingCard from '$lib/components/MyPetsComponents/SellingCard.svelte'
	import LL from '$src/i18n/i18n-svelte'
</script>

<Row class="items-center w-full h-full justify-center gap-2 p-2">
	<SellingCard
		title="Tag QR-NFC"
		description={$LL.page.selling.sellingTagNFC()}
		price="200 kč"
		size="3,2cm | 4cm"
	></SellingCard>
	<SellingCard
		title="Tag QR"
		description={$LL.page.selling.sellingTagQR()}
		price="175 kč"
		size="2,5cm | 3,2cm | 4cm"
	></SellingCard>
</Row>
