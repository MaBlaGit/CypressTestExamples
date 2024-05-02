import { defineConfig } from "cypress";


module.exports = defineConfig({
  defaultCommandTimeout: 10000,  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://ecommerce-playground.lambdatest.io',
  }
});
