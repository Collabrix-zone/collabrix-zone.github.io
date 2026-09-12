import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  timeout: 90000,
  expect: { timeout: 15000 },
  use: { baseURL: 'http://127.0.0.1:4173', reducedMotion: 'reduce', trace: 'retain-on-failure' },
  webServer: { command: 'python3 scripts/serve-build.py', url: 'http://127.0.0.1:4173', reuseExistingServer: !process.env.CI },
});
