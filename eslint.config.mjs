import js from "@eslint/js";
import tseslint from "typescript-eslint";
export default tseslint.config(
  { ignores: ["node_modules/**", ".next/**", "tmp/**", "next-env.d.ts"] },
  { files: ["**/*.ts", "**/*.tsx"], extends: [js.configs.recommended, ...tseslint.configs.recommended] },
);
