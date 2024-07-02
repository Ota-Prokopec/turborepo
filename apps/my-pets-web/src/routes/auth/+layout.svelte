<script lang="ts">
	import { goto } from '$app/navigation'
	import Avatar from '$lib/components/Common/Avatar.svelte'
	import Center from '$lib/components/Common/Center.svelte'
	import Icon from '$lib/components/Common/Icon.svelte'
	import Padding from '$lib/components/Common/Padding.svelte'
	import IconSettings from '$lib/components/Icons/IconSettings.svelte'
	import Terms from '$lib/components/MyPetsComponents/Terms.svelte'
	import lsStore from '$lib/utils/lsStore'
	import { Heading } from 'flowbite-svelte'
</script>

{#if !$lsStore.temrsAccepted}
	<Terms class=" z-50"></Terms>
{/if}

<Icon class="w-8 h-8" on:click={() => goto('/account/settings')}>
	<IconSettings></IconSettings>
</Icon>

<Padding class="h-full w-full" padding="4px">
	<Heading class="text-3xl text-center" tag="h1">My pets</Heading>

	<Center class="p-10">
		<Avatar class="" size="xl" src="/icon.png"></Avatar>
	</Center>
	<slot />
</Padding>
