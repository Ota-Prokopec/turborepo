<script lang="ts">
	import ButtonLinkToDeveloperPage from '$lib/components/Buttons/ButtonLinkToDeveloperPage.svelte'
	import Column from '$lib/components/Common/Column.svelte'
	import Padding from '$lib/components/Common/Padding.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import { Heading } from 'flowbite-svelte'
	import SignUpViaSocialMedia from './Components/SignUpViaSocialMedia.svelte'
	import SignUpViaPhone from './Components/SignUpViaPhone.svelte'
</script>

<Column class="flex justify-center items-center w-full h-auto">
	<Padding padding="16px">
		<Heading class="text-xl text-center" tag="h1">{$LL.page.signIn.welcome()}</Heading>
	</Padding>

	<SignUpViaSocialMedia></SignUpViaSocialMedia>
	<SignUpViaPhone></SignUpViaPhone>

	<ButtonLinkToDeveloperPage></ButtonLinkToDeveloperPage>
</Column>
