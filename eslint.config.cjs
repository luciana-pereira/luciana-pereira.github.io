module.exports = [
  {
    ignores: [
      "node_modules/**",
      ".yarn/**",
      ".pnp.cjs",
      ".pnp.loader.mjs",
      "bin/**",
      "obj/**",
      "publish/**",
      "wwwroot/css/app.css",
      "package-lock.json",
      "yarn.lock"
    ]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        fetch: "readonly",
        Event: "readonly",
        CustomEvent: "readonly"
      }
    },
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-console": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
    }
  }
];
