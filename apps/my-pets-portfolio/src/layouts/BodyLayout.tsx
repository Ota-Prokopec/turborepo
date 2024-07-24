import { cn } from '@/components/utils'
import { ContextProviders } from '@/contexts/ContextProviders'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export type BodyLayoutProps = {
	children: ReactNode
}

export const BodyLayout = ({ children }: BodyLayoutProps) => {
	return (
		<main className={cn(inter.className)}>
			<ContextProviders>{children}</ContextProviders>
		</main>
	)
}
