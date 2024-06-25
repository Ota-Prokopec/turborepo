<script lang="ts">
	import ButtonWithIcon from '$lib/components/Buttons/ButtonWithIcon.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import IconEdit from '$lib/components/Icons/IconEdit.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import { twMerge } from 'tailwind-merge'

	let className = ''
	export { className as class }
</script>

<ButtonWithIcon
	icon={IconEdit}
	on:click
	class={twMerge(className)}
	props={{ color: 'blue' }}
>
	<Text>{$LL.component.EditPetButton.label()}</Text>
</ButtonWithIcon>
