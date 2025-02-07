import { test, expect } from "@playwright/test";

test("button should change color on hover", async ({ page }) => {
  await page.goto("http://localhost:3000/playwright/to-have-css/hover-button");

  const button = page.getByRole("button");
  await expect(button).toHaveCSS("border-color", "rgba(0, 0, 0, 0)"); // Transparent

  await button.hover();
  await expect(button).toHaveCSS("border-color", "rgb(255, 0, 0)");

  await page.mouse.move(0, 0); // Moves the mouse away
  await expect(button).toHaveCSS("border-color", "rgba(0, 0, 0, 0)");
});
