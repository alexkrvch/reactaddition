module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": ['standard-with-typescript', 'plugin:react/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}",
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": './tsconfig.json', // The error starts here
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "i18next",
        "react-hooks",
        "heikun-eslint-checker"
    ],
    "rules": {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/display-name': 'off',
        '@typescript-eslint/indent': [2, 4],
        'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
        'import/no-unresolved': 'off',
        'no-undef': 'off',
        'import/prefer-default-export': 'off',
        'strictNullChecks': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-floating-promises': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        'react/prop-types': 'off',
        'heikun-eslint-checker/path-checker': ['error', {alias: '@'}],
        'heikun-eslint-checker/public-api-imports': ['error', {alias: '@'}],
        'i18next/no-literal-string': [
            'error',
            {markupOnly: true}
        ],
        'max-len': ["error", {"code": 120, 'ignoreComments': true}]
    }
}
