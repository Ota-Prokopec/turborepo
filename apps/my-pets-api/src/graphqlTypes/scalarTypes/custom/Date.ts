// import { scalarType } from 'nexus'
// import { z } from 'zod'

// export default scalarType({
// 	name: 'Date',
// 	asNexusMethod: 'date',
// 	sourceType: 'Date',
// 	deprecation: 'Date',

// 	serialize: (outputValue: unknown) => {
// 		if (z.date().parse(outputValue)) throw new TypeError('output has to be type Date')
// 		return outputValue
// 	},
// 	parseValue: (inputValue: unknown) => {
// 		if (typeof inputValue !== 'string' || isNaN(Date.parse(inputValue)))
// 			throw new TypeError('input has to be type Date')
// 		return new Date(inputValue)
// 	},
// 	parseLiteral: (valueNode: unknown) => {
// 		if (typeof valueNode !== 'string' || isNaN(Date.parse(valueNode)))
// 			throw new TypeError('value node has to be type Date')
// 		return new Date(valueNode)
// 	},
// })
