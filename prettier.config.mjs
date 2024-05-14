// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],

  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 120,
}

export default config
