/**
 * @file ESLint project configuration (New flat config)
 * @see {@link https://eslint.org/docs/latest/use/configure/configuration-files-new}
 * @see {@link https://eslint.org/docs/latest/use/configure/migration-guide}
 * @see {@link https://eslint.org/docs/latest/extend/plugin-migration-flat-config}
 * @see {@link https://eslint.org/blog/2022/08/new-config-system-part-1/}
 * @see {@link https://eslint.org/blog/2022/08/new-config-system-part-2/}
 */

import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
	/**
	 * @see {@link https://eslint.org/docs/latest/use/configure/configuration-files-new#using-predefined-configurations}
	 * @see {@link https://github.com/eslint/eslint/tree/main/packages/js}
	 */
	js.configs.recommended,

	/**
	 * @see {@link https://github.com/prettier/eslint-config-prettier}
	 * turns off the conflict rules, put it last
	 */
	eslintConfigPrettier,

	/** custom config objects */

	/** @see {@link https://eslint.org/docs/latest/use/configure/configuration-files-new#globally-ignoring-files-with-ignores} */
	{
		ignores: ["**/dist/", "**/build/"],
	},

	/** @see {@link https://eslint.org/docs/latest/use/configure/migration-guide#configuring-language-options} */
	{
		files: ["scripts/**/*.js"],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
	{
		files: ["userscripts/**/*.user.js"],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.greasemonkey,
			},
		},
	},
];
