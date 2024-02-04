import {chromium } from 'playwright';
import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    // Create a browser instance
    const browser = await chromium.launch({
        headless: false
    });
    // Create a context
    const context = await browser.newContext();
    // Create a page
    const page = await context.newPage();
});

test('Selecting a Jacket from Amazon', async ({ page }) => {

    await page.goto('https://www.amazon.com/');

    try {
        await page.click("[data-action-type='DISMISS']", {timeout: 5000});
        await page.click("#aee-xop-dismiss", {timeout: 5000});
    } catch (error) {}

    await page.click("text=Today's Deals");

    await page.click("[data-testid='carousel-3D21EB6D91CB827BAFADFF79BCF5C94A']");

    await page.click("[data-deal-id='58467725']");

    await page.getByRole('link', { name: 'Amazon Essentials Men&#39;s Full-Zip Hooded Fleece Sweatshirt (Available in Big' }).click();

});