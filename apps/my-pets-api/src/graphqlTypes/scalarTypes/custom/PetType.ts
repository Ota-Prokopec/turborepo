import { isPetType } from '@repo/my-pets-tstypes'
import { scalarType } from 'nexus'

export default scalarType({
	name: 'PetType',
	asNexusMethod: 'petType',
	sourceType: "'cat' | 'dog'",
	deprecation: "'cat' | 'dog'",

	serialize: (outputValue: unknown) => {
		if (!isPetType(outputValue)) throw new Error('Invalid output value')
		return outputValue
	},
	parseValue: (inputValue: unknown) => {
		if (!isPetType(inputValue)) throw new Error('Invalid input value')

		return inputValue
	},
	parseLiteral: (valueNode: unknown) => {
		if (!isPetType(valueNode)) throw new Error('Invalid node value')
		return valueNode
	},
})
