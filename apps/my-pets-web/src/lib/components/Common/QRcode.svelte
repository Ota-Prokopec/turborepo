<script lang="ts">
	import { elementIdGenerator } from '@repo/utils'
	import QRcode from 'qrcode'
	import { onMount } from 'svelte'

	export let value: string

	const id = elementIdGenerator('grcode-')

	const load = (e: HTMLCanvasElement) => {
		QRcode.toDataURL(e, value, { errorCorrectionLevel: 'high' }, (err) => {
			console.log(err)
		})
	}

	let className = ''
	export { className as class }
</script>

<canvas class={className} use:load {id}></canvas>
