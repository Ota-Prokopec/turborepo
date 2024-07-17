'use client'

import { scroll as scrollMotion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

export const useScroll = () => {
	const [scroll, setScroll] = useState<number>(0)
	useEffect(() => {
		scrollMotion((progress) => setScroll(progress))
	})
	return [scroll, setScroll] as const
}
