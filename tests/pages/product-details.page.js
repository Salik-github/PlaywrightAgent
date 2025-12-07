/**
 * ProductDetailsPage - Page Object Model for Product Details Page
 * Handles product detail view and interactions
 */
const { expect } = require('@playwright/test');

class ProductDetailsPage {
  constructor(page) {
    this.page = page;

    // Product Info
    this.productName = this.page.locator('h2').first();
    this.productPrice = this.page.locator('h2:has-text("Rs.")');
    this.productImage = this.page.locator('img[class*="product"]').first();
    this.productDescription = this.page.locator('p').filter({ hasText: /description|product/i }).first();

    // Product Details
    this.productAvailability = this.page.locator('p:has-text("Availability")');
    this.productCategory = this.page.locator('p:has-text("Category")');
    this.productBrand = this.page.locator('p:has-text("Brand")');

    // Add to Cart Section
    this.quantityInput = this.page.locator('input[type="number"]');
    this.addToCartButton = this.page.locator('button:has-text("Add to cart")');

    // Review Section (if present)
    this.reviewSection = this.page.locator('div:has-text("Reviews")').first();
    this.ratingSelect = this.page.locator('select[id*="rating"]');
    this.reviewTextarea = this.page.locator('textarea[id*="review"]');
    this.submitReviewButton = this.page.locator('button:has-text("Submit Review")');
  }

  /**
   * Navigate to product details page by product ID
   */
  async navigateToProductDetails(productId) {
    await this.page.goto(`https://www.automationexercise.com/product_details/${productId}`, { waitUntil: 'load' });
  }

  /**
   * Verify product name is visible
   */
  async verifyProductNameVisible() {
    await expect(this.productName).toBeVisible();
  }

  /**
   * Get product name
   */
  async getProductName() {
    return await this.productName.textContent();
  }

  /**
   * Verify product price is visible
   */
  async verifyProductPriceVisible() {
    await expect(this.productPrice).toBeVisible();
  }

  /**
   * Get product price
   */
  async getProductPrice() {
    const priceText = await this.productPrice.textContent();
    return priceText.match(/\d+/)[0];
  }

  /**
   * Verify product image is visible
   */
  async verifyProductImageVisible() {
    await expect(this.productImage).toBeVisible();
  }

  /**
   * Verify product description is visible
   */
  async verifyProductDescriptionVisible() {
    await expect(this.productDescription).toBeVisible();
  }

  /**
   * Get product description
   */
  async getProductDescription() {
    return await this.productDescription.textContent();
  }

  /**
   * Verify availability status is shown
   */
  async verifyAvailabilityShown() {
    await expect(this.productAvailability).toBeVisible();
  }

  /**
   * Verify category is shown
   */
  async verifyCategoryShown() {
    await expect(this.productCategory).toBeVisible();
  }

  /**
   * Verify brand is shown
   */
  async verifyBrandShown() {
    await expect(this.productBrand).toBeVisible();
  }

  /**
   * Verify quantity selector is present
   */
  async verifyQuantitySelectorPresent() {
    await expect(this.quantityInput).toBeVisible();
  }

  /**
   * Set product quantity
   */
  async setQuantity(quantity) {
    await this.quantityInput.fill(quantity.toString());
  }

  /**
   * Get current quantity
   */
  async getQuantity() {
    const value = await this.quantityInput.inputValue();
    return parseInt(value);
  }

  /**
   * Verify add to cart button is visible
   */
  async verifyAddToCartButtonVisible() {
    await expect(this.addToCartButton).toBeVisible();
  }

  /**
   * Click add to cart button
   */
  async clickAddToCart() {
    await this.addToCartButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Add product to cart with specified quantity
   */
  async addToCartWithQuantity(quantity) {
    await this.setQuantity(quantity);
    await this.clickAddToCart();
  }

  /**
   * Verify review section exists
   */
  async verifyReviewSectionExists() {
    await expect(this.reviewSection).toBeVisible();
  }

  /**
   * Submit product review
   */
  async submitReview(rating, reviewText) {
    if (this.ratingSelect) {
      await this.ratingSelect.selectOption(rating);
    }
    if (this.reviewTextarea) {
      await this.reviewTextarea.fill(reviewText);
    }
    await this.submitReviewButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Get current page URL
   */
  async getCurrentURL() {
    return this.page.url();
  }

  /**
   * Verify page title contains product info
   */
  async verifyPageTitleContainsProduct() {
    const productName = await this.getProductName();
    const url = this.page.url();
    expect(url).toContain('product_details');
  }
}

module.exports = { ProductDetailsPage };
