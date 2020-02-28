module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'react',
    'react-hooks',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
  ],
  rules: {
    'comma-dangle': [
      'warn',
      'always-multiline',
    ],

    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        variables: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/quotes': [
      'warn',
      'single',
      {
        avoidEscape: false,
        allowTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/semi': [
      'warn',
      'always',
    ],
    '@typescript-eslint/switch-exhaustiveness-check': [
      'warn',
    ],

    'import/no-absolute-path': [
      'error',
    ],
    'import/no-webpack-loader-syntax': [
      'warn',
    ],
    'import/no-self-import': [
      'error',
    ],
    'import/no-useless-path-segments': [
      'warn',
      {
        noUselessIndex: true,
      },
    ],
    'import/no-deprecated': [
      'warn',
    ],
    'import/no-mutable-exports': [
      'warn',
    ],
    'import/unambiguous': [
      'warn',
    ],
    'import/no-commonjs': [
      'warn',
    ],
    'import/no-nodejs-modules': [
      'warn',
    ],
    'import/first': [
      'error',
    ],
    'import/extensions': [
      'warn',
      'always',
      {
        ignorePackages: false,
        pattern: {
          ts: 'never',
          tsx: 'never',
        }
      },
    ],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    'import/newline-after-import': [
      'warn',
    ],
    'import/no-named-default': [
      'warn',
    ],
    'import/no-anonymous-default-export': [
      'warn',
    ],

    'react/button-has-type': [
      'warn',
    ],
    'react/default-props-match-prop-types': [
      'warn',
    ],
    'react/forbid-foreign-prop-types': [
      'warn',
    ],
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-adjacent-inline-elements': [
      'warn',
    ],
    'react/no-this-in-sfc': [
      'error',
    ],
    'react/no-unused-prop-types': [
      'warn',
    ],
    'react/prefer-stateless-function': [
      'warn',
    ],
    /*
     * Add this rule back after
     * being ready to add prop-types
     */
    'react/prop-types': [
      'off',
    ],
    'react/require-default-props': [
      'warn',
    ],
    'react/self-closing-comp': [
      'warn',
    ],
    'react/style-prop-object': [
      'error',
    ],
    'react/void-dom-elements-no-children': [
      'error',
    ],
    'react/jsx-boolean-value': [
      'warn',
      'always',
    ],
    'react/jsx-closing-bracket-location': [
      'warn',
      'line-aligned',
    ],
    'react/jsx-closing-tag-location': [
      'warn',
    ],
    'react/jsx-curly-brace-presence': [
      'warn',
      'never',
    ],
    'react/jsx-curly-newline': [
      'warn',
      {
        multiline: 'require',
        singleline: 'forbid',
      },
    ],
    'react/jsx-curly-spacing': [
      'warn',
      {
        when: 'never',
        attributes: true,
        children: true,
      },
    ],
    'react/jsx-equals-spacing': [
      'warn',
      'never',
    ],
    'react/jsx-first-prop-new-line': [
      'warn',
      'multiline',
    ],
    'react/jsx-fragments': [
      'warn',
      'syntax',
    ],
    'react/jsx-handler-names': [
      'warn',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: true,
      },
    ],
    'react/jsx-indent': [
      'warn',
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true,
      },
    ],
    'react/jsx-indent-props': [
      'warn',
      2,
    ],
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
      },
    ],
    'react/jsx-no-bind': [
      'warn',
    ],
    'react/jsx-no-script-url': [
      'error',
    ],
    'react/jsx-pascal-case': [
      'warn',
      {
        ignore: [
          'SEO',
        ],
      },
    ],
    'react/jsx-tag-spacing': [
      'warn',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-wrap-multilines': [
      'warn',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],

    'react-hooks/rules-of-hooks': [
      'error',
    ],
    'react-hooks/exhaustive-deps': [
      'warn',
    ],
  },
};
