import { useEffect, useState } from 'react'

export const getLocalStorageHook = <Items extends Record<string>>(name: T) => {
	const [state, setState] = useState<Items[T] | null>(null)

	useEffect(() => {
		const value = localStorage.getItem(name)
		if (value) setState(value)
	}, [])

	useEffect(() => {
		if (state) localStorage.setItem(name, state)
	}, [state])

	return [state, setState] as const
}
