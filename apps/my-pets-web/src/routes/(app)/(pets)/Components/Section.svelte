<script lang="ts">
	import Avatar from '$lib/components/Common/Avatar.svelte'
	import Column from '$lib/components/Common/Column.svelte'
	import Right from '$lib/components/Common/Right.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import { type GraphqlDocument } from '@repo/appwrite-types'
	import { type TPetData } from '@repo/my-pets-tstypes'
	import OwnerPhoneNumberItem from './Items/ownerPhoneNumber/OwnerPhoneNumberItem.svelte'
	import PetAddressItem from './Items/petAddress/PetAddressItem.svelte'
	import PetAllergensItem from './Items/PetAllergens/PetAllergensItem.svelte'
	import PetDescriptionCustomFieldsItem from './Items/petDescription/PetDescriptionCustomFieldsItem.svelte'
	import PetGenderItem from './Items/petGender/PetGenderItem.svelte.svelte'
	import PetNameItem from './Items/petName/PetNameItem.svelte'
	import PetTreatingItem from './Items/petTreating/PetTreatingItem.svelte'
	import PetTypeItem from './Items/petType/PetTypeItem.svelte'
	import IFoundPetButton from './IFoundPetButton.svelte'
	import PetAgeItem from './Items/PetAge/PetAgeItem.svelte'
	import PetFoundLocations from '../Components/Items/petFoundLocationItem/PetFoundLocations.svelte'
	import PetUrlItem from './Items/petUrl/PetUrlItem.svelte'
	import PetWeightItem from './Items/petWeight/PetWeightItem.svelte'
	import PetSettings from './PetSettings.svelte'

	export let petData: GraphqlDocument<TPetData>

	export let isOwner: boolean

	$: petUrl = `${location.origin}/pet/${petData.linkId}`
</script>

<Avatar src={petData.petPicture} size="xl"></Avatar>
<Row
	class="mobile:gap-[120px] gap-4 items-center w-full mobile:justify-center relative top-[-50px]"
>
	<PetTypeItem petType={petData.petType}></PetTypeItem>
	<PetGenderItem petGender={petData.petGender}></PetGenderItem>
</Row>
<Column class="w-full">
	{#if isOwner}
		<Right>
			<PetSettings bind:petData></PetSettings>
		</Right>
	{:else}
		<IFoundPetButton
			class="mobile:w-full w-max flex justify-start"
			ownerUserId={petData.userId}
			petId={petData._id}
		></IFoundPetButton>
	{/if}

	{#if petData.lostPetLocations.length && isOwner}
		<PetFoundLocations
			class="mobile:w-full w-max flex justify-start"
			bind:locations={petData.lostPetLocations}
		></PetFoundLocations>
	{/if}

	<PetUrlItem class="mobile:w-full w-52 flex justify-start" {petUrl}></PetUrlItem>
	<Column class="w-full max-w-[600px]">
		<PetNameItem petName={petData.petName}></PetNameItem>
		<OwnerPhoneNumberItem number={petData.ownerPhoneNumber}></OwnerPhoneNumberItem>
		<PetAgeItem birthDate={petData.petBirthDate} age={petData.petAge}></PetAgeItem>
		{#if petData.petWeight}
			<PetWeightItem weight={petData.petWeight}></PetWeightItem>
		{/if}
		<PetAddressItem petAddress={petData.petAddress}></PetAddressItem>

		{#if petData.petAllergens.length}
			<PetAllergensItem petAllergens={petData.petAllergens}></PetAllergensItem>
		{/if}

		{#if petData.petTreating.length}
			<PetTreatingItem text={petData.petTreating}></PetTreatingItem>
		{/if}

		{#if petData.petDescriptionCustomFields.length}
			<PetDescriptionCustomFieldsItem fields={petData.petDescriptionCustomFields}
			></PetDescriptionCustomFieldsItem>
		{/if}
	</Column>
</Column>
