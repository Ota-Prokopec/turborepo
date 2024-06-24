<script lang="ts">
	import Avatar from '$lib/components/Common/Avatar.svelte'
	import Column from '$lib/components/Common/Column.svelte'
	import Right from '$lib/components/Common/Right.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import { type GraphqlDocument } from '@repo/appwrite-types'
	import { type TPetData } from '@repo/my-pets-tstypes'
	import OwnerPhoneNumberItem from '../Components/Items/OwnerPhoneNumberItem.svelte'
	import PetAddressItem from '../Components/Items/PetAddressItem.svelte'
	import PetAllergensItem from '../Components/Items/PetAllergensItem.svelte'
	import PetDescriptionCustomFieldsItem from '../Components/Items/PetDescriptionCustomFieldsItem.svelte'
	import PetGenderItem from '../Components/Items/PetGenderItem.svelte.svelte'
	import PetNameItem from '../Components/Items/PetNameItem.svelte'
	import PetTreatingItem from '../Components/Items/PetTreatingItem.svelte'
	import PetTypeItem from '../Components/Items/PetTypeItem.svelte'
	import IFoundPetButton from './IFoundPetButton.svelte'
	import PetAgeItem from './Items/PetAgeItem.svelte'
	import PetFoundLocations from './Items/PetFoundLocationItem/PetFoundLocations.svelte'
	import PetUrlItem from './Items/PetUrlItem.svelte'
	import PetWeightItem from './Items/PetWeightItem.svelte'
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
			<PetSettings {petData}></PetSettings>
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
