import { GraphQLURL, URLResolver, DateTimeResolver } from 'graphql-scalars'
import { asNexusMethod } from 'nexus'

export default [asNexusMethod(URLResolver, 'url', 'URL')]
