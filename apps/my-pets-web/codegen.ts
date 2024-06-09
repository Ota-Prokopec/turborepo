import type { CodegenConfig } from '@graphql-codegen/cli'

const codegenConfigConfig: CodegenConfig['config'] = {
	clientPath: './client',
	scalars: {
		StringOrNumber: 'string|number',
		PetGender: "'male'|'female'",
		PetType: "'cat'|'dog'",
	},
}

const config: CodegenConfig = {
	schema: '../my-pets-api/src/generated/schema.graphql',
	documents: './src/graphql/**/*.gql',
	generates: {
		'./src/graphql/generated-svelte.ts': {
			plugins: ['typescript', 'typescript-operations', 'graphql-codegen-svelte-apollo'],
			config: codegenConfigConfig,
		},
		'./src/graphql/generated.ts': {
			plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
			config: codegenConfigConfig,
		},
	},
}
export default config
