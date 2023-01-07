module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4, { SwitchCase: 1 }],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        semi: [2, "always"],
        quotes: ["error", "double", { allowTemplateLiterals: true }]
    }
};
