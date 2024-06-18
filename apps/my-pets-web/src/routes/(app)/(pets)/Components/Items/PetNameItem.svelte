<script lang="ts">
	import Text from '$lib/components/Common/Text.svelte'

	export let petName: string
</script>

<Text class="font-bold text-2xl ml-4">{petName}</Text>
