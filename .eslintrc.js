module.exports = {
  root: true,
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
  ],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'prettier/prettier': 'error', // Enforces Prettier formatting rules
    'no-console': 'warn', // Gives a warning when console.log is used
    'eqeqeq': 'error', // Requires the use of === and !== instead of == and !=
    'prefer-const': 'error', // Requires that developers use const where possible for variable declaration
    'no-var': 'error', // Disallows the use of var, encouraging let and const instead
    'semi': ['error', 'always'], // Requires semicolons at the end of statements
    'quotes': ['error', 'single'], // Enforces the use of single quotes
    'no-use-before-define': 'off', // Turns off the rule that disallows using a variable before it's defined
    'comma-dangle': ['error', 'always-multiline'], // Requires trailing commas in multiline object literals, array literals, function typings, named imports and exports and function parameters
    '@typescript-eslint/explicit-function-return-type': 'warn', // Gives a warning when a function's return type isn't specified
    '@typescript-eslint/no-explicit-any': 'off', // Turns off the rule that disallows usage of the any type
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }], // Allows using JSX syntax in .js, .jsx, .ts, and .tsx files
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      parser: '@babel/eslint-parser',
    },
  ],
};
