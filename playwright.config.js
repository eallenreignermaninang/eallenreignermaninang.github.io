// playwright.config.js
// This is the main configuration file for Playwright.
// It tells Playwright HOW and WHERE to run your tests.

const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // 📁 Where Playwright should look for test files
  testDir: './tests/specs',

  // ⏱️ Max time a single test can take before it's marked as failed
  timeout: 30000,

  // 🔁 How many times to retry a failed test (useful in CI)
  retries: 1,

  // 📊 Reporter: 'html' generates a visual test report you can open in browser
  reporter: 'html',

  use: {
    // 🌐 The base URL of your portfolio — all tests will start here
    baseURL: 'https://eallenreignermaninang.github.io',

    // 📸 Take a screenshot automatically when a test fails
    screenshot: 'only-on-failure',

    // 🎬 Record a video of failed tests (great for debugging)
    video: 'retain-on-failure',
  },

  // 🖥️ Run tests on multiple browsers to ensure cross-browser compatibility
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    // 📱 Mobile viewport test — checks your site is responsive
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
});
