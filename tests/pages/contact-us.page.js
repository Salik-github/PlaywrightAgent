const { expect } = require('@playwright/test');

class ContactUsPage {
  constructor(page) {
    this.page = page;

    // Contact Form Elements
    this.contactHeading = this.page.getByRole('heading', { name: /Contact Us/i });
    this.getInTouchHeading = this.page.getByRole('heading', { name: 'Get In Touch' });
  }

  /**
   * Navigate to contact us page
   */
  async navigateToContactUs() {
    await this.page.goto('https://www.automationexercise.com/contact_us', { waitUntil: 'load' });
  }

  /**
   * Verify contact form is visible
   */
  async verifyContactFormVisible() {
    return await this.getInTouchHeading.isVisible();
  }

  /**
   * Get current page URL
   */
  async getCurrentURL() {
    return this.page.url();
  }
}

module.exports = { ContactUsPage };
