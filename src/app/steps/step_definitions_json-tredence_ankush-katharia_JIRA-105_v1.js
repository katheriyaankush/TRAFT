Here are reusable and well-structured step definition functions in JavaScript for the provided BDD scenarios focused on the mobile login feature.


const { Given, When, Then } = require('cucumber');
const assert = require('assert');

// Helper function to simulate user navigation
const navigateToPage = (page) => {
    // Implement page navigation logic here
};

// Helper function to simulate logging in
const login = (username, password) => {
    // Implement login logic here
};

// Helper function to check for a specific message or redirection
const checkForMessage = (expectedMessage) => {
    // Implement message checking logic here
};

// Helper function to simulate filling fields
const fillFields = (username, password) => {
    // Implement field filling logic here
};

// Helper function to check if fields have the correct placeholder values
const checkFieldValues = (expectedUsername, expectedPassword) => {
    // Implement field value checking logic here
};

// Helper function to simulate clicking the login button
const clickLoginButton = () => {
    // Implement login button click logic here
};

Given('the user is on the mobile login page', function () {
    navigateToPage('mobile login');
});

When('the user enters a valid username and password', function () {
    fillFields('validUsername', 'validPassword'); // replace with actual credentials
});

When('the user enters an invalid username or password', function () {
    fillFields('invalidUsername', 'invalidPassword'); // replace with actual credentials
});

When('the user leaves the username and password fields empty', function () {
    fillFields('', '');
});

When('the user clicks on the login button', function () {
    clickLoginButton();
});

Then('the user should be redirected to the mobile dashboard', function () {
    checkForMessage('Redirected to dashboard'); // replace with actual redirection check
});

Then('the user should see a welcome message', function () {
    checkForMessage('Welcome!'); // replace with actual welcome message
});

Then('the user should see an error message indicating {string}', function (errorMessage) {
    checkForMessage(errorMessage);
});

Then('the user should remain on the login page', function () {
    // Check if the user is still on the login page
    checkForMessage('Login Page'); // replace with actual check for page

});

Given('the user opens the mobile app or website', function () {
    // Implement the logic to open the app or website
});

When('the user navigates to the login page', function () {
    navigateToPage('mobile login');   
});

Then('the login page should load without errors', function () {
    // Add code to check that the page loaded correctly
});

Then('the user should see fields for username and password', function () {
    // Check that the username and password fields are present
    checkFieldValues('username', 'password'); // replace with actual placeholders
});

Given('the user has previously saved their credentials', function () {
    // Simulate saving of credentials logic (e.g., in local storage)
});

When('the user opens the login page', function () {
    navigateToPage('mobile login');
});

Then('the username field should be pre-filled with the saved username', function () {
    checkFieldValues('savedUsername'); // replace with logic to check the saved username
});

Then('the password field should be pre-filled with the saved password', function () {
    checkFieldValues('savedPassword'); // replace with logic to check the saved password
});

Given('the user opens the login page on different mobile devices', function () {
    // Implement logic to open the login page on various devices
});

When('the user attempts to log in', function () {
    // Code to simulate user logging in
});

Then('the login functionality should be consistent across all devices', function () {
    // Validate that login functionality works the same across devices
});

Then('the user should be able to log in without any layout or functionality issues', function () {
    // Add code to verify layout and functionality post-login
});


### Explanation:
- Each step from the scenarios has a defined function using the `Given`, `When`, and `Then` syntax.
- Helper functions encapsulate functionality like navigation, filling forms, clicks, and validations to ensure reusability.
- Actual implementations for navigation, form filling, and checks need to be filled in according to your application’s context (e.g., using Selenium, Puppeteer, etc.).
- Scenario-specific assertions are declared using parameters for flexibility.
- The comments indicate where additional logic should be implemented to fit the actual application scenario.