import { test, expect } from "@playwright/test";

test("Search for ALL GOOD", async ({ page }) => {
  // Go to GitHub
  await page.goto("https://github.com");

  // Locate search button and click
  const searchButton = await page
    .locator("button.header-search-button")
    .first();
  await searchButton.click();

  // search for 7ANV1R
  const searchInput = await page.locator("input#query-builder-test");
  await searchInput.pressSequentially("7ANV1R", { delay: 100 });
  await page.keyboard.press("Enter");

  // Locate and click the 'Users' tab in search results
  await page.click('a[data-testid="nav-item-users"]', { timeout: 5000 });

  // Locate and click on the user 'Tanvir Ibn Mizan'
  await page.click('a:has-text("Tanvir Ibn Mizan")', { timeout: 5000 });
  await page.waitForURL("https://github.com/7ANV1R");

  // Check that the page has text 'ALL GOOD'
  await expect(page.locator("text=ALL GOOD")).toBeVisible({
    timeout: 5000,
  });
});
