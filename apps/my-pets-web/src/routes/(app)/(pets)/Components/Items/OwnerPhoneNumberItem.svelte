<script lang="ts">
	import Row from '$lib/components/Common/Row.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import LL from '$src/i18n/i18n-svelte'
	import { A } from 'flowbite-svelte'
	import InfoItem from '../../Components/InfoItem.svelte'
	import { LinkOutline } from 'flowbite-svelte-icons'
	import Icon from '$lib/components/Common/Icon.svelte'
	import IconLink from '$lib/components/Icons/IconLink.svelte'
	import IconPhone from '$lib/components/Icons/IconPhone.svelte'

	export let number: string
</script>

<Row class=" flex gap-2">
	<Icon class="w-6 h-6 fill-blue-900">
		<IconPhone></IconPhone>
	</Icon>
	<A href={`tel:${number}`}>
		<Row class="gap-1 items-center">
			<Text class="text-blue-300">
				{number}
			</Text>
			<Icon class="w-5 h-5 ">
				<IconLink></IconLink>
			</Icon>
		</Row>
	</A>
</Row>
