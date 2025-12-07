/**
 * ContactPage - Page Object Model for Contact Us Page
 * Handles contact form interactions and validations
 */
const { expect } = require('@playwright/test');

class ContactPage {
  constructor(page) {
    this.page = page;

    // Page Headings
    this.getInTouchHeading = this.page.getByRole('heading', { name: 'Get In Touch' });
    this.contactHeading = this.page.getByRole('heading', { name: 'Contact Us' });

    // Contact Form Fields
    this.nameInput = this.page.locator('input[placeholder="Name"]');
    this.emailInput = this.page.locator('input[placeholder="Email"]');
    this.subjectInput = this.page.locator('input[placeholder="Subject"]');
    this.messageTextarea = this.page.locator('textarea[placeholder="Your Message Here"]');
    this.fileInput = this.page.locator('input[name="upload_file"]');
    this.submitButton = this.page.getByRole('button', { name: 'Submit' });

    // Feedback Section
    this.feedbackHeading = this.page.getByRole('heading', { name: 'Feedback For Us' });
    this.feedbackEmail = this.page.locator('a[href*="feedback"]');
    this.feedbackText = this.page.locator('text=/feedback/i').first();

    // Success/Error Messages
    this.successMessage = this.page.locator('text=/success|thank you/i');
    this.errorMessage = this.page.locator('[class*="error"]');

    // Additional Info
    this.contactInfo = this.page.getByRole('heading', { name: 'Feedback For Us' });
  }

  /**
   * Navigate to contact page
   */
  async navigateToContact() {
    await this.page.goto('https://www.automationexercise.com/contact_us', { waitUntil: 'load' });
  }

  /**
   * Verify contact form is visible
   */
  async verifyContactFormVisible() {
    await expect(this.contactHeading).toBeVisible();
  }

  /**
   * Verify get in touch heading is visible
   */
  async verifyGetInTouchHeadingVisible() {
    await expect(this.getInTouchHeading).toBeVisible();
  }

  /**
   * Fill contact form
   */
  async fillContactForm(contactData) {
    // Fill name
    if (contactData.name) {
      await this.nameInput.fill(contactData.name);
    }

    // Fill email
    if (contactData.email) {
      await this.emailInput.fill(contactData.email);
    }

    // Fill subject
    if (contactData.subject) {
      await this.subjectInput.fill(contactData.subject);
    }

    // Fill message
    if (contactData.message) {
      await this.messageTextarea.fill(contactData.message);
    }
  }

  /**
   * Upload file to contact form
   */
  async uploadFile(filePath) {
    await this.fileInput.setInputFiles(filePath);
  }

  /**
   * Submit contact form
   */
  async submitForm() {
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Verify form submission success
   */
  async verifyFormSubmissionSuccess() {
    // Handle alert if present
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
    
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Verify name field is visible
   */
  async verifyNameFieldVisible() {
    await expect(this.nameInput).toBeVisible();
  }

  /**
   * Verify email field is visible
   */
  async verifyEmailFieldVisible() {
    await expect(this.emailInput).toBeVisible();
  }

  /**
   * Verify subject field is visible
   */
  async verifySubjectFieldVisible() {
    await expect(this.subjectInput).toBeVisible();
  }

  /**
   * Verify message field is visible
   */
  async verifyMessageFieldVisible() {
    await expect(this.messageTextarea).toBeVisible();
  }

  /**
   * Verify feedback section exists
   */
  async verifyFeedbackSectionExists() {
    await expect(this.contactInfo).toBeVisible();
  }

  /**
   * Submit form with minimal data
   */
  async submitFormWithData(name, email, subject, message) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.subjectInput.fill(subject);
    await this.messageTextarea.fill(message);
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Verify form field is empty
   */
  async verifyFieldEmpty(fieldType) {
    let field;
    switch (fieldType) {
      case 'name':
        field = this.nameInput;
        break;
      case 'email':
        field = this.emailInput;
        break;
      case 'subject':
        field = this.subjectInput;
        break;
      case 'message':
        field = this.messageTextarea;
        break;
    }
    const value = await field.inputValue();
    expect(value).toBe('');
  }

  /**
   * Get error message text
   */
  async getErrorMessageText() {
    return await this.errorMessage.textContent();
  }

  /**
   * Get current page URL
   */
  async getCurrentURL() {
    return this.page.url();
  }
}

module.exports = { ContactPage };
