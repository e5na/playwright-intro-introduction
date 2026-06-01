import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Check visibility of GitHub, Discord and Dark/Light theme in header menu
  await expect(page.getByLabel('GitHub repository')).toBeVisible()
  await expect(page.getByLabel('Discord server')).toBeVisible()
  await expect(page.getByLabel('Switch between dark and light mode')).toBeVisible()
  // Check that GitHub star is visible
  await expect(page.getByRole('link', { name: 'Star microsoft/playwright on' })).toBeVisible();
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
