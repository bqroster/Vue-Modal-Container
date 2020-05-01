module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential'
    ],
    env: {
        "node": true
    },
    rules: {}
};