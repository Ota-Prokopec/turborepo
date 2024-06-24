import { writable } from 'svelte/store'

export const svelteParams = (key: string) => {
	const store = writable<string | null>()

	onChange(key, (value) => {
		store.set(value)
	})

	store.subscribe((value) => {
		if (!value) return
		updateSearchParams({ [key]: value })
	})

	return store
}

// Function to handle URL search query changes for a specific parameter
const onChange = (key: string, callback: (value: string | null) => void) => {
	let currentValue = getSearchParams().get(key)

	// Initial call to the callback with the current value of the specific search parameter
	callback(currentValue)

	// Event listener for popstate event
	window.addEventListener('popstate', () => {
		const newValue = getSearchParams().get(key)
		if (newValue !== currentValue) {
			currentValue = newValue
			callback(currentValue)
		}
	})
}

function getSearchParams() {
	return new URLSearchParams(window.location.search)
}

const updateSearchParams = (newParams: { [x: string]: string }) => {
	const url = new URL(window.location.href)
	url.search = new URLSearchParams(newParams).toString()
	window.history.pushState({}, '', url)
}
