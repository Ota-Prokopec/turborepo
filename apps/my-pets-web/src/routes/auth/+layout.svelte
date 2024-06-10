<script lang="ts">
	import Avatar from '$lib/components/Common/Avatar.svelte'
	import Center from '$lib/components/Common/Center.svelte'
	import Padding from '$lib/components/Common/Padding.svelte'
	import { Heading } from 'flowbite-svelte'
</script>

<Padding class="h-full w-full" padding="4px">
	<Heading class="text-3xl text-center" tag="h1">My pets</Heading>

	<Center class="p-10"><Avatar class="" size="xl" src="/icon.png"></Avatar></Center>
	<slot />
</Padding>
