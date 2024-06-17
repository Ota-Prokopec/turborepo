import { scalarType } from 'nexus'

export default scalarType({
	name: 'Date',
	asNexusMethod: 'date',
	sourceType: 'Date',
	deprecation: 'Date',

	serialize: (outputValue: unknown) => {
		if (!(outputValue instanceof Date)) throw new TypeError('output has to be type Date')
		return new Date(outputValue) // Assuming you want to serialize the Date to a string format
	},
	parseValue: (inputValue: unknown) => {
		if (typeof inputValue !== 'string' || isNaN(Date.parse(inputValue)))
			throw new TypeError('input has to be a valid Date string')
		return new Date(inputValue)
	},
	parseLiteral: (valueNode: any) => {
		if (valueNode.kind !== 'StringValue' || isNaN(Date.parse(valueNode.value)))
			throw new TypeError('value node has to be a valid Date string')
		if (valueNode.kind === valueNode.INT) {
			return parseInt(valueNode.value, 10) // ast value is always in string format
		}
		return null
	},
})
