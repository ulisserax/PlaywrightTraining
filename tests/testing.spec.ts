// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.google.com.br/');
//   await page.getByLabel('Pesquisar', { exact: true }).click();
//   await page.getByLabel('Pesquisar', { exact: true }).press('CapsLock');
//   await page.getByLabel('Pesquisar', { exact: true }).fill('Jest in ');
//   await page.getByLabel('Pesquisar', { exact: true }).press('CapsLock');
//   await page.getByLabel('Pesquisar', { exact: true }).fill('Jest in Playwright');
//   await page.keyboard.press('Enter');
//   await page.waitForLoadState('load');

//   await page.getByRole('link', { name: 'Running tests using Jest &' }).click();
//   await page.getByRole('link', { name: 'Code Code' }).click();
//   await page.getByRole('link', { name: 'Issues Issues' }).click();
// });