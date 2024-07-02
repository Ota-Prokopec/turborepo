<script lang="ts">
	import { goto } from '$app/navigation'
	import Icon from '$lib/components/Common/Icon.svelte'
	import List from '$lib/components/Common/List.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import IconSettings from '$lib/components/Icons/IconSettings.svelte'
	import SellingCard from '$lib/components/MyPetsComponents/SellingCard.svelte'
	import { locale } from '$src/i18n/i18n-svelte'
	import type { Locales } from '$src/i18n/i18n-types'

	const translates: Record<Locales, string[]> = {
		cs: [
			'Známka je vyrobena z epoxidové pryskyřice',
			'Obsahuje jak QR kód pro rychlé a snadné načtení zvířátka, tak NFC čip pro snadné načtení i za nepříznivých podmínek (tma, déšť, nefunkční fotoaparát v telefonu)',
			'Se známkou dostanete i přístup do aplikace mypets.cz, kde si můžete mazlíčka přidat a známku zaregistrovat. V aplikaci si můžete uložit základní údaje k nalezení mazlíčka, jako je adresa ( i konkrétní bod na mapě) nebo telefonní číslo majitele. Mezi další údaje patří váha mazlíčka, datum narození, popis alergenů a informace o tom jak se má s vaším mazlíčkem zacházet. Dále si můžete vytvořit vaše vlastní políčko (vlastní údaj, něco specifického). Pokud někdo vašeho mazlíčka najde, může vám zkrz aplikaci poslat jeho polohu.',
		],
		en: [
			'The stamp is made of epoxy resin',
			'Contains both a QR code for quick and easy retrieval of the animal and an NFC chip for easy retrieval even in adverse conditions (darkness, rain, non-functioning phone camera)',
			"With the tag you also get access to the mypets.cz app where you can add your pet and register the tag. In the app you can save basic information to find the pet, such as the address (even a specific point on the map) or the owner's phone number. Other details include the pet's weight, date of birth, allergen description and information on how to handle your pet. You can also create your own field (custom data, something specific). If someone finds your pet, they can send you its location through the app",
		],
	}
</script>

<Icon class="w-8 h-8" on:click={() => goto('/account/settings')}>
	<IconSettings></IconSettings>
</Icon>

<Row class="items-center w-full h-full justify-center gap-2 p-2">
	<SellingCard
		imgSources={[
			'/pictures/sellingTags/tagNFCQR1picture.jpg',
			'/pictures/sellingTags/tagNFCQR2picture.jpg',
			'/pictures/sellingTags/tagNFCQR3picture.jpg',
		]}
		title="Tag QR-NFC"
		price="200 kč"
		size="3cm"
	>
		<Text class="text-xl">
			{#if $locale === 'cs'}
				Chytrá známka s informacemi nejen pro rychlé nalezení zvířátka, ale také pro pomoc
				při lékařském ošetření.
			{:else}
				Clever tag with information not only to find the pet quickly, but also to help for
				medical treatment.
			{/if}
		</Text>
		<List class="child:border-0 child:shadow-none" let:item items={translates[$locale]}>
			<Text>
				{item}
			</Text>
		</List>
	</SellingCard>
</Row>
