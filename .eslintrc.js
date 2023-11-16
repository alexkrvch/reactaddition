module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
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
        "i18next"
    ],
    "rules": {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        '@typescript-eslint/indent': [2, 4],
        'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'strictNullChecks': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'no-unused-vars': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/no-floating-promises': 'off',
        'i18next/no-literal-string': ['error', {markupOnly: true}],
        'max-len': ["error", { "code": 80 }]
    }
}
