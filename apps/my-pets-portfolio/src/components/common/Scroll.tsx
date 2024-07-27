import { motion, useScroll } from 'framer-motion'
import { Column } from './Column'
import { useEffect } from 'react'
import { Grid } from '@mui/material'

export type ScrollAnimationProps = {
	children: React.ReactNode[]
	className?: string
}

export const Scroll = ({ children, className }: ScrollAnimationProps) => {
	return <Column className={className}>{children}</Column>
}
