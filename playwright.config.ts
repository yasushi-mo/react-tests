import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./src/__tests__/e2e",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  // ─── 全スナップショット共通の出力先テンプレート ───
  // {projectName} や {testFilePath} などのプレースホルダーが利用可能
  snapshotPathTemplate:
    "src/__tests__/e2e/__snapshots__/{projectName}/{testFilePath}/{arg}{ext}",

  expect: {
    // ─── 画像スナップショットのグローバル設定 ───
    toHaveScreenshot: {
      // ベースライン画像と比較して「ピクセル単位」で許容する差分の絶対値
      maxDiffPixels: 100,
      // 画面全体のピクセル数に対する「差分ピクセルの割合」 (0-1)
      threshold: 0.1,
      // スナップショット安定化のために動的要素を隠す CSS ファイルを指定
      stylePath: "src/__tests__/styles/screenshot.css",
    },
    // ─── ARIA スナップショット（toMatchAriaSnapshot）のグローバル設定 ───
    toMatchAriaSnapshot: {
      // ARIA スナップショット専用の出力先テンプレート
      pathTemplate:
        "__tests__/e2e/__aria-snapshots__/{projectName}/{testFilePath}/{arg}{ext}",
    },
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://localhost:3000",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",

    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
