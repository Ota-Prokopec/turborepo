export type MyPetsLogoProps = {
	className?: string
	style?: React.CSSProperties
}

export const MyPetsLogo = ({ className, style }: MyPetsLogoProps) => {
	return <img style={style} className={className} src={'/pictures/icon.png'}></img>
}
