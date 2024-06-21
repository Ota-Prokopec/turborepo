<script lang="ts">
	import Input from '$lib/components/Common/Input.svelte'
	import { sdk } from '$src/graphql/sdk'

	sdk.setSession({ session: 'ahoj' })
</script>

<Input class="w-full" pattern={/[^0-9]/} />
