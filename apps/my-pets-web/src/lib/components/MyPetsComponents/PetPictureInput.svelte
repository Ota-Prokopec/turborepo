<script lang="ts">
	import { PUBLIC_MAX_PICTURE_SIZE_IN_MB } from '$env/static/public'
	import LL from '$src/i18n/i18n-svelte'
	import type { Base64 } from '@repo/ts-types'
	import { compressImageFile, fileToBase64 } from '@repo/utils'
	import { createEventDispatcher } from 'svelte'
	import RequiredBadge from '../Badges/RequiredBadge.svelte'
	import Card from '../Common/Card.svelte'
	import Text from '../Common/Text.svelte'
	import AvatarImageInput from '../ImageInputs/AvatarImageInput.svelte'

	const dispatch = createEventDispatcher<{ image: { base64: Base64 } }>()

	const avatarPictureSrc = '/pictures/petPictureInputAvatar.png'
	export let src: string | Base64 | undefined = undefined

	const getImage = async (base64: Base64) => {
		dispatch('image', { base64: base64 })
	}
</script>

<Card>
	<RequiredBadge class="absolute top-[-8px] right-[-8px]"></RequiredBadge>

	<Text>{$LL.component.PetPictureInput.title()}</Text>
	<AvatarImageInput
		compression={{ maxSizeInMB: parseFloat(PUBLIC_MAX_PICTURE_SIZE_IN_MB) }}
		avatarSrc={src || avatarPictureSrc}
		on:image={(e) => getImage(e.detail.base64)}
	></AvatarImageInput>
</Card>
