<script lang="ts">
	import { device } from '@repo/utils';
	import Icon from './Icon.svelte';
	import Popover from './Popover.svelte';
	export let placement: 'bottom' | 'left' | 'right' | 'top' = 'bottom';
	export let trigger: 'hover' | 'click' = device.recognizeWidth() === 'mobile' ? 'click' : 'hover';
	export let color:
		| 'gray'
		| 'red'
		| 'yellow'
		| 'green'
		| 'indigo'
		| 'default'
		| 'purple'
		| 'pink'
		| 'blue'
		| 'light'
		| 'dark'
		| 'dropdown'
		| 'navbar'
		| 'navbarUl'
		| 'form'
		| 'none' = 'green';

	let className = '';
	export { className as class };
</script>

<Icon class="text-sm text-blue-500" icon="fa fa-question-circle" />
<Popover class={className} {trigger} {placement} {color}><slot /></Popover>
