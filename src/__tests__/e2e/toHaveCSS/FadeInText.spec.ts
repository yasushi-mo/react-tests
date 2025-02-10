import { test, expect } from "@playwright/test";

test("text should fade in when hovered", async ({ page }) => {
  await page.goto("http://localhost:3000/playwright/to-have-css/fade-in-text");

  const text = page.getByText("Hover over me");

  // Check initial opacity (faded)
  await expect(text).toHaveCSS("opacity", "0.3");

  // Hover over the text
  await text.hover();

  // Check full opacity
  await expect(text).toHaveCSS("opacity", "1");
});
