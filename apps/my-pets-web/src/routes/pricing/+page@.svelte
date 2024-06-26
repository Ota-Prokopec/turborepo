<script lang="ts">
	import Row from '$lib/components/Common/Row.svelte'
	import SellingCard from '$lib/components/MyPetsComponents/SellingCard.svelte'
	import LL, { locale } from '$src/i18n/i18n-svelte'
</script>

<Row class="items-center w-full h-full justify-center gap-2 p-2">
	<SellingCard
		imgSources={[
			'/pictures/sellingTags/tagNFCQR1picture.jpg',
			'/pictures/sellingTags/tagNFCQR2picture.jpg',
		]}
		title="Tag QR-NFC"
		price="200 kč"
		size="3cm"
	>
		{#if $locale === 'cs'}
			<div class="container mx-auto p-4">
				<section class="mb-8">
					Tato známka obsahuje jak QR kód, tak technologii NFC, aby kdokoliv, kdo najde
					vašeho mazlíčka, mohl snadno získat důležité informace a dovést ho k Vám domů.
					Značka je vyrobena z epoxilové pryskyřice.

					<ul class="list-disc list-inside mt-2 space-y-2">
						<li>
							<strong>Okamžitý přístup k informacím:</strong> Stačí naskenovat QR kód nebo
							přiložit telefon k NFC čipu a okamžitě získáte veškeré informace o vašem mazlíčkovi.
							Kontaktní údaje, zdravotní informace a dokonce i oblíbená místa – vše na dosah
							ruky.
						</li>
						<li>
							<strong>Bezpečnost na prvním místě:</strong> V případě, že se váš mazlíček ztratí,
							kdokoliv může snadno naskenovat jeho známku a okamžitě vás kontaktovat.
						</li>
						<li>
							<strong>Sdílení lokace:</strong> Při naskenování známky může nalezce přímo poslat
							majiteli aktuální lokaci, kde se jeho pes nebo kočka nachází. Snadná a rychlá
							cesta k opětovnému shledání!
						</li>
					</ul>
				</section>

				<section class="mb-8">
					<h2 class="text-2xl font-semibold">
						Vysoce kvalitní materiál – Epoxy pryskyřice
					</h2>
					<ul class="list-disc list-inside mt-2 space-y-2">
						<li>
							<strong>Styl a odolnost:</strong> Známky jsou vyrobeny z epoxilové pryskyřice,
							což jim dodává nejen skvělý vzhled, ale také odolnost vůči poškození a opotřebení.
						</li>
						<li>
							<strong>Různé designy:</strong> Vyberte si z široké škály barev a vzorů, které
							budou ladit s osobností vašeho mazlíčka.
						</li>
					</ul>
				</section>

				<section class="mb-8">
					<h2 class="text-2xl font-semibold">Proč si vybrat naše známky?</h2>
					<ul class="list-disc list-inside mt-2 space-y-2">
						<li><strong>Jednoduchá údržba:</strong> Snadno se čistí a udržují.</li>
						<li>
							<strong>Univerzálnost:</strong> Vhodné pro psy i kočky všech velikostí.
						</li>
						<li>
							<strong>Dlouhá životnost:</strong> Materiál odolný vůči vodě, škrábancům a teplotním
							výkyvům.
						</li>
					</ul>
				</section>
			</div>
		{:else}
			<div class="container mx-auto p-4">
				<section class="mb-8">
					This tag contains both a QR code and NFC technology, so anyone who finds your
					pet can easily obtain important information and bring it home to you. The tag is
					made of epoxy resin.

					<ul class="list-disc list-inside mt-2 space-y-2">
						<li>
							<strong>Instant access to information:</strong> Just scan the QR code or place
							the phone next to the NFC chip and you will immediately get all the information
							about your pet. Contact details, medical information, and even favorite spots
							– all within reach.
						</li>
						<li>
							<strong>Safety first:</strong> In case your pet gets lost, anyone can easily
							scan its tag and contact you immediately.
						</li>
						<li>
							<strong>Location sharing:</strong> When the tag is scanned, the finder can directly
							send the owner the current location of where their dog or cat is. An easy and
							quick way to reunite!
						</li>
					</ul>
				</section>

				<section class="mb-8">
					<h2 class="text-2xl font-semibold">High-Quality Material – Epoxy Resin</h2>
					<ul class="list-disc list-inside mt-2 space-y-2">
						<li>
							<strong>Style and durability:</strong> The tags are made of epoxy resin, which
							gives them not only a great look but also resistance to damage and wear.
						</li>
						<li>
							<strong>Various designs:</strong> Choose from a wide range of colors and patterns
							that will match your pet's personality.
						</li>
					</ul>
				</section>

				<section class="mb-8">
					<h2 class="text-2xl font-semibold">Why choose our tags?</h2>
					<ul class="list-disc list-inside mt-2 space-y-2">
						<li><strong>Easy maintenance:</strong> Easy to clean and maintain.</li>
						<li>
							<strong>Versatility:</strong> Suitable for dogs and cats of all sizes.
						</li>
						<li>
							<strong>Long lifespan:</strong> Material resistant to water, scratches, and temperature
							fluctuations.
						</li>
					</ul>
				</section>
			</div>
		{/if}
	</SellingCard>
</Row>
