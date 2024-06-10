<script lang="ts">
	import type { Base64 } from '@repo/ts-types'
	import { compressImageFile, elementIdGenerator, fileToBase64 } from '@repo/utils'
	import { Dropzone } from 'flowbite-svelte'
	import { createEventDispatcher } from 'svelte'
	import { twMerge } from 'tailwind-merge'

	//	import clipboard from '$lib/utils/clipboard'
	const dispatch = createEventDispatcher<{
		image: { name: string; base64: Base64; file: File }
		error: {
			message: string
			code: number
		}
	}>()

	export let compression: { maxSizeInMB: number } | undefined = undefined
	export let disabled: boolean = false
	export let isLoading = false

	const id = elementIdGenerator()

	let className = ''
	export { className as class }

	const change = async (file: File) => {
		isLoading = true

		if (compression) {
			file = await compressImageFile(file, compression.maxSizeInMB)
		}

		const base64 = await fileToBase64(file)

		dispatch('image', { name: file.name, base64: base64, file: file })

		isLoading = false
	}

	const dropHandle = async (event: any) => {
		event.preventDefault()
		const files = event.dataTransfer.files
		if (files.length > 0) change(files[0])
	}

	const handleChange = async (event: any) => {
		const files = event.target.files
		if (files.length > 0) change(files[0])
	}
</script>

<Dropzone
	class={twMerge('object-cover min-w-none ', className)}
	{id}
	accept="image/*"
	on:drop={dropHandle}
	on:dragover={(event) => {
		event.preventDefault()
	}}
	on:change={handleChange}
	{disabled}
>
	<slot />
</Dropzone>
