<script lang="ts">
	import lsStore from '$lib/utils/lsStore'
	import type { ColorTheme } from '@repo/ts-types'
	import { MoonSolid, SunSolid } from 'flowbite-svelte-icons'
	import { createEventDispatcher } from 'svelte'
	import { twMerge } from 'tailwind-merge'

	const dispatch = createEventDispatcher<{ themeChange: { theme: ColorTheme } }>()

	export let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5'

	export let theme: ColorTheme

	$: dispatch('themeChange', { theme })

	const toggleTheme = async () => {
		theme = theme === 'dark' ? 'light' : 'dark'
		if (theme === 'dark') document.documentElement.classList.add('dark')
		else document.documentElement.classList.remove('dark')
		$lsStore.colorTheme = theme
	}

	let className = ''
	export { className as class }
</script>

<button
	on:click={toggleTheme}
	type="button"
	{...$$restProps}
	class={twMerge(btnClass, className)}
>
	<span class="hidden dark:block">
		<slot name="lightIcon">
			<SunSolid />
		</slot>
	</span>
	<span class="block dark:hidden">
		<slot name="darkIcon">
			<MoonSolid />
		</slot>
	</span>
</button>
