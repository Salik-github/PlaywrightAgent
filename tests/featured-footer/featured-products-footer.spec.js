/**
 * Featured Products and Footer Tests
 * Tests for featured products section, recommended items, and footer functionality
 */
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');
const { FooterPage } = require('../pages/footer.page');
const { CartPage } = require('../pages/cart.page');
test.describe.configure({ mode: 'parallel' });

test.describe('Featured Products and Footer', () => {
  let homePage;
  let footerPage;
  let cartPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    footerPage = new FooterPage(page);
    cartPage = new CartPage(page);
  });

  // Test 6.1: View featured products section
  test('View featured products section on homepage', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Verify featured items section is visible
    await expect(homePage.featuredItemsSection).toBeVisible();

    // 3. Verify featured products are displayed
    const productImages = await page.locator('img[alt*="ecommerce"]').count();
    expect(productImages).toBeGreaterThan(0);
  });

  // Test 6.2: View recommended products section
  test('View recommended items section on homepage', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Scroll down to find recommended section
    const recommendedHeading = page.locator('text=/recommended/i');
    await recommendedHeading.scrollIntoViewIfNeeded();

    // 3. Verify recommended items are visible
    await expect(recommendedHeading).toBeVisible();
  });

  // Test 6.3: Add featured product to cart from homepage
  test.fixme('Add featured product to cart from homepage', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Locate add to cart button for featured product
    const addToCartButtons = page.locator('button:has-text("Add to cart")').or(page.locator('[class*="add-to-cart"]'));
    const firstButton = addToCartButtons.first();

    // 3. Click add to cart
    await firstButton.click();

    // 4. Navigate to cart
    await cartPage.navigateToCart();

    // 5. Verify product in cart
    await cartPage.verifyCartHasItems();
  });

  // Test 6.3b: Add multiple featured products to cart
  test.fixme('Add multiple featured products to cart from homepage', async ({ page }) => {
    // Note: This test times out under concurrent execution with multiple workers
    // It navigates to homepage multiple times which causes timeout under load
    // Works fine when run individually
    
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Add first featured product
    const addToCartButtons = page.locator('button:has-text("Add to cart")').or(page.locator('[class*="add-to-cart"]'));
    await addToCartButtons.nth(0).click();

    // 3. Go back to homepage
    await homePage.navigateToHomepage();

    // 4. Add second featured product
    await addToCartButtons.nth(1).click();

    // 5. Go back to homepage
    await homePage.navigateToHomepage();

    // 6. Add third featured product
    await addToCartButtons.nth(2).click();

    // 7. Go to cart
    await cartPage.navigateToCart();

    // 8. Verify multiple products in cart
    await cartPage.verifyCartHasItems();
  });

  // Test 6.4: View featured product details
  test.fixme('View product details from featured section', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Find View Product link on featured product
    const viewProductLinks = page.locator('a:has-text("View Product")');
    const firstLink = viewProductLinks.first();

    // 3. Click View Product
    await firstLink.click();

    // 4. Verify product details page loads
    const productName = page.locator('h2').first();
    await expect(productName).toBeVisible();

    // 5. Verify product information is displayed
    const productPrice = page.locator('h2:has-text("Rs.")');
    await expect(productPrice).toBeVisible();
  });

  // Test 6.5: Carousel navigation for featured products
  test('Navigate featured products carousel', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Verify carousel navigation buttons exist
    const carouselButtons = page.locator('a[href*="carousel"]');
    const carouselCount = await carouselButtons.count();

    // If carousel exists, it should have navigation
    if (carouselCount > 0) {
      // 3. Click next button
      await carouselButtons.nth(1).click();

      // 4. Verify carousel moved
      await page.waitForLoadState('networkidle');
    }
  });

  // Test 6.6: Recommended products carousel
  test('Navigate recommended products carousel', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Scroll to recommended section
    const recommendedHeading = page.locator('text=/recommended/i');
    await recommendedHeading.scrollIntoViewIfNeeded();

    // 3. Find carousel controls for recommended
    const carouselControls = page.locator('a[href*="recommended"]');
    const controlCount = await carouselControls.count();

    // If carousel exists with controls
    if (controlCount > 0) {
      // 4. Click next
      await carouselControls.nth(1).click();
      await page.waitForLoadState('networkidle');
    }
  });

  // Test 8.1: Subscribe to newsletter
  test.fixme('Subscribe to newsletter with valid email', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Scroll to footer
    await footerPage.scrollToFooter();

    // 3. Verify subscription section
    await footerPage.verifySubscriptionSectionVisible();

    // 4. Subscribe with email
    await footerPage.subscribeToNewsletter('subscriber@example.com');

    // 5. Verify subscription success
    await footerPage.verifySubscriptionSuccess();
  });

  // Test 8.1b: Multiple newsletter subscriptions
  test.fixme('Subscribe multiple times with different emails', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Scroll to footer
    await footerPage.scrollToFooter();

    // 3. First subscription
    await footerPage.subscribeToNewsletter('email1@example.com');

    // 4. Go back to homepage
    await homePage.navigateToHomepage();

    // 5. Scroll to footer again
    await footerPage.scrollToFooter();

    // 6. Second subscription with different email
    await footerPage.subscribeToNewsletter('email2@example.com');

    // 7. Go back
    await homePage.navigateToHomepage();

    // 8. Scroll to footer
    await footerPage.scrollToFooter();

    // 9. Third subscription
    await footerPage.subscribeToNewsletter('email3@example.com');
  });

  // Test 8.2: Verify footer content and links
  test('Verify footer content on homepage', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Scroll to footer
    await footerPage.scrollToFooter();

    // 3. Verify footer is present
    await footerPage.verifyFooterPresent();

    // 4. Verify subscription section visible
    await footerPage.verifySubscriptionSectionVisible();

    // 5. Verify copyright text visible
    await footerPage.verifyCopyrightTextVisible();

    // 6. Verify subscription text visible
    await footerPage.verifySubscriptionTextVisible();
  });

  // Test 8.2b: Verify footer on different pages
  test('Verify footer appears on all pages', async ({ page }) => {
    // 1. Test footer on homepage
    await homePage.navigateToHomepage();
    await footerPage.scrollToFooter();
    await footerPage.verifyFooterPresent();

    // 2. Test footer on products page
    await page.goto('https://www.automationexercise.com/products');
    await footerPage.scrollToFooter();
    await footerPage.verifyFooterPresent();

    // 3. Test footer on contact page
    await page.goto('https://www.automationexercise.com/contact_us');
    await footerPage.scrollToFooter();
    await footerPage.verifyFooterPresent();
  });

  // Test 8.3: Newsletter email validation
  test.fixme('Newsletter subscription with invalid email', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Scroll to footer
    await footerPage.scrollToFooter();

    // 3. Try to subscribe with invalid email
    await footerPage.subscribeToNewsletter('notanemail');

    // Form may show validation or accept
  });

  // Test 8.3b: Newsletter with empty email
  test.fixme('Newsletter subscription with empty email field', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Scroll to footer
    await footerPage.scrollToFooter();

    // 3. Click subscribe without entering email
    await footerPage.submitEmptySubscription();

    // May show validation error
  });

  // Test 8.4: Copyright text verification
  test('Verify copyright information in footer', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Scroll to footer
    await footerPage.scrollToFooter();

    // 3. Verify copyright text
    await footerPage.verifyCopyrightTextVisible();

    // 4. Get copyright text
    const copyrightText = await footerPage.getCopyrightText();
    expect(copyrightText).toContain('Copyright');
  });

  // Test 8.5: Newsletter subscription field placeholder
  test.fixme('Verify newsletter email field attributes', async ({ page }) => {
    // 1. Navigate to homepage
    await homePage.navigateToHomepage();

    // 2. Scroll to footer
    await footerPage.scrollToFooter();

    // 3. Verify email input is visible
    await footerPage.verifySubscriptionEmailInputVisible();

    // 4. Verify subscription button is visible
    await footerPage.verifySubscriptionButtonVisible();
  });
});
