<script lang="ts">
	import Avatar from '$lib/components/Common/Avatar.svelte'
	import Center from '$lib/components/Common/Center.svelte'
	import Padding from '$lib/components/Common/Padding.svelte'
</script>

<Padding class="h-full w-full" padding="4px">
	<Center class="p-10"><Avatar class="" size="xl" src="/icon.png"></Avatar></Center>
	<slot />
</Padding>
