import { defineConfig } from "cypress";

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: {
    runMode: 3,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("@cypress/grep/src/plugin")(on, config);

      const tenant = config.env.tenant || "production";
      config.env = require(`./cypress/config/${tenant}.config.json`);
      config.baseUrl = config.env.baseUrl;
      return config;
    },
  },
});
