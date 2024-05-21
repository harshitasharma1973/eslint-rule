module.exports = {
    rules: {
        camelcase: ['error', { properties: 'always' }],
        complexity: ['error', 5], 
        'max-depth': ['error', 2], 
        'max-params': ['error', 4], 
        'max-statements': ['error', 15],
        'no-var': 'error',
        'no-console': 'error',
        'import/first': 'error',
        eqeqeq: 'error',
        'no-unused-vars': 'error',
        'padding-line-between-statements': [
          'warn',
          { blankLine: 'always', prev: '*', next: 'function' },
          { blankLine: 'always', prev: 'function', next: '*' },
        ],
        'init-declarations': ['error', 'always'],
        'default-case': 'error',
        'default-case-last': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'max-len': [
          'error',
          {
            code: 120,
            ignoreUrls: true, 
            ignoreTemplateLiterals: true, 
            ignoreStrings: false,
            ignoreComments: true, 
            ignoreRegExpLiterals: true, 
          },
        ],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        quotes: ['warn', 'single'],
    }
  };