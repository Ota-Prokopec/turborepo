export const getNormalizedDate = (date: Date) => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hours = date.getHours()
	const minutes = date.getMinutes()
	return `${hours}:${minutes} ${day}.${month}.${year}`
}
