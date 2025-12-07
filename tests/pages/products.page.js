/**
 * ProductsPage - Page Object Model for Products Page
 * Handles all interactions related to product browsing, filtering, and searching
 */
const { expect } = require('@playwright/test');

class ProductsPage {
  constructor(page) {
    this.page = page;

    // Page Elements
    this.allProductsHeading = this.page.getByRole('heading', { name: 'All Products' });
    this.productsContainer = this.page.locator('[class*="products"]').first();
    this.searchBox = this.page.locator('input[placeholder*="Search"]');
    this.searchButton = this.page.locator('button:has-text("Search")');

    // Product Cards
    this.productCards = this.page.locator('[class*="product"]').locator('div').filter({ hasText: /Rs\./ });
    this.addToCartButtons = this.page.locator('button:has-text("Add to cart"), [class*="add-to-cart"]');
    this.viewProductLinks = this.page.locator('a:has-text("View Product")');

    // Filters - Categories
    this.categorySection = this.page.locator('div:has-text("Category")');
    this.womenCategoryFilter = this.page.locator('a[href="#Women"]').first();
    this.menCategoryFilter = this.page.locator('a[href="#Men"]').first();
    this.kidsCategoryFilter = this.page.locator('a[href="#Kids"]').first();

    // Filters - Brands
    this.brandsSection = this.page.locator('div:has-text("Brands")');
    this.poloBrand = this.page.locator('a:has-text("Polo")').first();
    this.handmBrand = this.page.locator('a:has-text("H&M")').first();
    this.madameBrand = this.page.locator('a:has-text("Madame")').first();
  }

  /**
   * Navigate to products page
   */
  async navigateToProducts() {
    await this.page.goto('https://www.automationexercise.com/products', { waitUntil: 'load' });
  }

  /**
   * Verify all products heading is visible
   */
  async verifyAllProductsHeadingVisible() {
    await expect(this.allProductsHeading).toBeVisible();
  }

  /**
   * Get count of visible product cards
   */
  async getProductCount() {
    return await this.page.locator('[class*="product-image"]').count();
  }

  /**
   * Verify products are displayed
   */
  async verifyProductsDisplayed() {
    const count = await this.getProductCount();
    expect(count).toBeGreaterThan(0);
  }

  /**
   * Verify product contains all required elements
   */
  async verifyProductElementsPresent() {
    const firstProduct = this.page.locator('[class*="product-image"]').first();
    await expect(firstProduct).toBeVisible();
    
    // Verify price exists
    const priceElement = this.page.locator('h2:has-text("Rs.")').first();
    await expect(priceElement).toBeVisible();
  }

  /**
   * Search for product by keyword
   */
  async searchProduct(keyword) {
    await this.searchBox.fill(keyword);
    await this.searchButton.click();
    await this.page.waitForLoadState('load');
  }

  /**
   * Get search results count
   */
  async getSearchResultsCount() {
    return await this.page.locator('[class*="product-image"]').count();
  }

  /**
   * Filter products by category - Women
   */
  async filterByWomenCategory() {
    await this.womenCategoryFilter.click();
    await this.page.waitForLoadState('load');
  }

  /**
   * Filter products by category - Men
   */
  async filterByMenCategory() {
    await this.menCategoryFilter.click();
    await this.page.waitForLoadState('load');
  }

  /**
   * Filter products by category - Kids
   */
  async filterByKidsCategory() {
    await this.kidsCategoryFilter.click();
    await this.page.waitForLoadState('load');
  }

  /**
   * Filter products by brand - Polo
   */
  async filterByPoloBrand() {
    await this.poloBrand.click();
    await this.page.waitForLoadState('load');
  }

  /**
   * Filter products by brand - H&M
   */
  async filterByHandmBrand() {
    await this.handmBrand.click();
    await this.page.waitForLoadState('load');
  }

  /**
   * Filter products by brand - Madame
   */
  async filterByMadameBrand() {
    await this.madameBrand.click();
    await this.page.waitForLoadState('load');
  }

  /**
   * Click view product link on nth product
   */
  async clickViewProductLink(index = 0) {
    const links = this.page.locator('a:has-text("View Product")');
    await links.nth(index).click();
    await this.page.waitForLoadState('load');
  }

  /**
   * Click add to cart button on nth product
   */
  async clickAddToCartButton(index = 0) {
    const buttons = this.page.locator('button:has-text("Add to cart"), [class*="add-to-cart"]');
    await buttons.nth(index).click();
    // Wait for modal/confirmation or page to load
    await this.page.waitForTimeout(10000);
  }

  /**
   * Get current page URL
   */
  async getCurrentURL() {
    return this.page.url();
  }

  /**
   * Verify page title
   */
  async verifyPageTitle(title) {
    await expect(this.page).toHaveTitle(title);
  }
}

module.exports = { ProductsPage };
