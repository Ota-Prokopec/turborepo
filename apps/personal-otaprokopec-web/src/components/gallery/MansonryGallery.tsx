import { ReactNode } from 'react'

export type MansonryGalleryProps = {
	columns: number
	children: ReactNode
}

export const MansonryGallery = ({ columns, children }: MansonryGalleryProps) => {
	return (
		<div
			className="grid"
			style={{
				gridTemplateColumns: Array.from({ length: columns })
					.map(() => '1fr')
					.join(' '),
			}}
		>
			{children}
		</div>
	)
}
