import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

const browserConfig = {
  provider: playwright(),
  enabled: true,
  headless: true,
  screenshotFailures: false,
} as const;

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'test',
          browser: {
            ...browserConfig,
            instances: [
              { browser: 'chromium' },
              { browser: 'firefox' },
              { browser: 'webkit' },
            ],
          },
        },
      },
      // coverage only supports Chromium (v8),
      // so it needs a separate project
      {
        test: {
          name: 'coverage',
          browser: {
            ...browserConfig,
            instances: [
              { browser: 'chromium' },
            ],
          },
        },
      },
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['src/**/*.ts'],
    },
  },
})
