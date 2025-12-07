# Automation Exercise Test Plan

## Application Overview

Automation Exercise (https://www.automationexercise.com/) is a full-fledged e-commerce website designed for automation engineers to practice and improve their testing skills. The platform provides a realistic shopping experience with features including product browsing, user authentication (signup/login), shopping cart management, product filtering by category and brand, product details viewing, contact forms, and checkout functionality. The application serves as a practice environment for functional testing, user workflow testing, and API testing scenarios.

## Test Scenarios

### 1. Homepage Navigation and Display

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify homepage loads correctly with all key elements

**File:** `tests/homepage/homepage-load.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/
  2. Wait for the page to fully load
  3. Verify the logo is displayed
  4. Verify all main navigation menu items are visible: Home, Products, Cart, Signup/Login, Test Cases, API Testing, Video Tutorials, Contact us
  5. Verify the banner with 'AutomationExercise' heading is present
  6. Verify the banner text 'Full-Fledged practice website for Automation Engineers' is visible
  7. Verify featured products section is displayed with product cards
  8. Verify category section showing Women, Men, Kids categories is visible
  9. Verify Brands section with brand listings is present
  10. Verify footer with subscription area and copyright information is visible

**Expected Results:**
  - Page loads within acceptable time
  - Logo and all navigation items are clickable and properly rendered
  - Featured products, categories, and brands sections are properly displayed
  - Footer is visible at the bottom of the page

#### 1.2. Verify navigation menu links redirect to correct pages

**File:** `tests/homepage/menu-navigation.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/
  2. Click on 'Home' link
  3. Verify user is on the homepage
  4. Click on 'Products' link
  5. Verify user is redirected to /products page
  6. Verify Products page displays all products list
  7. Click on 'Cart' link
  8. Verify user is redirected to /view_cart page
  9. Click on 'Signup / Login' link
  10. Verify user is redirected to /login page with signup and login forms
  11. Click on 'Test Cases' link
  12. Verify user is redirected to test cases page
  13. Click on 'Contact us' link
  14. Verify user is redirected to /contact_us page with contact form

**Expected Results:**
  - Each navigation link correctly routes to its respective page
  - Page URLs match expected routes
  - Page titles and content match the navigation destination

#### 1.3. Verify homepage carousel functionality

**File:** `tests/homepage/carousel.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/
  2. Locate the image carousel in the banner
  3. Click on carousel next arrow button
  4. Verify carousel moves to next image
  5. Click on carousel previous arrow button
  6. Verify carousel moves to previous image
  7. Verify carousel images are displayed properly without overlapping

**Expected Results:**
  - Carousel transitions smoothly between images
  - Navigation arrows function correctly
  - Images display without distortion or overlap

### 2. Product Browsing and Filtering

**Seed:** `tests/seed.spec.ts`

#### 2.1. Browse all products with pagination

**File:** `tests/products/product-listing.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/products
  2. Verify page loads with 'All Products' heading
  3. Verify product list displays multiple product cards
  4. Verify each product card shows: product image, price, name, 'Add to cart' button, and 'View Product' link
  5. Verify product search box is present at the top
  6. Verify category filter section on left sidebar with Women, Men, Kids options
  7. Verify brands filter section on left sidebar
  8. Scroll down to see more products
  9. Verify products are paginated if more than visible on screen

**Expected Results:**
  - All products are displayed correctly
  - Each product has complete information and functional buttons
  - Page loads without errors
  - Pagination works as expected

#### 2.2. Filter products by category

**File:** `tests/products/category-filter.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/products
  2. Click on 'Women' category in the left sidebar
  3. Verify page updates to show only women's products
  4. Verify only women's clothing items are displayed
  5. Go back to products page
  6. Click on 'Men' category
  7. Verify page updates to show only men's products
  8. Go back to products page
  9. Click on 'Kids' category
  10. Verify page updates to show only kids' products
  11. Verify category results are filtered accurately

**Expected Results:**
  - Category filter correctly narrows product list
  - Only products matching selected category are shown
  - Filter can be changed multiple times without errors

#### 2.3. Filter products by brand

**File:** `tests/products/brand-filter.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/products
  2. Click on 'Polo' brand (showing 6 products)
  3. Verify page updates to show only Polo brand products
  4. Verify exactly 6 products are displayed
  5. Go back to products page
  6. Click on 'H&M' brand (showing 5 products)
  7. Verify page updates to show only H&M brand products
  8. Verify exactly 5 products are displayed
  9. Go back and try another brand like 'Madame'
  10. Verify brand filter works correctly

**Expected Results:**
  - Brand filter correctly narrows product list
  - Product count matches brand listing count
  - Only products from selected brand are shown

#### 2.4. Search for products

**File:** `tests/products/product-search.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/products
  2. Locate search box with placeholder 'Search Product'
  3. Type 'Top' in the search box
  4. Click the search button
  5. Verify search results show only products with 'Top' in name
  6. Go back to products page
  7. Search for 'Jeans'
  8. Verify search results show only jeans products
  9. Perform search with non-matching term like 'xyz'
  10. Verify no results message appears or empty results

**Expected Results:**
  - Search functionality works correctly
  - Results match search term
  - Empty search or non-matching terms handled gracefully

#### 2.5. View product details

**File:** `tests/products/product-details.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/products
  2. Click 'View Product' button on first product (Blue Top - Rs. 500)
  3. Verify product details page loads
  4. Verify product name is displayed
  5. Verify product price is shown
  6. Verify product description is visible
  7. Verify product availability status is shown
  8. Verify product category information is displayed
  9. Verify quantity selector is present
  10. Verify 'Add to cart' button is present
  11. Go back and view details of another product

**Expected Results:**
  - Product details page loads correctly
  - All product information is clearly displayed
  - Product page is unique for each product
  - Navigation and buttons are functional

### 3. User Authentication

**Seed:** `tests/seed.spec.ts`

#### 3.1. Sign up with new account

**File:** `tests/auth/signup.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/login
  2. Verify 'New User Signup!' section is displayed
  3. Enter a unique name in the signup Name field
  4. Enter a unique email address in the signup Email field
  5. Click 'Signup' button
  6. Verify signup is successful or account creation form appears
  7. If account details form appears, fill in required fields (first name, last name, password, address, etc.)
  8. Complete the signup process
  9. Verify success message or redirection to account page
  10. Verify user can log in with the created account

**Expected Results:**
  - Signup form accepts input correctly
  - Email must be unique (error if already exists)
  - All required fields are validated
  - Successful signup creates an account
  - User can login with new credentials

#### 3.2. Sign up with invalid data

**File:** `tests/auth/signup-validation.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/login
  2. Try to signup with an email that doesn't follow email format
  3. Verify error message appears for invalid email
  4. Try to signup with an already registered email
  5. Verify error message for duplicate email
  6. Try signup with empty name field
  7. Verify error message for empty name
  8. Try signup with empty email field
  9. Verify error message for empty email

**Expected Results:**
  - All validation errors are displayed appropriately
  - Form prevents submission with invalid data
  - Error messages are clear and helpful

#### 3.3. Login with valid credentials

**File:** `tests/auth/login.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/login
  2. Verify 'Login to your account' section is displayed
  3. Enter valid registered email in login Email field
  4. Enter correct password in login Password field
  5. Click 'Login' button
  6. Verify login is successful
  7. Verify user is redirected to account dashboard or home page
  8. Verify logged-in user indicator is shown (e.g., logout button, username display)

**Expected Results:**
  - Login form accepts input correctly
  - Successful login authenticates user
  - User session is established
  - Logged-in state is reflected in UI

#### 3.4. Login with invalid credentials

**File:** `tests/auth/login-validation.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/login
  2. Enter invalid email address
  3. Enter any password
  4. Click 'Login' button
  5. Verify error message appears
  6. Clear fields
  7. Enter valid email with incorrect password
  8. Click 'Login' button
  9. Verify error message for incorrect password
  10. Try login with empty fields
  11. Verify error messages for empty fields

**Expected Results:**
  - Invalid credentials show appropriate error messages
  - User is not logged in
  - Form provides clear feedback for errors
  - Session is not established with invalid credentials

#### 3.5. Logout from account

**File:** `tests/auth/logout.spec.ts`

**Steps:**
  1. Login with valid credentials
  2. Verify user is logged in
  3. Locate logout button in the navigation or account menu
  4. Click logout button
  5. Verify user is logged out
  6. Verify redirect to login page or home page
  7. Verify login/signup link is available again
  8. Try to access protected pages directly
  9. Verify user is redirected to login page for protected pages

**Expected Results:**
  - Logout button is accessible
  - Logout successfully ends user session
  - User is returned to public pages
  - Protected pages require login after logout

### 4. Shopping Cart Functionality

**Seed:** `tests/seed.spec.ts`

#### 4.1. Add single product to cart

**File:** `tests/cart/add-to-cart.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/products
  2. Click 'Add to cart' button on first product
  3. Verify product is added to cart (success message or cart count increases)
  4. Verify cart count or indicator is updated
  5. Navigate to cart page
  6. Verify the added product appears in cart
  7. Verify product price and details match

**Expected Results:**
  - Product is successfully added to cart
  - Cart count is updated
  - Product appears in cart with correct details
  - No errors occur during adding to cart

#### 4.2. Add multiple products to cart

**File:** `tests/cart/add-multiple-products.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/products
  2. Add first product (Blue Top) to cart
  3. Add second product (Men Tshirt) to cart
  4. Add third product (Sleeveless Dress) to cart
  5. Navigate to cart page
  6. Verify all three products are in the cart
  7. Verify each product shows correct price and quantity
  8. Verify total price is calculated correctly

**Expected Results:**
  - Multiple products can be added to cart
  - All products appear in cart list
  - Cart total is calculated correctly
  - No products are missing from cart

#### 4.3. View empty cart

**File:** `tests/cart/empty-cart.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/view_cart without adding any products
  2. Verify cart page displays empty state message
  3. Verify message says 'Cart is empty! Click here to buy products.'
  4. Click the 'here' link in the empty message
  5. Verify user is redirected to products page
  6. Add a product to cart
  7. Navigate back to cart
  8. Verify cart now shows the product

**Expected Results:**
  - Empty cart displays appropriate message
  - Empty cart message has working link to products
  - Cart updates after adding products

#### 4.4. Remove product from cart

**File:** `tests/cart/remove-from-cart.spec.ts`

**Steps:**
  1. Add product to cart
  2. Navigate to cart page
  3. Verify product is displayed in cart
  4. Click remove button for the product
  5. Verify product is removed from cart
  6. Verify cart updates or shows empty state if last product removed
  7. Add multiple products and remove one
  8. Verify other products remain in cart

**Expected Results:**
  - Remove button is present for each cart item
  - Product is successfully removed from cart
  - Cart total is recalculated after removal
  - Other items remain unaffected

#### 4.5. Update product quantity in cart

**File:** `tests/cart/update-quantity.spec.ts`

**Steps:**
  1. Add product to cart
  2. Navigate to cart page
  3. Locate quantity field for the product
  4. Change quantity from 1 to 2
  5. Verify quantity is updated
  6. Verify total price is recalculated (price × new quantity)
  7. Change quantity to higher number (e.g., 5)
  8. Verify cart updates correctly
  9. Change quantity back to 1
  10. Verify cart updates correctly

**Expected Results:**
  - Quantity can be updated for cart items
  - Total price updates based on new quantity
  - Cart displays updated quantities correctly
  - No errors occur during quantity updates

### 5. Contact Us Form

**Seed:** `tests/seed.spec.ts`

#### 5.1. Submit contact form with valid data

**File:** `tests/contact/submit-form.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/contact_us
  2. Verify contact form is displayed
  3. Fill in 'Name' field with valid name
  4. Fill in 'Email' field with valid email
  5. Fill in 'Subject' field with a subject
  6. Fill in 'Your Message Here' field with message text
  7. Click 'Choose File' button and select a file (optional)
  8. Click 'Submit' button
  9. Verify success message appears
  10. Verify form is reset or user is redirected

**Expected Results:**
  - Contact form accepts valid input
  - Submission is successful
  - Success message is displayed
  - Form can be submitted without file attachment

#### 5.2. Submit contact form with invalid data

**File:** `tests/contact/form-validation.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/contact_us
  2. Try submitting with empty Name field
  3. Verify error message or validation
  4. Fill Name, leave Email empty
  5. Try to submit
  6. Verify error message for empty email
  7. Fill Name and Email, leave Subject empty
  8. Try to submit
  9. Verify error for empty subject
  10. Fill only Name field and try to submit
  11. Verify validation prevents submission with incomplete form

**Expected Results:**
  - All required fields are validated
  - Error messages appear for invalid/empty fields
  - Form prevents submission with invalid data
  - Validation messages are clear

#### 5.3. Contact form email validation

**File:** `tests/contact/email-validation.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/contact_us
  2. Fill Name with valid name
  3. Enter invalid email format (e.g., 'notanemail')
  4. Fill Subject and Message
  5. Try to submit
  6. Verify email validation error
  7. Enter email without @ symbol
  8. Try to submit
  9. Verify validation error
  10. Enter valid email format
  11. Fill other fields and submit
  12. Verify submission is successful

**Expected Results:**
  - Invalid email formats are rejected
  - Error message indicates email format issue
  - Valid email format is accepted
  - Form validates email before submission

#### 5.4. View contact feedback information

**File:** `tests/contact/feedback-info.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/contact_us
  2. Verify contact form section is displayed
  3. Verify 'Get In Touch' heading is present
  4. Verify 'Feedback For Us' section is displayed
  5. Verify feedback section contains explanation text
  6. Verify feedback email link 'feedback@automationexercise.com' is present
  7. Verify feedback email link is clickable
  8. Verify additional feedback information and suggestions text

**Expected Results:**
  - Contact form is present and labeled
  - Feedback section is clearly visible
  - Contact email is provided and correct
  - All information sections are properly displayed

### 6. Homepage Featured Products

**Seed:** `tests/seed.spec.ts`

#### 6.1. View featured products section

**File:** `tests/featured/featured-products.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/
  2. Verify 'Features Items' section is present
  3. Verify featured products are displayed in a grid
  4. Verify each featured product shows: image, price, name, 'Add to cart' button
  5. Verify featured products carousel/slider is visible if applicable
  6. Verify left and right navigation arrows for featured products if applicable
  7. Verify featured section is distinct from recommended section

**Expected Results:**
  - Featured products section loads correctly
  - All featured products are visible with complete information
  - Featured products have functional 'Add to cart' buttons
  - Featured section displays properly on page

#### 6.2. View recommended products section

**File:** `tests/featured/recommended-products.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/
  2. Scroll down to find 'Recommended Items' section
  3. Verify recommended products section is displayed
  4. Verify recommended products are shown in carousel format
  5. Verify each product shows image, price, name, 'Add to cart' button
  6. Verify carousel navigation arrows are present
  7. Click right arrow on carousel
  8. Verify carousel shows next set of products
  9. Click left arrow
  10. Verify carousel shows previous products

**Expected Results:**
  - Recommended section is visible on homepage
  - Products display correctly in carousel
  - Carousel navigation works smoothly
  - All product information is visible

#### 6.3. Add featured product to cart from homepage

**File:** `tests/featured/add-featured-to-cart.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/
  2. Locate a featured product (e.g., first featured product)
  3. Click 'Add to cart' button on featured product
  4. Verify success message or cart count updates
  5. Navigate to cart page
  6. Verify the featured product appears in cart
  7. Verify product details are correct (name, price)
  8. Go back to homepage
  9. Add another featured product to cart
  10. Verify both products are in cart

**Expected Results:**
  - Featured products can be added to cart directly
  - Add to cart buttons work on featured products
  - Products appear correctly in cart
  - Multiple featured products can be added

#### 6.4. View product details from featured section

**File:** `tests/featured/featured-product-details.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/
  2. Locate featured products section
  3. Click 'View Product' link on a featured product
  4. Verify product details page loads
  5. Verify product name, price, and description match featured display
  6. Verify product details page has more information than featured view
  7. Verify quantity selector and other details are on product page

**Expected Results:**
  - Featured products have 'View Product' link
  - Link navigates to detailed product page
  - Product details are consistent between pages
  - Detailed view provides more information

### 7. Category and Brand Filtering

**Seed:** `tests/seed.spec.ts`

#### 7.1. Browse Women category from homepage

**File:** `tests/categories/women-category.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/
  2. Locate Category section on left sidebar
  3. Click on 'Women' category
  4. Verify page filters to show only women's products
  5. Verify page heading reflects women's category
  6. Verify all displayed products are women's items
  7. Verify category is highlighted/active in sidebar

**Expected Results:**
  - Women category link works correctly
  - Products are filtered to show only women's items
  - Page updates without full reload
  - Category selection is visually indicated

#### 7.2. Browse Men category from homepage

**File:** `tests/categories/men-category.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/
  2. Click on 'Men' category in sidebar
  3. Verify page filters to show only men's products
  4. Verify all displayed products are men's items
  5. Count visible men's products
  6. Compare with category label count if shown

**Expected Results:**
  - Men category link works correctly
  - Products are filtered to men's items only
  - Filter is applied successfully

#### 7.3. View all brands available

**File:** `tests/categories/brands-listing.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/
  2. Locate Brands section in left sidebar
  3. Verify all brands are listed with product counts: Polo (6), H&M (5), Madame (5), etc.
  4. Click on Polo brand (6 products)
  5. Verify page filters to Polo products only
  6. Verify 6 Polo products are displayed
  7. Go back to home
  8. Click on another brand like Biba (5 products)
  9. Verify page shows exactly 5 Biba products

**Expected Results:**
  - All brands are listed with correct counts
  - Brand filtering works correctly
  - Product count matches brand listing
  - Multiple brands can be browsed

### 8. Subscription and Footer

**Seed:** `tests/seed.spec.ts`

#### 8.1. Subscribe to newsletter

**File:** `tests/footer/newsletter-subscription.spec.ts`

**Steps:**
  1. Navigate to any page on https://www.automationexercise.com/
  2. Scroll to footer
  3. Locate Subscription section with email input
  4. Verify subscription form is present
  5. Enter valid email address in subscription field
  6. Click subscribe button (usually arrow or submit)
  7. Verify success message appears
  8. Verify email field is cleared after subscription

**Expected Results:**
  - Subscription form is accessible in footer
  - Valid email is accepted
  - Subscription is processed successfully
  - Success feedback is provided

#### 8.2. Verify footer content and links

**File:** `tests/footer/footer-verification.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/
  2. Scroll to footer
  3. Verify subscription section with email textbox is present
  4. Verify footer text 'Get the most recent updates from our site and be updated your self...' appears
  5. Verify copyright notice 'Copyright © 2021 All rights reserved' is displayed
  6. Verify footer appears on all pages (homepage, products, contact, etc.)

**Expected Results:**
  - Footer displays on all pages consistently
  - All footer content is visible and properly formatted
  - Copyright information is clearly shown
  - Subscription section is functional

#### 8.3. Test invalid email subscription

**File:** `tests/footer/subscription-validation.spec.ts`

**Steps:**
  1. Navigate to https://www.automationexercise.com/
  2. Scroll to footer subscription section
  3. Try to subscribe with invalid email format (e.g., 'notanemail')
  4. Attempt to submit
  5. Verify validation error or rejection
  6. Clear field and enter valid email
  7. Submit subscription
  8. Verify successful subscription

**Expected Results:**
  - Invalid emails are rejected or show error
  - Valid emails are accepted for subscription
  - Form provides validation feedback
