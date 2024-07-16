import { motion, useScroll } from 'framer-motion'
import { Column } from './Column'
import { useEffect } from 'react'
import { Grid } from '@mui/material'

export type ScrollAnimationProps = {
	children: React.ReactNode[]
	className?: string
}

export const PetScroll = ({ children, className }: ScrollAnimationProps) => {
	return (
		<Grid container spacing={2} className={className}>
			{children.map((child, i) => (
				<Grid xs={4}>
					<motion.div
						key={i}
						className="card-container"
						initial={{ scale: 0.6 }}
						whileInView={{ scale: 1 }}
						viewport={{ once: true }}
					>
						{child}
					</motion.div>
				</Grid>
			))}
		</Grid>
	)
}
