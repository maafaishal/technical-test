import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import nodePlugin from "eslint-plugin-n";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  nodePlugin.configs["flat/recommended-script"],
  {
    ignores: ["**/node_modules/*", "**/*.mjs", "**/*.js"],
  },
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  },
  {
    files: ["**/*.ts"],
  },
  {
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "n/no-missing-import": "off",
    },
  }
);
