import { Gallery } from './Gallery'

const bikePictures = Array.from({ length: 25 }).map((_item, i) => ({
	src: `/bikePictures/picture-${i + 1}.jpg`,
}))

export const BikeGallery = () => {
	return <Gallery pictures={bikePictures}></Gallery>
}
