import { test, expect } from "@playwright/test";
import fs from "fs";

test("button should have correct background color", async ({ page }) => {
  await page.coverage.startJSCoverage();
  await page.coverage.startCSSCoverage();

  await page.goto("/playwright/to-have-css/background-color-changing-button");

  const button = page.getByRole("button", { name: "Change Background Color" });
  await expect(button).toHaveCSS("background-color", "rgb(255, 0, 0)");

  await button.click();
  await expect(button).toHaveCSS("background-color", "rgb(0, 0, 255)");

  await button.click();
  await expect(button).toHaveCSS("background-color", "rgb(255, 0, 0)");

  const jsCoverage = await page.coverage.stopJSCoverage();
  fs.writeFileSync(
    "src/__tests__/e2e/coverage-js.json",
    JSON.stringify(jsCoverage, null, 2)
  );
  const cssCoverage = await page.coverage.stopCSSCoverage();
  fs.writeFileSync(
    "src/__tests__/e2e/coverage-css.json",
    JSON.stringify(cssCoverage, null, 2)
  );
});
