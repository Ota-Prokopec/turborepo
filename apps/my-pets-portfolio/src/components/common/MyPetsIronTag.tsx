import { Avatar, AvatarSizes } from 'flowbite-react'

export type MyPetsIconTagProps = {
	className?: string
	style?: React.CSSProperties
}

export const MyPetsIconTag = ({ className, style }: MyPetsIconTagProps) => {
	return (
		<img
			style={style}
			className={className}
			src={'/pictures/tagPictures/tagPicture1.png'}
		></img>
	)
}
