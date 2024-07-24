export type IframeProps = {
	src: string
	className?: string
	scrolling?: 'yes' | 'no'
}

export const Iframe = ({ src, className, scrolling }: IframeProps) => {
	return (
		<iframe
			scrolling={scrolling}
			className={className}
			src={src}
			sandbox="allow-same-origin"
		></iframe>
	)
}
