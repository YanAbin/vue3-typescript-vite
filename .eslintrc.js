module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "vue/setup-compiler-macros": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:vue/recommended",
        "plugin:@typescript-eslint/recommended"
        // "prettier",
        // "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": '@typescript-eslint/parser',
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint",
        // "prettier"
    ],
    "globals": {
        "defineOptions": "readonly"
    },
    "rules": {
        // "prettier/prettier": "error",
        "indent": [
            "error",
            2
        ],
        "linebreak-style": "off",
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "vue/multi-word-component-names": "off",
        "vue/no-multiple-template-root":'off',
        "@typescript-eslint/no-explicit-any": "off",
        'arrow-body-style': "off",
        'prefer-arrow-callback': "off",
        // 'vue/singleline-html-element-content-newline': 'off',
        // 'vue/multiline-html-element-content-newline': 'off',
    }
}
