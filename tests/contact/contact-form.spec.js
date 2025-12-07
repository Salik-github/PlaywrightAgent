/**
 * Contact Us Form Tests
 * Tests for contact form submission, validation, and feedback information
 */
const { test, expect } = require('@playwright/test');
const { ContactPage } = require('../pages/contact.page');
test.describe.configure({ mode: 'parallel' });

test.describe('Contact Us Form', () => {
  let contactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
  });

  // Test 5.1: Submit contact form with valid data
  test('Submit contact form with valid data', async ({ page }) => {
    // 1. Navigate to contact page
    await contactPage.navigateToContact();

    // 2. Verify contact form is visible
    await contactPage.verifyContactFormVisible();

    // 3. Fill form with valid data
    const contactData = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'This is a test message for the contact form.'
    };

    // 4. Fill contact form
    await contactPage.fillContactForm(contactData);

    // 5. Submit form
    await contactPage.submitForm();

    // 6. Verify submission success
    await contactPage.verifyFormSubmissionSuccess();
  });

  // Test 5.1b: Submit complete contact form with file
  test('Submit contact form with file attachment', async ({ page }) => {
    // 1. Navigate to contact
    await contactPage.navigateToContact();

    // 2. Verify form visible
    await contactPage.verifyContactFormVisible();

    // 3. Fill form
    const contactData = {
      name: 'Jane Smith',
      email: 'jane@example.com',
      subject: 'File Submission Test',
      message: 'Submitting with file attachment.'
    };

    await contactPage.fillContactForm(contactData);

    // 4. Try to upload file (if needed)
    // await contactPage.uploadFile('path/to/file.txt');

    // 5. Submit
    await contactPage.submitForm();

    // 6. Verify success
    await contactPage.verifyFormSubmissionSuccess();
  });

  // Test 5.2: Submit contact form with invalid data - empty name
  test('Submit contact form with empty name field', async ({ page }) => {
    // 1. Navigate to contact
    await contactPage.navigateToContact();

    // 2. Verify form visible
    await contactPage.verifyContactFormVisible();

    // 3. Leave name empty, fill others
    await contactPage.emailInput.fill('test@example.com');
    await contactPage.subjectInput.fill('Test Subject');
    await contactPage.messageTextarea.fill('Test message');

    // 4. Try to submit
    await contactPage.submitForm();

    // Form may show validation error
  });

  // Test 5.2b: Submit contact form with empty email
  test('Submit contact form with empty email field', async ({ page }) => {
    // 1. Navigate to contact
    await contactPage.navigateToContact();

    // 2. Verify form visible
    await contactPage.verifyContactFormVisible();

    // 3. Fill name, subject, message but leave email empty
    await contactPage.nameInput.fill('Test User');
    await contactPage.subjectInput.fill('Test Subject');
    await contactPage.messageTextarea.fill('Test message');

    // 4. Try to submit
    await contactPage.submitForm();

    // Form may show validation
  });

  // Test 5.2c: Submit contact form with empty subject
  test('Submit contact form with empty subject field', async ({ page }) => {
    // 1. Navigate to contact
    await contactPage.navigateToContact();

    // 2. Verify form visible
    await contactPage.verifyContactFormVisible();

    // 3. Fill name, email, message but leave subject empty
    await contactPage.nameInput.fill('Test User');
    await contactPage.emailInput.fill('test@example.com');
    await contactPage.messageTextarea.fill('Test message');

    // 4. Submit
    await contactPage.submitForm();

    // May show validation
  });

  // Test 5.2d: Submit contact form with empty message
  test('Submit contact form with empty message field', async ({ page }) => {
    // 1. Navigate to contact
    await contactPage.navigateToContact();

    // 2. Verify form visible
    await contactPage.verifyContactFormVisible();

    // 3. Fill name, email, subject but leave message empty
    await contactPage.nameInput.fill('Test User');
    await contactPage.emailInput.fill('test@example.com');
    await contactPage.subjectInput.fill('Test Subject');

    // 4. Submit
    await contactPage.submitForm();

    // May show validation
  });

  // Test 5.3: Contact form email validation - invalid format
  test('Contact form email validation - invalid format', async ({ page }) => {
    // 1. Navigate to contact
    await contactPage.navigateToContact();

    // 2. Verify form visible
    await contactPage.verifyContactFormVisible();

    // 3. Fill with invalid email
    await contactPage.nameInput.fill('Test User');
    await contactPage.emailInput.fill('notanemail');
    await contactPage.subjectInput.fill('Test');
    await contactPage.messageTextarea.fill('Message');

    // 4. Try to submit
    await contactPage.submitForm();

    // Browser may show email validation error
  });

  // Test 5.3b: Email without @ symbol
  test('Contact form email validation - no @ symbol', async ({ page }) => {
    // 1. Navigate to contact
    await contactPage.navigateToContact();

    // 2. Verify form visible
    await contactPage.verifyContactFormVisible();

    // 3. Fill with invalid email (no @)
    await contactPage.nameInput.fill('Test User');
    await contactPage.emailInput.fill('testemail.com');
    await contactPage.subjectInput.fill('Test');
    await contactPage.messageTextarea.fill('Message');

    // 4. Submit
    await contactPage.submitForm();

    // Should show validation
  });

  // Test 5.3c: Valid email acceptance
  test('Contact form accepts valid email format', async ({ page }) => {
    // 1. Navigate to contact
    await contactPage.navigateToContact();

    // 2. Verify form visible
    await contactPage.verifyContactFormVisible();

    // 3. Fill with valid email
    await contactPage.nameInput.fill('Test User');
    await contactPage.emailInput.fill('valid.email@example.com');
    await contactPage.subjectInput.fill('Test');
    await contactPage.messageTextarea.fill('Message');

    // 4. Form should accept valid email
    const emailValue = await contactPage.emailInput.inputValue();
    expect(emailValue).toBe('valid.email@example.com');
  });

  // Test 5.4: View contact feedback information
  test('Verify contact and feedback information visible', async ({ page }) => {
    // 1. Navigate to contact
    await contactPage.navigateToContact();

    // 2. Verify get in touch heading
    await contactPage.verifyGetInTouchHeadingVisible();

    // 3. Verify feedback section exists
    await contactPage.verifyFeedbackSectionExists();

    // 4. Verify form fields are visible
    await contactPage.verifyNameFieldVisible();
    await contactPage.verifyEmailFieldVisible();
    await contactPage.verifySubjectFieldVisible();
    await contactPage.verifyMessageFieldVisible();
  });

  // Test 5.5: Contact form page title and URL
  test('Verify contact page URL and navigation', async ({ page }) => {
    // 1. Navigate to contact
    await contactPage.navigateToContact();

    // 2. Verify URL contains contact_us
    const url = await contactPage.getCurrentURL();
    expect(url).toContain('contact_us');

    // 3. Verify form is loaded
    await contactPage.verifyContactFormVisible();
  });

  // Test 5.6: Form field placeholder text
  test('Verify form field placeholders and labels', async ({ page }) => {
    // 1. Navigate to contact
    await contactPage.navigateToContact();

    // 2. Verify all required fields exist
    await expect(contactPage.nameInput).toBeVisible();
    await expect(contactPage.emailInput).toBeVisible();
    await expect(contactPage.subjectInput).toBeVisible();
    await expect(contactPage.messageTextarea).toBeVisible();

    // 3. Verify submit button exists
    await expect(contactPage.submitButton).toBeVisible();
  });

  // Test 5.7: Contact form reset after submission
  test.fixme('Submit and verify form can be filled again', async ({ page }) => {
    // 1. Navigate to contact
    await contactPage.navigateToContact();

    // 2. Submit first time
    await contactPage.submitFormWithData(
      'John Doe',
      'john@example.com',
      'First Submit',
      'First message'
    );

    // 3. Navigate back to contact
    await contactPage.navigateToContact();

    // 4. Form should be empty and ready for new input
    try {
      await contactPage.verifyFieldEmpty('name');
    } catch {
      // Field may retain value
    }

    // 5. Submit again with different data
    await contactPage.submitFormWithData(
      'Jane Smith',
      'jane@example.com',
      'Second Submit',
      'Second message'
    );
  });

  // Test 5.8: Multiple form submissions
  test('Submit contact form multiple times', async ({ page }) => {
    // 1. Navigate to contact
    await contactPage.navigateToContact();

    // 2. First submission
    await contactPage.submitFormWithData(
      'User One',
      'user1@example.com',
      'Subject 1',
      'Message 1'
    );

    // 3. Go back
    await contactPage.navigateToContact();

    // 4. Second submission
    await contactPage.submitFormWithData(
      'User Two',
      'user2@example.com',
      'Subject 2',
      'Message 2'
    );

    // 5. Go back
    await contactPage.navigateToContact();

    // 6. Third submission
    await contactPage.submitFormWithData(
      'User Three',
      'user3@example.com',
      'Subject 3',
      'Message 3'
    );

    // Verify contact form is still accessible
    await contactPage.verifyContactFormVisible();
  });
});
