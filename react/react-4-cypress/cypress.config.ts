import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    supportFile: false,
    specPattern: "./cypress/integration/e2e/*.spec.js",
  },
  env: {
    apiBaseUrl: "http://localhost:3000",
  },
});
