<script lang="ts">
	import type { Base64 } from '@repo/ts-types'
	import Avatar from '../Common/Avatar.svelte'
	import ImageInput from './ImageInput.svelte'
	import Loading from '../Common/Loading.svelte'

	export let imageURL: Base64 | null | undefined | string = undefined
	export let disabled: boolean = false
	export let isLoading = false
	export let avatarSrc: string | undefined = undefined
	export let compression: { maxSizeInMB: number } | undefined = undefined

	let className = ''
	export { className as class }
	export let avatarClassName = ''

	$: imgUrlAsString = imageURL as string
</script>

<ImageInput
	{compression}
	class={className}
	{disabled}
	bind:isLoading
	on:image
	on:image={(e) => {
		imageURL = e.detail.base64
	}}
>
	{#if isLoading}
		<Loading />
	{:else}
		<Avatar size="xl" class={avatarClassName} src={imgUrlAsString || avatarSrc} />
	{/if}
</ImageInput>
