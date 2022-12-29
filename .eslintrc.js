module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: ["airbnb-base"],
	parserOptions: {
		ecmaVersion: 13,
	},
	rules: {
		endofline: "auto",
	},
	ignorePatterns: ["tests", "setupTests.js", "*.test.js", "migrations", "models"],
};
