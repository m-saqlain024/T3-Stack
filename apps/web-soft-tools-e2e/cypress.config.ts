import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: { default: 'nx run web-soft-tools:start' },
      ciWebServerCommand: 'nx run web-soft-tools:serve-static',
    }),
    baseUrl: 'http://localhost:3000',
  },
});
