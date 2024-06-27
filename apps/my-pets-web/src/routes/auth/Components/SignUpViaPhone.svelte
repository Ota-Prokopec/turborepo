<script lang="ts">
	import { goto } from '$app/navigation'
	import { PUBLIC_SESSION_NAME } from '$env/static/public'
	import { account } from '$lib/appwrite/appwrite'
	import Icon from '$lib/components/Common/Icon.svelte'
	import Loading from '$lib/components/Common/Loading.svelte'
	import PhoneInput from '$lib/components/Common/PhoneInput.svelte'
	import Right from '$lib/components/Common/Right.svelte'
	import Row from '$lib/components/Common/Row.svelte'
	import Text from '$lib/components/Common/Text.svelte'
	import IconPhone from '$lib/components/Icons/IconPhone.svelte'
	import PincodeInput from '$lib/components/Inputs/PincodeInput.svelte'
	import ErrorModal from '$lib/components/MyPetsComponents/ErrorModal.svelte'
	import lsStore, { storage } from '$lib/utils/lsStore'
	import { sdk } from '$src/graphql/sdk'
	import LL from '$src/i18n/i18n-svelte'
	import { post } from '@repo/utils'
	import { ID } from 'appwrite'
	import { Button, Modal } from 'flowbite-svelte'

	export let phoneNumber: string = ''
	export let phoneVerificationCode: string = ''

	let progress: 'phone-modal' | 'verification-modal' | null = null
	let status: 'loading' | 'token-error' | 'verification-error' | null = null

	const createVerification = async () => {
		status = 'loading'
		try {
			await account.deleteSessions()
		} catch (error) {}

		try {
			$lsStore.phoneAuthToken = await account.createPhoneToken(ID.unique(), phoneNumber)
			progress = 'verification-modal'
			status = null
		} catch (error) {
			status = 'token-error'
		}
	}
	const verifyPhone = async () => {
		status = 'loading'
		if (!$lsStore.phoneAuthToken) throw new Error('User has to get token first')
		try {
			const verification = await account.createSession(
				$lsStore.phoneAuthToken.userId,
				phoneVerificationCode,
			)
			const session = storage.cookieFallback
				? storage.cookieFallback[PUBLIC_SESSION_NAME]
				: undefined

			console.log(session)

			if (!session) throw new Error('Cant read session from local-storage')

			await sdk.setSession({ session: session })
			await post('/api/auth/setSession', { session })
			goto('/', { invalidateAll: true, replaceState: true })
		} catch (error) {
			status = 'verification-error'
		}
	}
</script>

<Button on:click={() => (progress = 'phone-modal')} color="blue">
	<Row class="gap-2">
		{$LL.component.SignUpViaPhone.buttonLabel()}
		<Icon>
			<IconPhone></IconPhone>
		</Icon>
	</Row>
</Button>

{#if progress === 'phone-modal'}
	<Modal dismissable={false} title={$LL.component.SignUpViaPhone.phoneModal.title()} open>
		<PhoneInput bind:value={phoneNumber}></PhoneInput>
		<Right>
			<Button
				on:click={() => createVerification()}
				color="blue"
				disabled={phoneNumber.length === 0}
			>
				{#if status === 'loading'}
					<Loading></Loading>
				{:else}
					{$LL.component.SignUpViaPhone.phoneModal.sendButtonLabel()}
				{/if}
			</Button>
		</Right>
	</Modal>
{/if}

{#if progress === 'verification-modal'}
	<Modal dismissable={false} title={'Sign up with phone number'} open>
		<Text>{$LL.component.SignUpViaPhone.verificationModal.title()}</Text>
		<PincodeInput size={6} bind:value={phoneVerificationCode}></PincodeInput>
		<Right>
			<Button on:click={() => verifyPhone()} color="green">
				{#if status === 'loading'}
					<Loading></Loading>
				{:else}
					{$LL.component.SignUpViaPhone.verificationModal.verfifyButtonLabel()}
				{/if}
			</Button>
		</Right>
	</Modal>
{/if}

{#if status === 'token-error'}
	<ErrorModal>{$LL.component.SignUpViaPhone.tokenErrorMessage()}</ErrorModal>
{:else if status === 'verification-error'}
	<ErrorModal>
		{$LL.component.SignUpViaPhone.verificationErrorMessage()}
	</ErrorModal>
{/if}
