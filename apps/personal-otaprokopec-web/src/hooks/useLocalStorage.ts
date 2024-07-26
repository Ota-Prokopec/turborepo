import { useEffect, useState } from 'react'

export type Items = {
	LikedbikePictures: string[]
}

export const useLocalStorage = <T extends keyof Items>(name: T) => {
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
