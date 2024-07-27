import { device } from '@repo/utils'

import { useEffect, useState } from 'react'

export type UseRecognizeWidthPayload = {
	width: ReturnType<typeof device.recognizeWidth>
}

export const useRecognizeWidth = (): UseRecognizeWidthPayload => {
	const [width, setWidth] = useState<ReturnType<typeof device.recognizeWidth>>(null)

	useEffect(() => {
		setWidth(device.recognizeWidth())

		const resizeHandler = () => setWidth(device.recognizeWidth())
		addEventListener('resize', resizeHandler)

		return () => {
			removeEventListener('resize', resizeHandler)
		}
	}, [])

	return { width }
}
