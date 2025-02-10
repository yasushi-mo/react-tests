import { test, expect } from "@playwright/test";

test("heading should have correct font size", async ({ page }) => {
  await page.goto(
    "http://localhost:3000/playwright/to-have-css/heading-font-size"
  );
  await expect(page.getByRole("heading")).toHaveCSS("font-size", "72px");
});
