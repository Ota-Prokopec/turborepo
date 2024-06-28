import type { CodegenConfig } from '@graphql-codegen/cli'

const codegenConfigConfig: CodegenConfig['config'] = {
	clientPath: './client',
	scalars: {
		StringOrNumber: 'string|number',
		PetGender: "'male'|'female'",
		PetType: "'cat'|'dog'",
		Coords: '[number, number]',
		Date: 'Date',
		URL: 'URL',
	},
}

const config: CodegenConfig = {
	schema: '../my-pets-api/src/generated/schema.graphql',
	documents: './src/graphql/**/*.gql',
	generates: {
		'./src/graphql/generated.ts': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-graphql-request',
				{
					add: {
						content:
							"import { type GraphQLClientRequestHeaders } from '../../../../node_modules/graphql-request/src/types';",
					},
				},
			],
			config: codegenConfigConfig,
		},
	},
	hooks: {
		afterAllFileWrite: [
			'sed -i -e "/import { GraphQLClientRequestHeaders } from \'graphql-request\\/build\\/cjs\\/types\';/d" ./src/graphql/generated.ts',
		],
	},
}
export default config
