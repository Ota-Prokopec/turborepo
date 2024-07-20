import { device } from '@repo/utils'
import { useEffect, useState } from 'react'

export type UseRecognizeWidthPayload = {
	width: ReturnType<typeof device.recognizeWidth>
}

export const useRecognizeWidth = (): UseRecognizeWidthPayload => {
	const [width, setWidth] = useState<ReturnType<typeof device.recognizeWidth>>(null)

	useEffect(() => {
		const pageWidth = device.recognizeWidth()

		setWidth(pageWidth)
	}, [])

	return { width }
}
