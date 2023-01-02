import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(__, config) {
      // implement node event listeners here
      const envs = dotenv.config();

      if (envs && envs.parsed) {
        if (process.env) {
          // modify env value
          config.env = process.env
        }
        config.env = envs.parsed;
      }

      return config;
    },
  },
});
