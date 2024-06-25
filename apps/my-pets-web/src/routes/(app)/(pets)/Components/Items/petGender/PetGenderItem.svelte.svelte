<script lang="ts">
	import Icon from '$lib/components/Common/Icon.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import IconFemale from '$lib/components/Icons/IconFemale.svelte'
	import IconMale from '$lib/components/Icons/IconMale.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import type { TPetData } from '@repo/my-pets-tstypes'
	import InfoItem from '../../InfoItem.svelte'

	export let petGender: TPetData['petGender']
</script>

<Icon class="child:h-8 child:w-8 bg-orange-400 rounded-full p-4">
	{#if petGender === 'male'}
		<IconMale></IconMale>
	{:else}
		<IconFemale></IconFemale>
	{/if}
</Icon>
