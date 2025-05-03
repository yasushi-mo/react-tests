import { test, expect } from "@playwright/test";

test("full page screenshot", async ({ page }) => {
  await page.goto("/about");

  await page.screenshot({ path: "screenshots/viewport.png" });
  await page.screenshot({ path: "screenshots/full-page.png", fullPage: true });
});

test("heading screenshot", async ({ page }) => {
  await page.goto("/about");

  await page
    .getByRole("heading", { name: "About" })
    .screenshot({ path: "screenshots/header.png" });
});

// test("on failure screenshot", async ({ page }) => {
//   await page.goto("/about");

//   await expect(page.locator("#not-found")).toBeVisible();
// });

test("compare snapshot", async ({ page }) => {
  await page.goto("/about");

  await expect(page.getByText("You are on the about page.")).toHaveScreenshot(
    "screenshot/description.png"
  );
});
