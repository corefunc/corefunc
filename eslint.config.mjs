import { defineConfig } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import jsdoc from "eslint-plugin-jsdoc";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    ignores: ["docs/**"],

    extends: compat.extends(
      "plugin:prettier/recommended",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
    ),

    plugins: {
      "@typescript-eslint": typescriptEslint,
      jsdoc,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node,
        Atomics: "readonly",
        BigInt: true,
        SharedArrayBuffer: "readonly",
        globalThis: false,
      },

      parser: tsParser,
      ecmaVersion: 2018,
      sourceType: "module",

      parserOptions: {
        allowImportExportEverywhere: true,
      },
    },

    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "eqeqeq": ["error", "always"],

      "id-length": [
        "error",
        {
          exceptions: ["x", "y", "z"],
          min: 2,
          properties: "never",
        },
      ],

      "linebreak-style": ["error", "unix"],
      "no-console": "warn",
      "no-implicit-coercion": "error",
      "no-multi-assign": "error",
      "no-param-reassign": "off",
      "no-ternary": "off",
      "no-unused-vars": "off",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "none",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],

      "prefer-spread": "off",
      "prettier/prettier": "off",

      "quotes": [
        "error",
        "double",
        {
          allowTemplateLiterals: true,
          avoidEscape: true,
        },
      ],

      "semi": ["error", "always"],
      "yoda": "error",
    },
  },
]);
