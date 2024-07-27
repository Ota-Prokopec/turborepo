import { LuLoader } from 'react-icons/lu'
import { cn } from '../utils'

export type LoadingProps = {
	className?: string
}

export const Loading = ({ className }: LoadingProps) => {
	return (
		<LuLoader
			className={cn(
				'fill-lightModeTextColor dark:fill-darkModeTextColor w-5 h-5 animate-spin',
				className,
			)}
		></LuLoader>
	)
}
