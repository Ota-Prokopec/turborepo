import {
	Client,
	Teams,
	Functions,
	Locale,
	Avatars,
	Graphql,
	Account,
	Role,
	Permission,
	ID,
	type Models,
} from 'appwrite'
import { Query } from 'appwrite'
import database from '../database/database'

export default <Preferences extends Models.Preferences>(client: Client) => {
	const teams = new Teams(client)
	const functions = new Functions(client)
	const locale = new Locale(client)
	const avatars = new Avatars(client)
	const graphql = new Graphql(client)
	const account = new Account(client)
	const Collection = database(client)

	return {
		client,
		teams,
		functions,
		locale,
		avatars,
		graphql,
		account,
		database,
		Collection,
		Query,
		Role,
		Permission,
		ID,
	}
}
