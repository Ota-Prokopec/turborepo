import { twMerge } from 'tailwind-merge'

type ColumnProps = {
	children: React.ReactNode
	className?: string
	style?: React.CSSProperties
}

export const Right = ({ children, className, style }: ColumnProps) => {
	return (
		<div style={style} className={twMerge('w-auto h-auto flex justify-end', className)}>
			{children}
		</div>
	)
}
