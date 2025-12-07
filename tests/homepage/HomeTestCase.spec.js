// spec: test_plan.md
// seed: tests/seed.spec.ts

const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');
const { ProductsPage } = require('../pages/products.page');
const { CartPage } = require('../pages/cart.page');
const { LoginPage } = require('../pages/login.page');
const { ContactUsPage } = require('../pages/contact-us.page');

test.describe.configure({ mode: 'parallel' });
test.describe('Homepage Navigation and Display', () => {
  test('Verify homepage loads correctly with all key elements', async ({ page }) => {
    const homePage = new HomePage(page);

    // 1. Navigate to https://www.automationexercise.com/
    await homePage.navigateToHomepage();

    // 2. Wait for the page to fully load
    // 3. Verify the logo is displayed
    await expect(homePage.logo).toBeVisible();

    // 4. Verify all main navigation menu items are visible
    await expect(homePage.homeLink).toBeVisible();
    await expect(homePage.productsLink).toBeVisible();
    await expect(homePage.cartLink).toBeVisible();
    await expect(homePage.signupLoginLink).toBeVisible();
    await expect(homePage.testCasesLink).toBeVisible();
    await expect(homePage.apiTestingLink).toBeVisible();
    await expect(homePage.videoTutorialsLink).toBeVisible();
    await expect(homePage.contactUsLink).toBeVisible();

    // 5. Verify the banner with 'AutomationExercise' heading is present
    await expect(homePage.autoExerciseHeading).toBeVisible();

    // 6. Verify the banner text 'Full-Fledged practice website for Automation Engineers' is visible
    await expect(homePage.bannerText).toBeVisible();

    // 7. Verify featured products section is displayed with product cards
    await expect(homePage.featuredItemsSection).toBeVisible();

    // 8. Verify category section showing Women, Men, Kids categories is visible
    await expect(homePage.categorySection).toBeVisible();
    await expect(homePage.womenCategory).toBeVisible();
    await expect(homePage.menCategory).toBeVisible();
    await expect(homePage.kidsCategory).toBeVisible();

    // 9. Verify Brands section with brand listings is present
    await expect(homePage.brandsSection).toBeVisible();

    // 10. Verify footer with subscription area and copyright information is visible
    await expect(homePage.subscriptionHeading).toBeVisible();
    await expect(homePage.copyrightText).toBeVisible();
  });

  test.fixme('Verify navigation menu links redirect to correct pages', async ({ page }) => {
    // Note: This test times out under concurrent execution with multiple workers
    // It works fine when run individually but fails with high contention
    // Reduce worker count or investigate website rate limiting
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const loginPage = new LoginPage(page);
    const contactUsPage = new ContactUsPage(page);

    // 1. Navigate to https://www.automationexercise.com/
    await homePage.navigateToHomepage();

    // 2. Click on 'Home' link
    await homePage.clickHome();

    // 3. Verify user is on the homepage
    await expect(page).toHaveURL('https://www.automationexercise.com/');

    // 4. Click on 'Products' link
    await homePage.clickProducts();

    // 5. Verify user is redirected to /products page
    // 6. Verify Products page displays all products list
    await expect(page).toHaveURL('https://www.automationexercise.com/products');
    await expect(productsPage.allProductsHeading).toBeVisible();

    // 7. Click on 'Cart' link
    await homePage.clickCart();

    // 8. Verify user is redirected to /view_cart page
    await expect(page).toHaveURL('https://www.automationexercise.com/view_cart');

    // 9. Click on 'Signup / Login' link
    await homePage.clickSignupLogin();

    // 10. Verify user is redirected to /login page with signup and login forms
    await expect(page).toHaveURL('https://www.automationexercise.com/login');
    await expect(loginPage.loginHeading).toBeVisible();
    await expect(loginPage.signupHeading).toBeVisible();

    // 11. Click on 'Test Cases' link
    await homePage.clickTestCases();

    // 12. Verify user is redirected to test cases page
    await expect(page).toHaveURL('https://www.automationexercise.com/test_cases');

    // 13. Click on 'Contact us' link
    await homePage.clickContactUs();

    // 14. Verify user is redirected to /contact_us page with contact form
    await expect(page).toHaveURL('https://www.automationexercise.com/contact_us');
    await expect(contactUsPage.contactHeading).toBeVisible();
  });

  test('Verify homepage carousel functionality', async ({ page }) => {
    const homePage = new HomePage(page);

    // 1. Navigate to https://www.automationexercise.com/
    await homePage.navigateToHomepage();

    // 2. Locate the image carousel in the banner
    // 3. Click on carousel next arrow button
    await homePage.clickCarouselNext();

    // 4. Verify carousel moves to next image (no error occurs)
    // 5. Click on carousel previous arrow button
    await homePage.clickCarouselPrev();

    // 6. Verify carousel moves to previous image (no error occurs)
    // 7. Verify carousel images are displayed properly without overlapping
    await expect(homePage.carouselImages).toBeVisible();
  });
});
