import { isPetGender, isPetType } from '@repo/my-pets-tstypes'
import { scalarType } from 'nexus'

export default scalarType({
	name: 'PetGender',
	asNexusMethod: 'petGender',
	sourceType: "'male' | 'female'",
	deprecation: "'male' | 'female'",

	serialize: (outputValue: unknown) => {
		if (!isPetGender(outputValue)) throw new Error('Invalid output value')
		return outputValue
	},
	parseValue: (inputValue: unknown) => {
		if (!isPetGender(inputValue)) throw new Error('Invalid input value')
		return inputValue
	},
	parseLiteral: (valueNode: unknown) => {
		if (!isPetGender(valueNode)) throw new Error('Invalid node value')
		return valueNode
	},
})
