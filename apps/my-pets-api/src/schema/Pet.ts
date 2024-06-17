import { objectType, list, nullable } from 'nexus'
import { Queries } from '../lib/appwrite/appwrite'
import { ApolloError } from 'apollo-server-express'
import { omit } from 'lodash'

export default objectType({
	name: 'Pet',
	definition: (t) => {
		t.string('_createdAt')
		t.string('_updatedAt')
		t.string('_collectionId')
		t.string('_id')
		t.list.string('_permissions')
		t.string('_databaseId')
		t.string('userId')
		t.string('petName')
		t.field('petType', { type: 'PetType' })
		t.list.string('petAllergens')
		t.string('ownerPhoneNumber')
		t.string('petTreating')
		t.string('petAddressId')
		t.string('petPicture', { description: 'Pet Picture is pet pictures URL' })
		t.list.string('petDescriptionCustomFieldIds')
		t.field('petBirthDate', { type: 'Date' })
		t.nullable.string('petMicrochippingId')
		t.field('petGender', { type: 'PetGender' }),
			t.field('petDescriptionCustomFields', {
				type: list('PetDescriptionCustomField'),
				resolve: async (source, args, ctx) => {
					const { collections } = ctx.appwrite
					if (source.petDescriptionCustomFieldIds.length === 0) return []
					const query = Queries.petDescriptionCustomField.equal(
						'$id',
						source.petDescriptionCustomFieldIds,
					)
					const res = await collections.petDescriptionCustomField.listDocuments([query])
					return res.documents
				},
			})
		t.field('petAddress', {
			type: 'PetAddress',
			resolve: async (source, args, ctx) => {
				const { collections } = ctx.appwrite
				const addressDocument = await collections.petAddress.getDocument(
					source.petAddressId,
				)
				if (!addressDocument)
					throw new ApolloError('address that suits to the pet was not found')
				return {
					petAddress: addressDocument.petAddress,
					petAddressCoords: [addressDocument.latitude, addressDocument.longitude],
				}
			},
		})
		t.field('lostPetLocations', {
			type: list('LostPetsLocation'),
			resolve: async (source, args, ctx) => {
				const { collections } = ctx.appwrite
				const queries = [
					Queries.lostPetsLocation.equal('petId', source._id),
					Queries.lostPetsLocation.orderDesc('$createdAt'),
				]

				try {
					const list = await collections.lostPetsLocation.listDocuments(queries)

					return list.documents.map((document: (typeof list.documents)[number]) => ({
						coords: [document.latitude, document.longitude],
						...document,
					}))
				} catch (error) {
					return []
				}
			},
		})
		t.field('linkId', {
			type: 'String',
			resolve: async (source, args, ctx) => {
				const { collections } = ctx.appwrite

				const query = Queries.petIdTranslation.equal('petId', source._id)
				const linkIdDocument = await collections.petIdTranslation.getDocument([query])
				if (!linkIdDocument) throw new Error('Link id document does not exist')
				return linkIdDocument.linkId
			},
		})
		t.field('petMicrochipping', {
			type: nullable('petMicrochipping'),
			resolve: async (source, args, ctx) => {
				const { collections } = ctx.appwrite

				if (!source.petMicrochippingId) return null

				const query = Queries.petMicrochipping.equal('$id', source.petMicrochippingId)
				const microchippingDocument = await collections.petMicrochipping.getDocument([
					query,
				])

				if (!microchippingDocument)
					throw new ApolloError('Microchipping id is not correct')
				return {
					dateOfChipping: new Date(microchippingDocument.dateOfChipping),
					locationOfChip: microchippingDocument.locationOfChip,
				}
			},
		})
		t.field('petAge', {
			type: 'Float',
			resolve: async (source, args, ctx) => {
				function calculateAge(birthday: Date) {
					// birthday is a date
					var ageDifMs = Date.now() - birthday.getTime()
					var ageDate = new Date(ageDifMs) // miliseconds from epoch
					return Math.abs(ageDate.getUTCFullYear() - 1970)
				}
				return calculateAge(source.petBirthDate)
			},
		})
	},
})
