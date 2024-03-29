module.exports = {
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-newline': 'off', // Overrides prettier config.
    'array-bracket-spacing': 'off', // Overrides prettier config.
    'array-callback-return': ['error', { allowImplicit: true, checkForEach: false }],
    'array-element-newline': 'off', // Overrides prettier config.
    'arrow-body-style': 'off', // Overrides prettier config.
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'camelcase': 'off', // Shows an error when objects take parameters that are e.g. snake_case (e.g. class validator decorator options).
    'capitalized-comments': 'off',
    'class-methods-use-this': 'error',
    'comma-dangle': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'comma-spacing': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'comma-style': ['error', 'last'],
    'complexity': 'off',
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'error',
    'consistent-this': 'error',
    'constructor-super': 'error',
    'curly': 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': 'off', // Overrides prettier config.
    'dot-notation': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'eol-last': ['error', 'always'],
    'eqeqeq': ['error', 'always'],
    'for-direction': 'error',
    'func-call-spacing': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'func-name-matching': ['error', 'always'],
    'func-names': ['error', 'always'],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'function-call-argument-newline': 'off', // Overrides prettier config.
    'function-paren-newline': 'off', // Overrides prettier config.
    'generator-star-spacing': ['error', { before: false, after: true }],
    'getter-return': 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'id-denylist': 'off',
    'id-length': 'off', // Shows an error with some libraries that export very short constants (e.g. ky).
    'id-match': 'off',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'init-declarations': 'off', // Disabled because it shows an error in NestJS test files because all declarations (e.g. services) are uninitialized at the beginning of a test file.
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', { afterColon: true, beforeColon: false, mode: 'strict' }],
    'keyword-spacing': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'line-comment-position': ['error', { position: 'above' }],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off', // Does not work with TypeScript features (e.g. enums).
    'lines-between-class-members': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'max-classes-per-file': 'off',
    'max-depth': ['error', 4],
    'max-len': 'off', // Overrides prettier config.
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-comment-style': 'off', // Rule is annoying to work with because it may transform lots of lines of comments which is slow.
    'multiline-ternary': 'off', // Overrides prettier config.
    'new-cap': 'off', // Shows an error that decorators cannot be used.
    'new-parens': 'error',
    'newline-per-chained-call': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-continue': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-extra-semi': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inline-comments': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-loss-of-precision': 'error',
    'no-magic-numbers': 'off',
    'no-misleading-character-class': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': 'off',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'off',
    'no-restricted-properties': 'error',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'off', // Overrides prettier config.
    'no-undef': 'off',
    'no-undef-init': 'error',
    'no-undefined': 'off', // Not helpful.
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-expressions': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-unused-labels': 'error',
    'no-unused-vars': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-use-before-define': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-useless-backreference': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'off',
    'no-warning-comments': ['warn', { terms: ['todo', 'fix'], location: 'anywhere' }],
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': 'off', // Overrides prettier config.
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'object-shorthand': ['error', 'always'],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': 'off', // Overrides prettier config.
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'radix': 'error',
    'require-atomic-updates': 'error',
    'require-await': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'require-unicode-regexp': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'semi': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': 'off',
    'space-in-parens': ['error', 'never'], // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'space-infix-ops': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'space-unary-ops': 'error',
    'spaced-comment': 'off', // Break triple slash types reference (e.g. from create-react-app).
    'strict': ['error', 'never'],
    'switch-colon-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'off',
    'wrap-regex': 'error',
    'yield-star-spacing': ['error', { before: false, after: true }],
    'yoda': 'error'
  }
}
