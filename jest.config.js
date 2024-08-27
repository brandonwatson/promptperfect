module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	roots: ['src', '__tests__'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testMatch: [
		'**/__tests__/**/*.[jt]s?(x)',
		'**/?(*.)+(spec|test).[tj]s?(x)',
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
};
