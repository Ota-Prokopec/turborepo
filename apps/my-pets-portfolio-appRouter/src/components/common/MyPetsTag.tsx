import { Avatar, AvatarSizes } from 'flowbite-react'

export type MyPetsTagProps = {
	className?: string
	style?: React.CSSProperties
}

export const MyPetsTag = ({ className, style }: MyPetsTagProps) => {
	return (
		<img
			style={style}
			className={className}
			src={'/pictures/tagPictures/tagPicture1.png'}
		></img>
	)
}
