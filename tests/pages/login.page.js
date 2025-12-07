const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;

    // Login Section Elements
    this.loginHeading = this.page.getByRole('heading', { name: 'Login to your account' });
    this.loginEmailInput = this.page.getByLabel('Email Address').first();
    this.loginPasswordInput = this.page.getByLabel('Password');
    this.loginButton = this.page.getByRole('button', { name: 'Login' });

    // Signup Section Elements
    this.signupHeading = this.page.getByRole('heading', { name: 'New User Signup!' });
    this.signupNameInput = this.page.locator('input[placeholder="Name"]').nth(1);
    this.signupEmailInput = this.page.getByLabel('Email Address').last();
    this.signupButton = this.page.getByRole('button', { name: 'Signup' });
  }

  /**
   * Navigate to login page
   */
  async navigateToLogin() {
    await this.page.goto('https://www.automationexercise.com/login', { waitUntil: 'load' });
  }

  /**
   * Verify login form is visible
   */
  async verifyLoginFormVisible() {
    return await this.loginHeading.isVisible();
  }

  /**
   * Verify signup form is visible
   */
  async verifySignupFormVisible() {
    return await this.signupHeading.isVisible();
  }

  /**
   * Get current page URL
   */
  async getCurrentURL() {
    return this.page.url();
  }
}

module.exports = { LoginPage };
