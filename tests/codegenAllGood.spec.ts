import { test, expect } from "@playwright/test";

test("Codegen ALL GOOD", async ({ page }) => {
  await page.goto("https://github.com/");
  await page.getByRole("button", { name: "Search or jump to…" }).click();
  await page.getByRole("combobox", { name: "Search" }).click();
  await page.getByRole("combobox", { name: "Search" }).fill("7ANV1R");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");
  await page.getByTestId("nav-item-users").click();
  await page.getByRole("link", { name: "Tanvir Ibn Mizan" }).click();
  await expect(page.getByText("ALL GOOD")).toBeVisible();
});
