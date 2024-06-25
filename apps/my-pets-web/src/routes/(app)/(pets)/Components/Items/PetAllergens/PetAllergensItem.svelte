<script lang="ts">
	import LL from '$src/i18n/i18n-svelte'
	import type { TPetData } from '@repo/my-pets-tstypes'
	import { Li, List } from 'flowbite-svelte'
	import InfoItem from '../../InfoItem.svelte'

	export let petAllergens: TPetData['petAllergens']
</script>

<InfoItem title={$LL.component.PetAllergensItem.title()}>
	<List tag="ul" class="space-y-4 text-gray-500 dark:text-gray-400">
		{#each petAllergens as allergen}
			<Li>{allergen}</Li>
		{/each}
	</List>
</InfoItem>
