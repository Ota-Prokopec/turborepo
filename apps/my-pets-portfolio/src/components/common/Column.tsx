import { twMerge } from 'tailwind-merge'

type ColumnProps = {
	children: React.ReactNode
	className?: string
}

export const Column = ({ children, className }: ColumnProps) => {
	return (
		<div className={twMerge('w-auto h-auto flex flex-wrap flex-col', className)}>
			{children}
		</div>
	)
}
