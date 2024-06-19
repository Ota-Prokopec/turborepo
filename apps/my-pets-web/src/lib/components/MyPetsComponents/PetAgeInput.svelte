<script lang="ts">
	import LL from '$src/i18n/i18n-svelte'
	import DatePicker from '../Common/DatePicker.svelte'

	export let date: Date
</script>

<DatePicker
	bind:dateValue={date}
	required
	floatingLabel={$LL.component.PetAgeInput.datePicker.label()}
></DatePicker>
