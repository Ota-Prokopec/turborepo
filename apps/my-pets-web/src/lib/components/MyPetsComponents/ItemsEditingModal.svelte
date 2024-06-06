<script lang="ts">
	import { Button, Modal } from 'flowbite-svelte'
	import Input from '../Common/Input.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import Icon from '../Common/Icon.svelte'
	import IconEdit from '../Icons/IconEdit.svelte'

	export let open: boolean = false
	export let title: string
	export let value: string
</script>

<Icon class="w-4 h-4">
	<IconEdit></IconEdit>
</Icon>

<Modal {title} bind:open size="xs">
	<Input bind:value class="w-full"></Input>
	<Button>{$LL.common.save()}</Button>
</Modal>
