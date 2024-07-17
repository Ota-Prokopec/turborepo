import { twMerge } from 'tailwind-merge'

type CenterProps = {
	children: React.ReactNode
	className?: string
	style?: React.CSSProperties
}

export const Center = ({ children, className, style }: CenterProps) => {
	return (
		<div
			style={style}
			className={twMerge('flex justify-center items-center w-full h-auto', className)}
		>
			{children}
		</div>
	)
}
