import { defineConfig } from 'vitest/config';
import type { BrowserInstanceOption } from 'vitest/node';
import { playwright } from '@vitest/browser-playwright';

type BrowserName = BrowserInstanceOption['browser'];

const projectConfig = ({ name, browsers }: {
  name: string,
  browsers: BrowserName[]
}) => defineConfig({
  test: {
    name: name,
    browser: {
      provider: playwright(),
      enabled: true,
      headless: true,
      screenshotFailures: false,
      instances: browsers.map(
        browserName => ({ browser: browserName })
      )
    }
  }
});

export default defineConfig({
  test: {
    projects: [
      projectConfig({
        name: 'test',
        browsers: ['chromium', 'firefox', 'webkit']
      }),
      // Coverage only supports Chromium (v8),
      // so it needs a separate project.
      projectConfig({
        name: 'coverage',
        browsers: ['chromium']
      })
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['src/**/*.ts'],
    }
  }
});
