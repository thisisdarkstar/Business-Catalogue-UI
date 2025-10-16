import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS files
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },

  // TS/TSX files
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: { globals: globals.browser },
    extends: [tseslint.configs.recommended, pluginReact.configs.flat.recommended],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "react/react-in-jsx-scope": "off", // Next.js 13+ doesn't need React import
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/ban-ts-comment": "off", // optional
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // Ignore generated files like .next
  {
    ignores: [".next", "node_modules"],
  },
]);
