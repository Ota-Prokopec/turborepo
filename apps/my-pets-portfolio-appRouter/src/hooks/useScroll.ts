'use client'

import { scroll as scrollMotion } from 'framer-motion'
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'

export type UseScrollPayload = {
	scroll: number
}

export const useScroll = (): UseScrollPayload => {
	const [scroll, setScroll] = useState(0)

	useEffect(() => {
		scrollMotion((progress) => setScroll(progress))
	}, [])

	return { scroll }
}
