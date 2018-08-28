module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-console": "off",
    "no-plusplus": "off",
    "no-return-assign": "off",
    "quotes": ["error", "single"],
    "no-cond-assign": "warn",
    "arrow-parens": "off",
    "import/prefer-default-export": "off",
    "no-unused-expressions": "off",
    "camelcase": "off",
    "consistent-return": "off",
    "no-bitwise": "off",
    "no-restricted-globals": "off",
    "no-restricted-syntax": "warn",
    "no-multi-assign": "off",
    "no-shadow": "warn",
    "no-return-await": "off",
    "object-curly-newline": "off",
    "no-new": "off",
    "no-undef": "warn",
    "generator-star-spacing": "off",
    "no-mixed-operators": "off",
    "max-len": "warn",
    "no-unused-vars": "warn",
    "array-callback-return": "off",
    "global-require": "off",
    "linebreak-style": "off",
    "import/extensions": ["off", "always", {
        "js": "never",
        "vue": "never"
    }],
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
