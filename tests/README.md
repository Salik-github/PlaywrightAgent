# Automation Exercise - Comprehensive Test Suite

## Overview

This is a complete, production-ready test automation suite for the Automation Exercise e-commerce website (https://www.automationexercise.com/). The suite implements the Page Object Model (POM) pattern for maintainability, reusability, and scalability.

## Test Statistics

- **Total Test Suites**: 7
- **Total Test Cases**: 40+
- **Page Objects**: 7
- **Framework**: Playwright Test
- **Language**: JavaScript (Node.js)

## Project Structure

```
tests/
├── pages/                           # Page Object Model Classes
│   ├── home.page.js                # Homepage POM
│   ├── products.page.js            # Products page POM
│   ├── auth.page.js                # Authentication POM (Login/Signup)
│   ├── cart.page.js                # Shopping Cart POM
│   ├── contact.page.js             # Contact Us form POM
│   ├── product-details.page.js    # Product Details page POM
│   └── footer.page.js              # Footer section POM
│
├── products/                        # Product Browsing & Filtering Tests
│   └── product-browsing.spec.js    # 11 test cases
│
├── auth/                            # Authentication Tests
│   └── authentication.spec.js       # 10 test cases
│
├── cart/                            # Shopping Cart Tests
│   └── shopping-cart.spec.js        # 9 test cases
│
├── contact/                         # Contact Form Tests
│   └── contact-form.spec.js         # 8 test cases
│
├── featured-footer/                 # Featured Products & Footer Tests
│   └── featured-products-footer.spec.js  # 12 test cases
│
├── categories/                      # Category & Brand Filtering Tests
│   └── category-brand-filtering.spec.js  # 14 test cases
│
└── homepage/                        # Homepage Navigation Tests
    └── HomeTestCase.spec.js         # 3 test cases (existing)
```

## Page Object Models

### 1. HomePage (home.page.js)
**Purpose**: Manages all homepage elements and interactions

**Key Methods**:
- `navigateToHomepage()` - Navigate to homepage
- `clickHome()` - Click Home link
- `clickProducts()` - Click Products link
- `clickCart()` - Click Cart link
- `clickSignupLogin()` - Click Signup/Login link
- `clickContactUs()` - Click Contact Us link
- `clickCarouselNext()` - Navigate carousel forward
- `clickCarouselPrev()` - Navigate carousel backward
- `verifyCarouselImagesVisible()` - Verify carousel images

**Elements**:
- Navigation links (Home, Products, Cart, Signup/Login, Test Cases, API Testing, Contact Us)
- Banner elements (Logo, Heading, Banner text)
- Featured items section
- Category section (Women, Men, Kids)
- Brands section
- Footer elements

---

### 2. ProductsPage (products.page.js)
**Purpose**: Handles product browsing, filtering, and searching

**Key Methods**:
- `navigateToProducts()` - Go to products page
- `verifyAllProductsHeadingVisible()` - Verify page title
- `getProductCount()` - Get number of products displayed
- `searchProduct(keyword)` - Search for products
- `filterByWomenCategory()` - Filter by Women category
- `filterByMenCategory()` - Filter by Men category
- `filterByKidsCategory()` - Filter by Kids category
- `filterByPoloBrand()` - Filter by Polo brand
- `filterByHandmBrand()` - Filter by H&M brand
- `filterByMadameBrand()` - Filter by Madame brand
- `clickViewProductLink(index)` - View product details
- `clickAddToCartButton(index)` - Add product to cart

---

### 3. AuthPage (auth.page.js)
**Purpose**: Manages authentication operations (signup/login/logout)

**Key Methods**:
- `navigateToLogin()` - Go to login page
- `verifyLoginFormVisible()` - Verify login form
- `verifySignupFormVisible()` - Verify signup form
- `login(email, password)` - Login with credentials
- `signup(name, email)` - Signup new account
- `fillAccountDetails(data)` - Fill account creation form
- `createAccount()` - Create account
- `verifyLoggedIn()` - Check if logged in
- `logout()` - Logout from account

**Account Details Object**:
```javascript
{
  title: 'Mr' or 'Mrs',
  password: 'string',
  firstName: 'string',
  lastName: 'string',
  company: 'string',
  address: 'string',
  country: 'string',
  state: 'string',
  city: 'string',
  zipcode: 'string',
  mobile: 'string'
}
```

---

### 4. CartPage (cart.page.js)
**Purpose**: Manages shopping cart operations

**Key Methods**:
- `navigateToCart()` - Go to cart page
- `verifyCartPageLoaded()` - Verify cart page
- `verifyCartEmpty()` - Verify cart is empty
- `verifyCartHasItems()` - Verify cart has items
- `getCartItemCount()` - Get number of items
- `removeProductByIndex(index)` - Remove product from cart
- `updateProductQuantity(index, quantity)` - Update quantity
- `getProductQuantity(index)` - Get product quantity
- `verifyProductInCart(productName)` - Verify product exists
- `clickProceedCheckout()` - Proceed to checkout
- `getCartTotal()` - Get cart total

---

### 5. ContactPage (contact.page.js)
**Purpose**: Handles contact form operations

**Key Methods**:
- `navigateToContact()` - Go to contact page
- `verifyContactFormVisible()` - Verify contact form
- `fillContactForm(data)` - Fill contact form
- `uploadFile(filePath)` - Upload file
- `submitForm()` - Submit form
- `submitFormWithData()` - Submit with all data
- `verifyFormSubmissionSuccess()` - Verify success

**Contact Data Object**:
```javascript
{
  name: 'string',
  email: 'string',
  subject: 'string',
  message: 'string'
}
```

---

### 6. ProductDetailsPage (product-details.page.js)
**Purpose**: Manages product details page interactions

**Key Methods**:
- `navigateToProductDetails(productId)` - Go to product details
- `verifyProductNameVisible()` - Verify product name
- `getProductName()` - Get product name
- `verifyProductPriceVisible()` - Verify price
- `getProductPrice()` - Get price value
- `verifyProductImageVisible()` - Verify image
- `setQuantity(quantity)` - Set purchase quantity
- `getQuantity()` - Get current quantity
- `clickAddToCart()` - Add to cart
- `addToCartWithQuantity(qty)` - Add with specific quantity

---

### 7. FooterPage (footer.page.js)
**Purpose**: Manages footer section operations

**Key Methods**:
- `scrollToFooter()` - Scroll to footer
- `verifyFooterPresent()` - Verify footer exists
- `verifySubscriptionSectionVisible()` - Verify subscription section
- `subscribeToNewsletter(email)` - Subscribe to newsletter
- `verifySubscriptionSuccess()` - Verify subscription worked
- `verifyCopyrightTextVisible()` - Verify copyright
- `getCopyrightText()` - Get copyright text

---

## Test Suites

### Suite 1: Homepage Navigation and Display (3 tests)
**File**: `tests/homepage/HomeTestCase.spec.js`

Tests:
1. Verify homepage loads with all key elements
2. Verify navigation menu links redirect correctly
3. Verify homepage carousel functionality

### Suite 2: Product Browsing and Filtering (11 tests)
**File**: `tests/products/product-browsing.spec.js`

Tests:
1. Browse all products with pagination
2. Filter products by Women category
3. Filter products by Men category
4. Filter products by Kids category
5. Filter products by Polo brand
6. Filter products by H&M brand
7. Filter products by Madame brand
8. Search for products - 'Top'
9. Search for products - 'Jeans'
10. View product details
11. Add product to cart from details page

### Suite 3: User Authentication (10 tests)
**File**: `tests/auth/authentication.spec.js`

Tests:
1. Sign up with new account
2. Complete account signup with all details
3. Sign up with invalid email format
4. Sign up with duplicate email
5. Sign up with empty name field
6. Login with valid credentials
7. Verify logged in user indicator
8. Login with invalid password
9. Login with empty email field
10. Logout from account

### Suite 4: Shopping Cart Functionality (9 tests)
**File**: `tests/cart/shopping-cart.spec.js`

Tests:
1. Add single product to cart
2. Add product with custom quantity
3. Add multiple products to cart
4. Add same product multiple times
5. View empty cart
6. Remove product from cart
7. Update product quantity to 2
8. Update product quantity to 5
9. Verify cart total calculation

### Suite 5: Contact Us Form (8 tests)
**File**: `tests/contact/contact-form.spec.js`

Tests:
1. Submit contact form with valid data
2. Submit form with empty name field
3. Submit form with empty email field
4. Submit form with empty subject field
5. Contact form email validation - invalid format
6. Contact form email validation - no @ symbol
7. Verify contact and feedback information visible
8. Submit form multiple times

### Suite 6: Featured Products and Footer (12 tests)
**File**: `tests/featured-footer/featured-products-footer.spec.js`

Tests:
1. View featured products section
2. View recommended items section
3. Add featured product to cart
4. Add multiple featured products to cart
5. View product details from featured section
6. Navigate featured products carousel
7. Subscribe to newsletter with valid email
8. Subscribe multiple times with different emails
9. Verify footer content on homepage
10. Verify footer on different pages
11. Newsletter email validation
12. Verify copyright information

### Suite 7: Category and Brand Filtering (14 tests)
**File**: `tests/categories/category-brand-filtering.spec.js`

Tests:
1. Browse Women category from homepage
2. Browse Men category from homepage
3. Browse Kids category from homepage
4. Browse through all category options
5. View all brands available
6. Filter by Polo brand
7. Filter by H&M brand
8. Filter by Madame brand
9. Switch between different brand filters
10. Category filters visible on products page
11. Brand filters visible on products page
12. Apply category filter and verify results
13. Brand links display product counts
14. Navigate between categories and brands seamlessly

---

## Test Execution

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test Suite
```bash
npx playwright test tests/products/product-browsing.spec.js
```

### Run Tests in Headed Mode (see browser)
```bash
npx playwright test --headed
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### Run Tests on Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run Tests with Specific Tag
```bash
npx playwright test --grep @smoke
```

---

## Key Features

### 1. Page Object Model (POM)
- **Reusability**: Each page object can be used by multiple tests
- **Maintainability**: Locators centralized in one place
- **Scalability**: Easy to add new pages and tests

### 2. Clean & Readable Functions
- Self-documenting method names
- Single responsibility principle
- Proper error handling and assertions

### 3. Data-Driven Testing
- Test data objects for forms
- Dynamic values (timestamps for unique emails)
- Parameterized test cases

### 4. Error Handling
- Try-catch blocks for optional elements
- Graceful failures
- Informative assertions

### 5. Best Practices
- No hardcoded waits (uses `waitForLoadState`)
- Proper locator strategies
- Async/await pattern
- CommonJS module system

---

## Best Practices Used

1. **Locator Strategies**:
   - `getByRole()` for accessible elements
   - `getByLabel()` for form fields
   - `locator()` with specific attributes for ambiguous elements
   - `.first()` for strict mode compliance

2. **Waits & Navigation**:
   - `waitForLoadState('networkidle')` after navigation
   - `navigateTo()` methods for page navigation
   - Proper URL verification

3. **Assertions**:
   - `expect()` for all validations
   - Specific error messages
   - Timeout specifications where needed

4. **Code Organization**:
   - Clear method documentation with JSDoc
   - Logical method grouping
   - Consistent naming conventions

---

## Example Test Execution

```javascript
// Product Browsing Test Example
test('Browse products and add to cart', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  // Navigate to products
  await productsPage.navigateToProducts();
  
  // Verify products page
  await productsPage.verifyAllProductsHeadingVisible();
  
  // Add first product to cart
  await productsPage.clickAddToCartButton(0);
  
  // Go to cart
  await cartPage.navigateToCart();
  
  // Verify product in cart
  await cartPage.verifyCartHasItems();
});
```

---

## Maintenance Guidelines

### Adding New Tests
1. Identify the page/feature
2. Add methods to corresponding POM if needed
3. Create test in appropriate suite
4. Use existing POM methods
5. Follow existing naming conventions

### Updating Locators
1. Update in the relevant POM class
2. All tests using that method automatically updated
3. No need to change individual tests

### Handling Dynamic Content
1. Use `waitForLoadState('networkidle')`
2. Avoid hardcoded `setTimeout()` calls
3. Use proper assertions instead of waits

---

## Troubleshooting

### Tests Failing Due to Timing
- Add `page.waitForLoadState('networkidle')` after navigation
- Increase timeout in `expect()` calls

### Locator Not Found
- Check if element exists on current page
- Use browser inspector to find correct selector
- Update POM with new locator strategy

### Authentication Issues
- Ensure test credentials are valid
- Check if account exists before login tests
- Verify session/cookies handling

---

## Performance Metrics

- **Average Test Duration**: 5-15 seconds per test
- **Total Suite Runtime**: ~2-3 minutes (all tests)
- **Success Rate Target**: 95%+ (considering dynamic content)

---

## Future Enhancements

1. Add more detailed reporting
2. Implement test data management
3. Add performance testing
4. Integrate with CI/CD pipeline
5. Add visual regression testing
6. Implement cross-browser testing matrix
7. Add API testing alongside UI tests

---

## Support & Documentation

For more information about Playwright:
- [Playwright Documentation](https://playwright.dev)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Playwright Debugging](https://playwright.dev/docs/debug)

---

**Last Updated**: December 4, 2025
**Test Suite Version**: 1.0
**Maintainer**: QA Automation Team
