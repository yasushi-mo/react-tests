import { test, expect } from "@playwright/test";

test("画像スナップショットテスト", async ({ page }) => {
  await page.goto("/snapshot");

  // 初期状態（count: 0）
  await expect(page).toHaveScreenshot("snapshot/image/count-0.png");

  // ボタンを押して count を変化させる
  await page.getByRole("button", { name: "Increment" }).click();

  // 状態変化後（count: 1）
  await expect(page).toHaveScreenshot("snapshot/image/count-1.png");
});

test("ARIAスナップショットテスト", async ({ page }) => {
  await page.goto("/snapshot");

  const body = page.locator("body");

  // 初期状態のARIA構造（count: 0）
  await expect(body).toMatchAriaSnapshot(`
    - region:
      - heading "Counter" [level=1]
      - button "Increment"
      - status: "0"
  `);

  // カウント変更
  await page.getByRole("button", { name: "Increment" }).click();

  // 変更後のARIA構造（count: 1）
  await expect(body).toMatchAriaSnapshot(`
    - region:
      - heading "Counter" [level=1]
      - button "Increment"
      - status: "1"
  `);
});
