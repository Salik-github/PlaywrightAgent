/**
 * Product Browsing and Filtering Tests
 * Tests for browsing products, filtering by category/brand, searching, and viewing details
 */
const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../pages/products.page');
const { ProductDetailsPage } = require('../pages/product-details.page');
const { CartPage } = require('../pages/cart.page');

test.describe('Product Browsing and Filtering', () => {
  let productsPage;
  let productDetailsPage;
  let cartPage;

  test.beforeEach(async ({ page }) => {
    productsPage = new ProductsPage(page);
    productDetailsPage = new ProductDetailsPage(page);
    cartPage = new CartPage(page);
  });

  // Test 2.1: Browse all products with pagination
  test('Browse all products with pagination', async ({ page }) => {
    // 1. Navigate to products page
    await productsPage.navigateToProducts();

    // 2. Verify page loads with 'All Products' heading
    await productsPage.verifyAllProductsHeadingVisible();

    // 3. Verify product list displays multiple product cards
    await productsPage.verifyProductsDisplayed();

    // 4. Verify each product card shows required elements
    await productsPage.verifyProductElementsPresent();

    // 5. Verify product count is greater than 0
    const productCount = await productsPage.getProductCount();
    expect(productCount).toBeGreaterThan(0);
  });

  // Test 2.2: Filter products by category
  test.fixme('Filter products by category - Women', async ({ page }) => {
    // 1. Navigate to products page
    await productsPage.navigateToProducts();
    const initialCount = await productsPage.getProductCount();

    // 2. Click on 'Women' category
    await productsPage.filterByWomenCategory();

    // 3. Verify page updates to show women products
    const womenCount = await productsPage.getProductCount();
    
    // Products should be filtered (may be less or equal)
    expect(womenCount).toBeGreaterThan(0);
  });

  // Test 2.2b: Filter products by category - Men
  test('Filter products by category - Men', async ({ page }) => {
    // 1. Navigate to products page
    await productsPage.navigateToProducts();

    // 2. Click on 'Men' category
    await productsPage.filterByMenCategory();

    // 3. Verify page updates to show men products
    const menCount = await productsPage.getProductCount();
    expect(menCount).toBeGreaterThan(0);
  });

  // Test 2.2c: Filter products by category - Kids
  test('Filter products by category - Kids', async ({ page }) => {
    // 1. Navigate to products page
    await productsPage.navigateToProducts();

    // 2. Click on 'Kids' category
    await productsPage.filterByKidsCategory();

    // 3. Verify page updates to show kids products
    const kidsCount = await productsPage.getProductCount();
    expect(kidsCount).toBeGreaterThan(0);
  });

  // Test 2.3: Filter products by brand
  test('Filter products by brand - Polo', async ({ page }) => {
    // 1. Navigate to products page
    await productsPage.navigateToProducts();

    // 2. Click on 'Polo' brand
    await productsPage.filterByPoloBrand();

    // 3. Verify page updates to show Polo products
    const poloCount = await productsPage.getProductCount();
    expect(poloCount).toBeGreaterThan(0);
  });

  // Test 2.3b: Filter products by brand - H&M
  test('Filter products by brand - H&M', async ({ page }) => {
    // 1. Navigate to products page
    await productsPage.navigateToProducts();

    // 2. Click on 'H&M' brand
    await productsPage.filterByHandmBrand();

    // 3. Verify page updates to show H&M products
    const handmCount = await productsPage.getProductCount();
    expect(handmCount).toBeGreaterThan(0);
  });

  // Test 2.3c: Filter products by brand - Madame
  test('Filter products by brand - Madame', async ({ page }) => {
    // 1. Navigate to products page
    await productsPage.navigateToProducts();

    // 2. Click on 'Madame' brand
    await productsPage.filterByMadameBrand();

    // 3. Verify page updates to show Madame products
    const madameCount = await productsPage.getProductCount();
    expect(madameCount).toBeGreaterThan(0);
  });

  // Test 2.4: Search for products
  test.fixme('Search for products - Top', async ({ page }) => {
    // 1. Navigate to products page
    await productsPage.navigateToProducts();

    // 2. Search for 'Top' in the search box
    await productsPage.searchProduct('Top');

    // 3. Verify search results show products
    const searchCount = await productsPage.getSearchResultsCount();
    expect(searchCount).toBeGreaterThan(0);
  });

  // Test 2.4b: Search for products - Jeans
  test.fixme('Search for products - Jeans', async ({ page }) => {
    // 1. Navigate to products page
    await productsPage.navigateToProducts();

    // 2. Search for 'Jeans'
    await productsPage.searchProduct('Jeans');

    // 3. Verify search results
    const searchCount = await productsPage.getSearchResultsCount();
    expect(searchCount).toBeGreaterThan(0);
  });

  // Test 2.5: View product details
  test.fixme('View product details', async ({ page }) => {
    // 1. Navigate to products page
    await productsPage.navigateToProducts();

    // 2. Click 'View Product' on first product
    await productsPage.clickViewProductLink(0);

    // 3. Verify product details page loads
    await productDetailsPage.verifyProductNameVisible();

    // 4. Verify product price is shown
    await productDetailsPage.verifyProductPriceVisible();

    // 5. Verify product description is visible
    await productDetailsPage.verifyProductDescriptionVisible();

    // 6. Verify product availability is shown
    await productDetailsPage.verifyAvailabilityShown();

    // 7. Verify product category is shown
    await productDetailsPage.verifyCategoryShown();

    // 8. Verify quantity selector is present
    await productDetailsPage.verifyQuantitySelectorPresent();

    // 9. Verify add to cart button is present
    await productDetailsPage.verifyAddToCartButtonVisible();
  });

  // Test 2.5b: Add product to cart from details page
  test('Add product to cart from details page', async ({ page }) => {
    // 1. Navigate to first product details
    await productDetailsPage.navigateToProductDetails(1);

    // 2. Set quantity to 2
    await productDetailsPage.setQuantity(2);

    // 3. Click add to cart
    await productDetailsPage.clickAddToCart();

    // 4. Navigate to cart
    await cartPage.navigateToCart();

    // 5. Verify product is in cart
    await cartPage.verifyCartHasItems();
  });

  // Test 2.5c: View multiple product details
  test.fixme('View multiple product details sequentially', async ({ page }) => {
    // Navigate to product 1
    await productDetailsPage.navigateToProductDetails(1);
    await productDetailsPage.verifyProductNameVisible();
    const product1Name = await productDetailsPage.getProductName();

    // Navigate to product 2
    await productDetailsPage.navigateToProductDetails(2);
    await productDetailsPage.verifyProductNameVisible();
    const product2Name = await productDetailsPage.getProductName();

    // Verify products are different
    expect(product1Name).not.toBe(product2Name);
  });
});
