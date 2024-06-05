<script lang="ts">
	export let padding: string

	let className = ''
	export { className as class }
</script>

<div style={`padding: ${padding}`} class={className}>
	<slot></slot>
</div>
