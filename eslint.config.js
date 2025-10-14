import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    plugins: { js, react: pluginReact },
    extends: ["js/recommended", "plugin:react/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "react/react-in-jsx-scope": "off" // ⚡ React 17+ no requiere importar React
    }
  },
  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  { files: ["**/*.jsonc"], plugins: { json }, language: "json/jsonc", extends: ["json/recommended"] },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
]);
