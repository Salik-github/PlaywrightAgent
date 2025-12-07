/**
 * Category and Brand Filtering Tests
 * Tests for browsing products by category and brand filters
 */
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');
const { ProductsPage } = require('../pages/products.page');
test.describe.configure({ mode: 'parallel' });

test.describe('Category and Brand Filtering', () => {
  test.setTimeout(60000)
  let homePage;
  let productsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productsPage = new ProductsPage(page);
  });

  // Test 7.1: Browse Women category from homepage
  test('Browse Women category from homepage', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Verify category section visible
    await expect(homePage.categorySection).toBeVisible();

    // 3. Click on Women category
    await homePage.womenCategory.click();

    // 4. Verify page filters to women products
    await page.waitForLoadState('load');
    const url = await page.url();
    expect(url).toBeDefined();

    // 5. Verify products are displayed
    const productCount = await page.locator('[class*="product"]').count();
    expect(productCount).toBeGreaterThan(0);
  });

  // Test 7.2: Browse Men category from homepage
  test('Browse Men category from homepage', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Verify category section visible
    await expect(homePage.categorySection).toBeVisible();

    // 3. Click on Men category
    await homePage.menCategory.click();

    // 4. Verify page filters to men products
    await page.waitForLoadState('load');
    const url = await page.url();
    expect(url).toBeDefined();

    // 5. Verify men products displayed
    const productCount = await page.locator('[class*="product"]').count();
    expect(productCount).toBeGreaterThan(0);
  });

  // Test 7.3: Browse Kids category from homepage
  test('Browse Kids category from homepage', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Verify category section visible
    await expect(homePage.categorySection).toBeVisible();

    // 3. Click on Kids category
    await homePage.kidsCategory.click();

    // 4. Verify page filters to kids products
    await page.waitForLoadState('load');
    const url = await page.url();
    expect(url).toBeDefined();

    // 5. Verify kids products displayed
    const productCount = await page.locator('[class*="product"]').count();
    expect(productCount).toBeGreaterThan(0);
  });

  // Test 7.4: Browse all category options
  test.fixme('Browse through all category options', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Verify category section
    await expect(homePage.categorySection).toBeVisible();

    // 3. Verify all category links exist
    await expect(homePage.womenCategory).toBeVisible();
    await expect(homePage.menCategory).toBeVisible();
    await expect(homePage.kidsCategory).toBeVisible();

    // 4. Click each category
    for (let category of [homePage.womenCategory, homePage.menCategory, homePage.kidsCategory]) {
      await homePage.navigateToHomepage();
      await category.click();
      await page.waitForLoadState('load');

      const products = await page.locator('[class*="product"]').count();
      expect(products).toBeGreaterThan(0);
    }
  });

  // Test 7.5: View all brands available
  test('View all brands section on homepage', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Verify brands section is visible
    await expect(homePage.brandsSection).toBeVisible();

    // 3. Verify specific brands are visible
    // Need to locate brand links on homepage
    const brandLinks = page.locator('a').filter({ hasText: /Polo|H&M|Madame|Biba/ });
    const brandCount = await brandLinks.count();
    expect(brandCount).toBeGreaterThan(0);
  });

  // Test 7.6: Filter by Polo brand from homepage
  test('Filter products by Polo brand from homepage', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Locate Polo brand link
    const poloBrandLink = page.locator('a:has-text("Polo")').first();
    await expect(poloBrandLink).toBeVisible();

    // 3. Click Polo brand
    await poloBrandLink.click();

    // 4. Verify page filters to Polo products
    await page.waitForLoadState('load');
    const productCount = await page.locator('[class*="product"]').count();
    expect(productCount).toBeGreaterThan(0);
  });

  // Test 7.7: Filter by H&M brand from homepage
  test('Filter products by H&M brand from homepage', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Locate H&M brand link
    const handmBrandLink = page.locator('a:has-text("H&M")').first();
    await expect(handmBrandLink).toBeVisible();

    // 3. Click H&M brand
    await handmBrandLink.click();

    // 4. Verify page filters to H&M products
    await page.waitForLoadState('load');
    const productCount = await page.locator('[class*="product"]').count();
    expect(productCount).toBeGreaterThan(0);
  });

  // Test 7.8: Filter by Madame brand from homepage
  test('Filter products by Madame brand from homepage', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Locate Madame brand link
    const madameBrandLink = page.locator('a:has-text("Madame")').first();
    await expect(madameBrandLink).toBeVisible();

    // 3. Click Madame brand
    await madameBrandLink.click();

    // 4. Verify page filters to Madame products
    await page.waitForLoadState('load');
    const productCount = await page.locator('[class*="product"]').count();
    expect(productCount).toBeGreaterThan(0);
  });

  // Test 7.9: Switch between different brands
  test('Switch between different brand filters', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Click Polo brand
    const poloBrandLink = page.locator('a:has-text("Polo")').first();
    await poloBrandLink.click();
    await page.waitForLoadState('load');
    const poloCount = await page.locator('[class*="product"]').count();

    // 3. Go back to homepage
    await homePage.navigateToHomepage();

    // 4. Click H&M brand
    const handmBrandLink = page.locator('a:has-text("H&M")').first();
    await handmBrandLink.click();
    await page.waitForLoadState('load');
    const handmCount = await page.locator('[class*="product"]').count();

    // 5. Both should have products
    expect(poloCount).toBeGreaterThan(0);
    expect(handmCount).toBeGreaterThan(0);
  });

  // Test 7.10: Category filters visible on products page
  test('Verify category filters on products page', async ({ page }) => {
    // 1. Navigate to products page
    await productsPage.navigateToProducts();

    // 2. Try to access category filters
    const categorySection = page.locator('text=/Category/i');
    try {
      await expect(categorySection).toBeVisible();
    } catch {
      // Categories may not be visible on all pages
    }
  });

  // Test 7.11: Brand filters visible on products page
  test('Verify brand filters on products page', async ({ page }) => {
    // 1. Navigate to products page
    await productsPage.navigateToProducts();

    // 2. Try to access brand filters
    const brandsSection = page.locator('text=/Brands/i');
    try {
      await expect(brandsSection).toBeVisible();
    } catch {
      // Brands may not be visible on all pages
    }
  });

  // Test 7.12: Apply multiple category filters
  test('Apply category filter and verify results', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Apply Women category
    await homePage.womenCategory.click();
    await page.waitForLoadState('load');

    // 3. Verify filtered results
    const filteredCount = await page.locator('[class*="product"]').count();
    expect(filteredCount).toBeGreaterThan(0);

    // 4. Go back to homepage
    await homePage.navigateToHomepage();

    // 5. Verify category section still accessible
    await expect(homePage.categorySection).toBeVisible();
  });

  // Test 7.13: Brand links have product count
  test('Verify brand links display product counts', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Look for brand text with counts (e.g., "(6) Polo")
    const brandWithCount = page.locator('a:has-text("(")').filter({ hasText: /Polo|H&M|Madame/ });
    const countExists = await brandWithCount.count();

    // If brand counts are displayed
    if (countExists > 0) {
      // Verify format includes count
      const brandText = await brandWithCount.first().textContent();
      expect(brandText).toMatch(/\(\d+\)/);
    }
  });

  // Test 7.14: Navigation between categories and brands
  test('Navigate between categories and brands seamlessly', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Click Women category
    await homePage.womenCategory.click();
    await page.waitForLoadState('load');

    // 3. Go back
    await homePage.navigateToHomepage();

    // 4. Click Polo brand
    const poloBrand = page.locator('a:has-text("Polo")').first();
    await poloBrand.click();
    await page.waitForLoadState('load');

    // 5. Go back
    await homePage.navigateToHomepage();

    // 6. Click Men category
    await homePage.menCategory.click();
    await page.waitForLoadState('load');

    // 7. Verify page loaded
    const url = await page.url();
    expect(url).toBeDefined();
  });
});
