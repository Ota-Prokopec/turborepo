<script lang="ts">
	import { account } from '$lib/appwrite/appwrite'
	import Icon from '$lib/components/Common/Icon.svelte'
	import Loading from '$lib/components/Common/Loading.svelte'
	import PhoneInput from '$lib/components/Common/PhoneInput.svelte'
	import Right from '$lib/components/Common/Right.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import IconPhone from '$lib/components/Icons/IconPhone.svelte'
	import PincodeInput from '$lib/components/Inputs/PincodeInput.svelte'
	import { ID } from 'appwrite'
	import { Button, ButtonGroup, Modal } from 'flowbite-svelte'

	export let phoneNumber: string = '737401386'
	export let phoneVerificationCode: string = ''
	let phoneToken:
		| Awaited<ReturnType<typeof account.createPhoneVerification>>
		| undefined = undefined

	let progress: 'phone-page' | 'verification-page' | null = 'phone-page'
	let isVerificationLoading = false

	const createVerification = async () => {
		try {
			await account.deleteSessions()
		} catch (error) {}
		const user = await account.create(ID.unique(), 'fadjlaj@fa.com', 'password')
		await account.updatePhone(phoneNumber, 'password')

		await account.createPhoneSession(user.$id, `+420${phoneNumber}`)
		phoneToken = await account.createPhoneVerification()
		console.log(phoneToken)
	}
	const verifyPhone = async () => {
		if (!phoneToken) throw new Error('User has to get token first')
		const verification = await account.updatePhoneSession(
			phoneToken.userId,
			phoneToken.secret,
		)
	}
</script>

<Button on:click={() => (progress = 'phone-page')} color="blue">
	<Row class="gap-2">
		Sign up with phone number
		<Icon>
			<IconPhone></IconPhone>
		</Icon>
	</Row>
</Button>

{#if progress === 'phone-page'}
	<Modal dismissable={false} title={'Sign up with phone number'} open>
		<Text>Write your phone number, we will send you a verification code.</Text>
		<PhoneInput bind:value={phoneNumber}></PhoneInput>
		<Right>
			<Button
				on:click={() => createVerification()}
				color="blue"
				disabled={phoneNumber.length === 0}>Send</Button
			>
		</Right>
	</Modal>
{/if}

{#if progress === 'verification-page'}
	<Modal dismissable={false} title={'Sign up with phone number'} open>
		<Text
			>We sent you a verification code, write it down to verify your phone number.</Text
		>
		<PincodeInput bind:value={phoneVerificationCode}></PincodeInput>
		<Right>
			<Button on:click={() => verifyPhone()} color="green">
				{#if isVerificationLoading}
					<Loading></Loading>
				{:else}
					Verify
				{/if}
			</Button>
		</Right>
	</Modal>
{/if}
