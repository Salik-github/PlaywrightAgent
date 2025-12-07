/**
 * AuthPage - Page Object Model for Authentication Pages
 * Handles login, signup, and authentication-related interactions
 */
const { expect } = require('@playwright/test');

class AuthPage {
  constructor(page) {
    this.page = page;

    // Login Section
    this.loginHeading = this.page.getByRole('heading', { name: 'Login to your account' });
    this.loginEmail = this.page.locator('input[placeholder="Email Address"]').first();
    this.loginPassword = this.page.locator('input[placeholder="Password"]').first();
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
    this.loginErrorMessage = this.page.locator('[class*="error"]').first();

    // Signup Section
    this.signupHeading = this.page.getByRole('heading', { name: 'New User Signup!' });
    this.signupName = this.page.locator('input[placeholder="Name"]');
    this.signupEmail = this.page.locator('input[placeholder="Email Address"]').last();
    this.signupButton = this.page.getByRole('button', { name: 'Signup' });
    this.signupErrorMessage = this.page.locator('[class*="error"]');

    // Account Creation Form (after signup)
    this.titleMrRadio = this.page.locator('input#id_gender1');
    this.titleMrsRadio = this.page.locator('input#id_gender2');
    this.passwordField = this.page.locator('input#password');
    this.firstNameField = this.page.locator('input#first_name');
    this.lastNameField = this.page.locator('input#last_name');
    this.companyField = this.page.locator('input#company');
    this.addressField = this.page.locator('input#address1');
    this.countrySelect = this.page.locator('select#country');
    this.stateField = this.page.locator('input#state');
    this.cityField = this.page.locator('input#city');
    this.zipcodeField = this.page.locator('input#zipcode');
    this.mobileNumberField = this.page.locator('input#mobile_number');
    this.createAccountButton = this.page.locator('button:has-text("Create Account")');

    // Logout
    this.logoutButton = this.page.locator('a:has-text("Logout")');

    // Account page indicator
    this.accountHeading = this.page.getByRole('heading', { name: 'Account Information' });
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
    await expect(this.loginHeading).toBeVisible();
  }

  /**
   * Verify signup form is visible
   */
  async verifySignupFormVisible() {
    await expect(this.signupHeading).toBeVisible();
  }

  /**
   * Login with email and password
   */
  async login(email, password) {
    await this.loginEmail.fill(email);
    await this.loginPassword.fill(password);
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Signup with name and email
   */
  async signup(name, email) {
    await this.signupName.fill(name);
    await this.signupEmail.fill(email);
    await this.signupButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Fill complete account details
   */
  async fillAccountDetails(accountData) {
    // Select title
    if (accountData.title && accountData.title === 'Mr') {
      await this.titleMrRadio.click();
    } else if (accountData.title && accountData.title === 'Mrs') {
      await this.titleMrsRadio.click();
    }

    // Fill password
    if (accountData.password) {
      await this.passwordField.fill(accountData.password);
    }

    // Fill name fields
    if (accountData.firstName) {
      await this.firstNameField.fill(accountData.firstName);
    }
    if (accountData.lastName) {
      await this.lastNameField.fill(accountData.lastName);
    }

    // Fill company
    if (accountData.company) {
      await this.companyField.fill(accountData.company);
    }

    // Fill address
    if (accountData.address) {
      await this.addressField.fill(accountData.address);
    }

    // Select country
    if (accountData.country) {
      await this.countrySelect.selectOption(accountData.country);
    }

    // Fill state
    if (accountData.state) {
      await this.stateField.fill(accountData.state);
    }

    // Fill city
    if (accountData.city) {
      await this.cityField.fill(accountData.city);
    }

    // Fill zipcode
    if (accountData.zipcode) {
      await this.zipcodeField.fill(accountData.zipcode);
    }

    // Fill mobile
    if (accountData.mobile) {
      await this.mobileNumberField.fill(accountData.mobile);
    }
  }

  /**
   * Create account
   */
  async createAccount() {
    await this.createAccountButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Verify logged in state
   */
  async verifyLoggedIn() {
    await expect(this.logoutButton).toBeVisible();
  }

  /**
   * Logout from account
   */
  async logout() {
    await this.logoutButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Get login error message
   */
  async getLoginErrorMessage() {
    return await this.loginErrorMessage.textContent();
  }

  /**
   * Get signup error message
   */
  async getSignupErrorMessage() {
    return await this.signupErrorMessage.textContent();
  }

  /**
   * Get current page URL
   */
  async getCurrentURL() {
    return this.page.url();
  }
}

module.exports = { AuthPage };
