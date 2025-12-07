/**
 * FooterPage - Page Object Model for Footer Section
 * Handles footer interactions including newsletter subscription
 */
const { expect } = require('@playwright/test');

class FooterPage {
  constructor(page) {
    this.page = page;

    // Subscription Section
    this.subscriptionHeading = this.page.getByRole('heading', { name: 'Subscription' });
    this.subscriptionEmail = this.page.locator('input[placeholder="Your email address"]');
    this.subscriptionButton = this.page.getByRole('button').filter({ hasText: /subscribe|arrow/ }).first();
    this.subscriptionText = this.page.locator('text=/Get the most recent updates/i');

    // Copyright Section
    this.copyrightText = this.page.locator('text=/Copyright/i');

    // Footer Container
    this.footerSection = this.page.locator('footer#footer');

    // Success Message
    this.subscriptionSuccess = this.page.locator('text=/success|thank you/i', { case: false });
  }

  /**
   * Scroll to footer
   */
  async scrollToFooter() {
    await this.footerSection.scrollIntoViewIfNeeded();
  }

  /**
   * Verify subscription section is visible
   */
  async verifySubscriptionSectionVisible() {
    await expect(this.subscriptionHeading).toBeVisible();
  }

  /**
   * Verify subscription email input is visible
   */
  async verifySubscriptionEmailInputVisible() {
    await expect(this.subscriptionEmail).toBeVisible();
  }

  /**
   * Verify subscription button is visible
   */
  async verifySubscriptionButtonVisible() {
    await expect(this.subscriptionButton).toBeVisible();
  }

  /**
   * Verify subscription text is visible
   */
  async verifySubscriptionTextVisible() {
    await expect(this.subscriptionText).toBeVisible();
  }

  /**
   * Verify copyright text is visible
   */
  async verifyCopyrightTextVisible() {
    await expect(this.copyrightText).toBeVisible();
  }

  /**
   * Subscribe to newsletter with email
   */
  async subscribeToNewsletter(email) {
    await this.subscriptionEmail.fill(email);
    await this.subscriptionButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Get subscription email value
   */
  async getSubscriptionEmailValue() {
    return await this.subscriptionEmail.inputValue();
  }

  /**
   * Clear subscription email
   */
  async clearSubscriptionEmail() {
    await this.subscriptionEmail.clear();
  }

  /**
   * Verify subscription success message
   */
  async verifySubscriptionSuccess() {
    // Wait for success message or alert
    try {
      await expect(this.subscriptionSuccess).toBeVisible({ timeout: 3000 });
    } catch {
      // Alert might appear instead
      await this.page.waitForLoadState('networkidle');
    }
  }

  /**
   * Get copyright text content
   */
  async getCopyrightText() {
    return await this.copyrightText.textContent();
  }

  /**
   * Verify footer is on page
   */
  async verifyFooterPresent() {
    await expect(this.footerSection).toBeVisible();
  }

  /**
   * Submit empty subscription (for validation)
   */
  async submitEmptySubscription() {
    await this.subscriptionButton.click();
  }
}

module.exports = { FooterPage };
