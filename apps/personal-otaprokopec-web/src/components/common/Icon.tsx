import { ReactNode } from 'react'

export type IconProps = {
	children: ReactNode
	className?: string
	onClick: () => void
}

export const Icon = ({ children, className, onClick }: IconProps) => {
	return (
		<button onClick={onClick} className={className}>
			{children}
		</button>
	)
}
