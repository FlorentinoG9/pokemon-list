import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',

    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 5000,
})
