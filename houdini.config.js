/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	schemaPath: './src/routes/graphql/schema.graphql',
	plugins: {
		'houdini-svelte': {}
	},
	defaultFragmentMasking: "disable"
}

export default config
