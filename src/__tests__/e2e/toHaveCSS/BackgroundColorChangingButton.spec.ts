import { test, expect } from "@playwright/test";

test("button should have correct background color", async ({ page }) => {
  await page.goto(
    "http://localhost:3000/playwright/to-have-css/background-color-changing-button"
  );

  const button = page.getByRole("button", { name: "Change Background Color" });
  await expect(button).toHaveCSS("background-color", "rgb(255, 0, 0)");

  await button.click();
  await expect(button).toHaveCSS("background-color", "rgb(0, 0, 255)");

  await button.click();
  await expect(button).toHaveCSS("background-color", "rgb(255, 0, 0)");
});
