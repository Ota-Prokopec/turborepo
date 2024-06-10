import { isCoords } from '@repo/utils'
import { scalarType } from 'nexus'

export default scalarType({
	name: 'Coords',
	asNexusMethod: 'coords',
	sourceType: '[number, number]',
	deprecation: '[number, number]',

	serialize: (outputValue: unknown) => {
		if (!isCoords(outputValue)) throw new TypeError('input has to be type Coords')
		return outputValue
	},
	parseValue: (inputValue: unknown) => {
		if (!isCoords(inputValue)) throw new TypeError('input has to be type Coords')
		return inputValue
	},
	parseLiteral: (valueNode: unknown) => {
		if (!isCoords(valueNode)) throw new TypeError('input has to be type Coords')
		return valueNode
	},
})
