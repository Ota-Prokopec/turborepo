import { Button } from '../ui/button'
import { ButtonLink } from './ButtonLink'
import { Center } from './Center'
import { Column } from './Column'
import { Iframe } from './Iframe'

export type OtaProkopecIframeProps = {}

export const OtaProkopecIframe = ({}: OtaProkopecIframeProps) => {
	return (
		<Column className="w-full h-auto gap-4 relative">
			<Iframe
				scrolling="no"
				className="w-full overflow-hidden h-[800px] z-10"
				src="https://www.otaprokopec.cz"
			></Iframe>
			<Center className="mt-[-50px] z-30 top-[-10px] relative">
				<ButtonLink href="https://www.otaprokopec.cz" className="mobile:w-full w-max ">
					Load more ...
				</ButtonLink>
			</Center>
			<div className=" w-full h-[200px]  absolute bottom-0 left-0 z-20  overflow-visible bg-[linear-gradient(to_top,grey,transparent)] rounded-b-3xl"></div>
		</Column>
	)
}
