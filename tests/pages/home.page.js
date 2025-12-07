const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;

    // Navigation Links
    this.homeLink = this.page.getByRole('link', { name: ' Home' });
    this.productsLink = this.page.getByRole('link', { name: ' Products' });
    this.cartLink = this.page.getByRole('link', { name: ' Cart' });
    this.signupLoginLink = this.page.getByRole('link', { name: ' Signup / Login' });
    this.testCasesLink = this.page.locator('a[href="/test_cases"]').first();
    this.apiTestingLink = this.page.locator('a[href="/api_list"]').first();
    this.videoTutorialsLink = this.page.getByRole('link', { name: ' Video Tutorials' });
    this.contactUsLink = this.page.locator('a[href="/contact_us"]').first();

    // Banner Elements
    this.logo = this.page.getByRole('img', { name: 'Website for automation practice' });
    this.autoExerciseHeading = this.page.getByRole('heading', { name: 'AutomationExercise' });
    this.bannerText = this.page.locator('h2:has-text("Full-Fledged practice website for Automation Engineers")').first();

    // Sections
    this.featuredItemsSection = this.page.getByRole('heading', { name: 'Features Items' });
    this.categorySection = this.page.getByRole('heading', { name: 'Category' });
    this.womenCategory = this.page.locator('a[href="#Women"]').first();
    this.menCategory = this.page.locator('a[href="#Men"]').first();
    this.kidsCategory = this.page.locator('a[href="#Kids"]').first();
    this.brandsSection = this.page.getByRole('heading', { name: 'Brands' });

    // Footer Elements
    this.subscriptionHeading = this.page.getByRole('heading', { name: 'Subscription' });
    this.copyrightText = this.page.getByText('Copyright © 2021 All rights reserved');

    // Carousel Elements
    this.carouselNextButton = this.page.locator('a[href="#slider-carousel"]').nth(1);
    this.carouselPrevButton = this.page.locator('a[href="#slider-carousel"]').nth(0);
    this.carouselImages = this.page.locator('img[alt*="demo website for practice"]').first();
  }

  /**
   * Navigate to the homepage
   */
  async navigateToHomepage() {
    await this.page.goto('https://www.automationexercise.com/', { waitUntil: 'load' });
  }

  /**
   * Verify homepage loads with all key elements
   */
  async verifyAllElementsVisible() {
    // Verify logo
    await this.logo.isVisible();

    // Verify navigation links
    await this.homeLink.isVisible();
    await this.productsLink.isVisible();
    await this.cartLink.isVisible();
    await this.signupLoginLink.isVisible();
    await this.testCasesLink.isVisible();
    await this.apiTestingLink.isVisible();
    await this.videoTutorialsLink.isVisible();
    await this.contactUsLink.isVisible();

    // Verify banner elements
    await this.autoExerciseHeading.isVisible();
    await this.bannerText.isVisible();

    // Verify sections
    await this.featuredItemsSection.isVisible();
    await this.categorySection.isVisible();
    await this.womenCategory.isVisible();
    await this.menCategory.isVisible();
    await this.kidsCategory.isVisible();
    await this.brandsSection.isVisible();

    // Verify footer
    await this.subscriptionHeading.isVisible();
    await this.copyrightText.isVisible();
  }

  /**
   * Click on the Home link
   */
  async clickHome() {
    await this.homeLink.click();
  }

  /**
   * Click on the Products link
   */
  async clickProducts() {
    await this.productsLink.click();
  }

  /**
   * Click on the Cart link
   */
  async clickCart() {
    await this.cartLink.click();
  }

  /**
   * Click on the Signup/Login link
   */
  async clickSignupLogin() {
    await this.signupLoginLink.click();
  }

  /**
   * Click on the Contact us link
   */
  async clickContactUs() {
    await this.contactUsLink.click();
  }

  /**
   * Click on the Test Cases link
   */
  async clickTestCases() {
    await this.testCasesLink.click();
  }

  /**
   * Click on carousel next button
   */
  async clickCarouselNext() {
    await this.carouselNextButton.click();
  }

  /**
   * Click on carousel previous button
   */
  async clickCarouselPrev() {
    await this.carouselPrevButton.click();
  }

  /**
   * Verify carousel images are visible
   */
  async verifyCarouselImagesVisible() {
    return await this.carouselImages.isVisible();
  }

  /**
   * Get current page URL
   */
  async getCurrentURL() {
    return this.page.url();
  }
}

module.exports = { HomePage };
