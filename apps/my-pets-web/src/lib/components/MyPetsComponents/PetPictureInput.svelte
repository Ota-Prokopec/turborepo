<script lang="ts">
	import LL from '$src/i18n/i18n-svelte'
	import type { Base64 } from '@repo/ts-types'
	import RequiredBadge from '../Badges/RequiredBadge.svelte'
	import Card from '../Common/Card.svelte'
	import Text from '../Common/Text.svelte'
	import AvatarImageInput from '../ImageInputs/AvatarImageInput.svelte'

	const avatarPictureSrc = 'pictures/petPictureInputAvatar.png'
	export let src: string | Base64 | undefined = undefined
</script>

<Card>
	<RequiredBadge class="absolute top-[-8px] right-[-8px]"></RequiredBadge>

	<Text>{$LL.component.PetPictureInput.title()}</Text>
	<AvatarImageInput avatarSrc={src || avatarPictureSrc} on:image></AvatarImageInput>
</Card>
