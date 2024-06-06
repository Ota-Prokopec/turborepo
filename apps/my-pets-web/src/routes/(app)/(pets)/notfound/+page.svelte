<script lang="ts">
	import { goto } from '$app/navigation'
	import Center from '$lib/components/Common/Center.svelte'
	import { navigate } from '$lib/utils/navigator'
	import NoPetFound from './Components/NoPetFound.svelte'
</script>

<Center class="w-full h-full"
	><NoPetFound on:reload={() => navigate('/', { invalidateAll: true })}
	></NoPetFound></Center
>
