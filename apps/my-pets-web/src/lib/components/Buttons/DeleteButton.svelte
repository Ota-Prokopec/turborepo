<script lang="ts">
	import LL from '$src/i18n/i18n-svelte'
	import { Button } from 'flowbite-svelte'
	import Row from '../Common/Row.svelte'
	import Icon from '../Common/Icon.svelte'
	import IconBan from '../Icons/IconBan.svelte'
</script>

<Button on:click color="red">
	<Row class="gap-2 items-center">
		{$LL.component.DeleteButton.label()}
		<Icon class="w-4 h-4">
			<IconBan></IconBan>
		</Icon>
	</Row>
</Button>
