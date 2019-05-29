import babel from 'rollup-plugin-babel';

module.exports = {
	input: 'app/index.js',
	output: {
		name: 'paralax',
		file: 'dist/index.js',
		format: 'iife'
	},
	plugins: [babel()]
};
