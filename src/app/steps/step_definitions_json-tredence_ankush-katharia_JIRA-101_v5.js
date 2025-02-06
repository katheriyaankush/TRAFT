Here’s a well-structured set of step definition functions in JavaScript for the provided BDD test cases using a common testing framework like Cucumber. You can easily reuse these functions in the future as needed.


const { Given, When, Then } = require('@cucumber/cucumber');

// Helper function to simulate user login
async function loginUser(credentials) {
  // Logic to perform login using the provided credentials
}

// Helper function to check login status
async function checkLoginStatus() {
  // Logic to verify if the user is logged in
}

// Helper function to display messages
async function getMessageDisplayed() {
  // Logic to retrieve the message displayed to the user
}

// Helper function to check page redirection
async function checkCurrentPage(page) {
  // Logic to verify if the user is on the correct page
}

// Given steps
Given('a mobile user with valid login credentials', async function () {
  this.credentials = { username: 'validUser', password: 'validPass' };
});

Given('a mobile user with invalid login credentials', async function () {
  this.credentials = { username: 'invalidUser', password: 'invalidPass' };
});

Given('a mobile user on the login page', async function () {
  await navigateToLoginPage(); // implement navigation logic
});

Given('a mobile user navigates to the login page', async function () {
  await this.navigateToLoginPage();
});


// When steps
When('the user attempts to log in', async function () {
  await loginUser(this.credentials);
});

When('the user submits the login form without entering credentials', async function () {
  this.credentials = { username: '', password: '' }; // Empty credentials
  await loginUser(this.credentials);
});

When('the user clicks on the "Forgot Password" link', async function () {
  await clickForgotPassword(); // implement forgot password click logic
});

When('the login page is loaded', async function () {
  // Logic to wait for the login page to load if necessary
});

// Then steps
Then('the user should be redirected to the homepage', async function () {
  await checkCurrentPage('homepage');
});

Then('the user should see a welcome message', async function () {
  const message = await getMessageDisplayed();
  if (message !== 'Welcome back!') {
    throw new Error('Welcome message not displayed');
  }
});

Then('the user should remain on the login page', async function () {
  await checkCurrentPage('loginpage');
});

Then('the user should see an error message indicating the credentials are incorrect', async function () {
  const message = await getMessageDisplayed();
  if (message !== 'Invalid credentials, please try again.') {
    throw new Error('Error message not displayed for invalid credentials');
  }
});

Then('the user should see an error message indicating that fields cannot be empty', async function () {
  const message = await getMessageDisplayed();
  if (message !== 'Fields cannot be empty!') {
    throw new Error('Error message for empty fields not displayed');
  }
});

Then('the user should be redirected to the password recovery page', async function () {
  await checkCurrentPage('passwordRecovery');
});

Then('all input fields and buttons should be displayed correctly', async function () {
  const fieldsVisible = await checkInputFieldsVisibility(); // implement visibility logic
  if (!fieldsVisible) {
    throw new Error('Input fields or buttons are not displayed correctly');
  }
});

Then('the user should be able to tap on buttons without any issues', async function () {
  const canTap = await checkButtonTap(); // implement tap checking logic
  if (!canTap) {
    throw new Error('Buttons are not responsive');
  }
});

Then('the user should remain logged in', async function () {
  const loggedIn = await checkLoginStatus();
  if (!loggedIn) {
    throw new Error('User is not logged in after app restart');
  }
});

Then('the user should be taken directly to the homepage without needing to log in again', async function () {
  await checkCurrentPage('homepage');
});


### Explanation:

1. **Given Steps**: Define scenario preconditions by creating user credentials or navigating to the login page.
2. **When Steps**: Describe user actions like attempting to log in or submitting the login form.
3. **Then Steps**: Verify the results against expected outcomes, like being redirected to the homepage or seeing error messages.

You can further enhance helper functions for specific implementations, such as handling specific app behaviors and integrating with your application’s backend.