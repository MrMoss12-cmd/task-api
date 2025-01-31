const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')

module.exports = [
  eslintPluginPrettierRecommended,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'es5',
        },
      ],
    },
  },
]
