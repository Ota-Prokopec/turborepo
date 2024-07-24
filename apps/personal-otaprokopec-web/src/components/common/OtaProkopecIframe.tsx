import { Button } from '../ui/button'
import { ButtonLink } from './ButtonLink'
import { Center } from './Center'
import { Column } from './Column'
import { Iframe } from './Iframe'

export type OtaProkopecIframeProps = {}

export const OtaProkopecIframe = ({}: OtaProkopecIframeProps) => {
	return (
		<Column className="w-full h-auto gap-4">
			<Iframe
				scrolling="no"
				className="w-full overflow-hidden h-[800px]"
				src="http://www.otaprokopec.cz"
			></Iframe>
			<Center className="mt-[-50px]">
				<ButtonLink href="http://www.otaprokopec.cz" className="mobile:w-full w-max ">
					Load more ...
				</ButtonLink>
			</Center>
		</Column>
	)
}
