import { ReactNode } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export type LinkProps = {
	children: ReactNode
	className?: string
	href: string
}
export const ButtonLink = ({ children, className, href }: LinkProps) => {
	return (
		<Link href={href}>
			<Button className={className}>{children}</Button>
		</Link>
	)
}
