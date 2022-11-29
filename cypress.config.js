const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "retries": {
    "runMode": 1, // Used for cypress run, defaults to 0
    "openMode": 1 // Used for cypress open, defaults to 0
  },
  env: {
    USER_EMAIL: '', // add your credentials here
    USER_PASSWORD: '' // add your credentials here
  },
  e2e: {
    baseUrl: 'https://www.automationpractice.com/',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
