import { test, expect } from "@playwright/test";

test("画像スナップショットテスト", async ({ page }) => {
  await page.goto("/snapshot");

  // 初期状態（count: 0）
  await expect(page).toHaveScreenshot("snapshot/image/count-0.png");

  // ボタンを押して count を変化させる
  await page.getByRole("button", { name: "Increment counter" }).click();

  // 状態変化後（count: 1）
  await expect(page).toHaveScreenshot("snapshot/image/count-1.png");
});
