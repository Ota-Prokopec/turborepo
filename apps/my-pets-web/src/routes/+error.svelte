<script lang="ts">
	import Center from '$lib/components/Common/Center.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import LL from '$src/i18n/i18n-svelte'
</script>

<Center class="h-min">
	<Text class="!text-white">
		{$LL.page.errorPage.label()}
	</Text>
</Center>
