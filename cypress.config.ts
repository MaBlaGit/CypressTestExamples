import { defineConfig } from "cypress";


module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(on, config);
    },
    baseUrl: 'https://ecommerce-playground.lambdatest.io',
  }
});
