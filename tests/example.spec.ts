import { test, expect, chromium,Browser,Page } from '@playwright/test';

test('youtube input', async ({ page }) => {
  const browser:Browser = await chromium.launch({headless:false})
  await page.goto('https://www.google.com');

  // await page.waitForTimeout(7000)
  // await page.dblclick("//button[@aria-label='Stay signed out']")
  // await page.locator("//input[@id='userName']").fill("fwdadmn01@gmail.com")
  // await page.locator("//input[@name='password']").fill("ZXCVBNM67$*")
  // await page.click('//button[@type="submit"]')
  // await page.locator("//input[@name='fcl_origin_port']").fill("INNSA")
  // await page.click("(//ul[@role='listbox'])[1]")
  // await page.locator("//input[@name='fcl_destination_port']").fill("DEHAM")
  // await page.click("(//ul[@role='listbox'])[2]")
  // await page.click("//button[@title='SEARCH']")
});

// test.skip('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
