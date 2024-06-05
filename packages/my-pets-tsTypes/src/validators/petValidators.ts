import { TPetGender, zodPetGender, zodPetType, type TPetType } from '../PetData'

export const isPetType = (value: unknown): value is TPetType => {
	try {
		zodPetType.parse(value)
		return true
	} catch (error) {
		return false
	}
}

export const isPetGender = (value: unknown): value is TPetGender => {
	try {
		zodPetGender.parse(value)
		return true
	} catch (error) {
		return false
	}
}
