const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  projectId: "xpj6x1",

  reporterOptions: {
    reportDir: "cypress/reports/json", // só JSON aqui
    overwrite: false,                  // gera vários arquivos
    html: false,                       // ❌ NÃO gera HTML aqui
    json: true,                        // ✅ só JSON
  },

  screenshotsFolder: "cypress/screenshots",
  screenshotOnRunFailure: true,

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
