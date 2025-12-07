/**
 * CartPage - Page Object Model for Shopping Cart
 * Handles all cart-related operations
 */
const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;

    // Cart Elements
    this.cartHeading = this.page.getByRole('heading', { name: 'Shopping Cart' }).or(this.page.locator('h2:has-text("Cart")'));
    this.cartTable = this.page.locator('table').first();
    this.cartItems = this.page.locator('tr').filter({ hasText: /Rs\./ });
    this.emptyCartMessage = this.page.locator('text=/Cart is empty/i');
    this.emptyCartLink = this.page.locator('a:has-text("here")').first();

    // Item Actions
    this.removeButtons = this.page.locator('a[href*="delete"]');
    this.quantityInputs = this.page.locator('input[class*="quantity"]');
    this.proceedCheckoutButton = this.page.locator('a:has-text("Proceed To Checkout")');

    // Product Details in Cart
    this.productNames = this.page.locator('td').nth(1);
    this.productPrices = this.page.locator('td').nth(3);
    this.productQuantities = this.page.locator('input[class*="quantity"]');
  }

  /**
   * Navigate to cart page
   */
  async navigateToCart() {
    await this.page.goto('https://www.automationexercise.com/view_cart', { waitUntil: 'load' });
  }

  /**
   * Verify cart page is loaded
   */
  async verifyCartPageLoaded() {
    await expect(this.cartHeading).toBeVisible({ timeout: 5000 });
  }

  /**
   * Verify cart is empty
   */
  async verifyCartEmpty() {
    await expect(this.emptyCartMessage).toBeVisible();
  }

  /**
   * Verify cart has items
   */
  async verifyCartHasItems() {
    const count = await this.cartItems.count();
    expect(count).toBeGreaterThan(0);
  }

  /**
   * Get count of items in cart
   */
  async getCartItemCount() {
    return await this.cartItems.count();
  }

  /**
   * Get product count in cart
   */
  async getProductCountInCart() {
    return await this.page.locator('tr').filter({ hasText: /Rs\./ }).count();
  }

  /**
   * Click on link in empty cart message to go to products
   */
  async clickEmptyCartLink() {
    await this.emptyCartLink.click();
    await this.page.waitForLoadState('load');
  }

  /**
   * Remove product from cart by index
   */
  async removeProductByIndex(index = 0) {
    const removeButtons = this.page.locator(`[class='cart_quantity_delete']`);
    await removeButtons.nth(index).click();
    await this.page.waitForLoadState('load');
  }

  /**
   * Update product quantity in cart
   */
  async updateProductQuantity(index = 0, newQuantity) {
    const quantityInputs = this.page.locator('input[class*="quantity"]');
    await quantityInputs.nth(index).fill(newQuantity.toString());
  }

  /**
   * Get quantity of product in cart by index
   */
  async getProductQuantity(index = 0) {
    const quantities = this.page.locator('input[class*="quantity"]');
    const value = await quantities.nth(index).inputValue();
    return parseInt(value);
  }

  /**
   * Verify product exists in cart
   */
  async verifyProductInCart(productName) {
    const product = this.page.locator(`td:has-text("${productName}")`);
    await expect(product).toBeVisible();
  }

  /**
   * Click proceed to checkout
   */
  async clickProceedCheckout() {
    await this.proceedCheckoutButton.click();
    await this.page.waitForLoadState('load');
  }

  /**
   * Get cart subtotal
   */
  async getCartSubtotal() {
    const subtotal = this.page.locator('tr:has-text("Subtotal")').locator('td').last();
    const text = await subtotal.textContent();
    return parseInt(text.replace(/[^0-9]/g, ''));
  }

  /**
   * Get cart total
   */
  async getCartTotal() {
    const total = this.page.locator('tr:has-text("Total Amount")').locator('td').last();
    const text = await total.textContent();
    return parseInt(text.replace(/[^0-9]/g, ''));
  }

  /**
   * Get current page URL
   */
  async getCurrentURL() {
    return this.page.url();
  }
}

module.exports = { CartPage };
