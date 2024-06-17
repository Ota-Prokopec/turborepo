import { GraphQLURL, URLResolver, DateResolver } from 'graphql-scalars'
import { asNexusMethod } from 'nexus'

export default [
	asNexusMethod(URLResolver, 'url', 'URL'),
	asNexusMethod(DateResolver, 'date', 'Date'),
]
