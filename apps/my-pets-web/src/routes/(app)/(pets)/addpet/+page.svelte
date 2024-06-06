<script lang="ts">
	import { goto } from '$app/navigation'
	import { navigate } from '$lib/utils/navigator'
	import CreateNewPetModal from '../notfound/Components/CreateNewPetModal.svelte'
</script>

<CreateNewPetModal
	open
	on:returnBack={() => {
		navigate('/', { invalidateAll: true })
	}}
></CreateNewPetModal>
