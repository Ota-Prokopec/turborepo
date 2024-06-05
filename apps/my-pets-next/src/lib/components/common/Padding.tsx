export default ({
	children,
	className,
	padding,
}: {
	children: React.ReactNode
	className: string
	padding: string
}) => {
	return (
		<div style={{ padding: padding }} className={className}>
			{children}
		</div>
	)
}
