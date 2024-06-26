<script lang="ts">
	import Column from '$lib/components/Common/Column.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import RoundSkeletonLoading from '$lib/components/SkeletonLoadings/RoundSkeletonLoading.svelte'
	import { CardPlaceholder } from 'flowbite-svelte'
	import PetAgeSkeletonLoading from './Items/PetAge/PetAgeSkeletonLoading.svelte'
	import OwnerPhoneNumberSkeletonLoading from './Items/ownerPhoneNumber/OwnerPhoneNumberSkeletonLoading.svelte'
	import PetGenderSkeletonLoading from './Items/petGender/PetGenderSkeletonLoading.svelte'
	import PetNameSkeletonLoading from './Items/petName/PetNameSkeletonLoading.svelte'
	import PetTypeSkeletonLoading from './Items/petType/PetTypeSkeletonLoading.svelte'
	import PetUrlSkeletonLoading from './Items/petUrl/PetUrlSkeletonLoading.svelte'
	import CardSkeletonLoading from '$lib/components/SkeletonLoadings/CardSkeletonLoading.svelte'
</script>

<Column class="h-auto mobile:w-full w-[500px] justify-center flex items-center pt-10">
	<RoundSkeletonLoading class="w-36 h-36"></RoundSkeletonLoading>
	<Row
		class="mobile:gap-[120px] gap-4 items-center w-full mobile:justify-center relative top-[-50px]"
	>
		<PetTypeSkeletonLoading></PetTypeSkeletonLoading>
		<PetGenderSkeletonLoading></PetGenderSkeletonLoading>
	</Row>
	<Column class="w-full">
		<PetUrlSkeletonLoading class="mobile:w-full w-52 flex justify-start"
		></PetUrlSkeletonLoading>
		<Column class="w-full max-w-[600px]">
			<PetNameSkeletonLoading></PetNameSkeletonLoading>
			<OwnerPhoneNumberSkeletonLoading></OwnerPhoneNumberSkeletonLoading>
			<PetAgeSkeletonLoading></PetAgeSkeletonLoading>
		</Column>
		<CardSkeletonLoading class="h-[120px]"></CardSkeletonLoading>
		<CardSkeletonLoading class="h-[200px]"></CardSkeletonLoading>
		<CardSkeletonLoading class="h-[150px]"></CardSkeletonLoading>
		<CardSkeletonLoading class="h-[100px]"></CardSkeletonLoading>
	</Column>
</Column>
