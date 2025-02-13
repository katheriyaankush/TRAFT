Below is a set of reusable and well-structured step definition functions in JavaScript for the provided BDD test scenarios about mobile user login. These definitions are structured in a way that promotes reuse and clarity.

You can implement these functions using a framework like Cucumber.js.


const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

let currentPage;
let loginStatus;
let message;

// Utility functions
const navigateToLoginPage = () => {
  currentPage = 'login';
}

const enterCredentials = (username, password) => {
  // Simulate entering credentials (for demonstration purposes)
  this.credentials = { username, password };
}

const clickLoginButton = () => {
  if (this.credentials.username === 'validUser' && this.credentials.password === 'validPassword') {
    loginStatus = 'success';
    message = 'Welcome to the homepage!';
  } else {
    loginStatus = 'failed';
    message = 'Invalid credentials';
  }
}

const checkIfRedirected = (expectedPage) => {
  expect(currentPage).to.equal(expectedPage);
}

const checkMessageDisplayed = (expectedMessage) => {
  expect(message).to.equal(expectedMessage);
}

// Step definitions
Given('a mobile user is on the login page', function () {
  navigateToLoginPage();
});

When('the user enters valid credentials', function () {
  enterCredentials('validUser', 'validPassword');
});

When('the user enters invalid credentials', function () {
  enterCredentials('invalidUser', 'invalidPassword');
});

When('clicks the login button', function () {
  clickLoginButton();
});

Then('the user should be redirected to the homepage', function () {
  checkIfRedirected('homepage');
});

Then('a welcome message should be displayed', function () {
  checkMessageDisplayed('Welcome to the homepage!');
});

Then('an error message should be displayed indicating invalid credentials', function () {
  checkMessageDisplayed('Invalid credentials');
});

Then('the user should remain on the login page', function () {
  checkIfRedirected('login');
});

Given('a mobile user accesses the login page', function () {
  navigateToLoginPage();
});

When('the login page loads', function () {
  // Simulate login page loading (you can implement responsiveness check logic)
});

Then('the layout should be adjusted for mobile display', function () {
  // Check layout for mobile display (implement your logic here)
});

Then('all elements should be accessible without horizontal scrolling', function () {
  // Check for no horizontal scrolling (implement your logic here)
});

When('the user clicks the "show password" icon', function () {
  // Simulate password visibility toggle
  this.showPassword = !this.showPassword; // Toggles password visibility
});

Then('the password input field should reveal the entered password', function () {
  expect(this.showPassword).to.be.true;
});

Then('clicking again should obscure the password', function () {
  expect(this.showPassword).to.be.false;
});

When('the user clicks on the "Forgot Password?" link', function () {
  currentPage = 'passwordRecovery';
  message = 'Please follow the instructions sent to your email.';
});

Then('the user should be redirected to the password recovery page', function () {
  checkIfRedirected('passwordRecovery');
});

Then('a confirmation message should be displayed', function () {
  checkMessageDisplayed('Please follow the instructions sent to your email.');
});

Given('a mobile user is logged in', function () {
  // Simulate user login
  currentPage = 'homepage';
  loginStatus = 'active';
});

When('the user remains inactive for an extended period', function () {
  // Simulate session timeout logic
  loginStatus = 'timeout';
  message = 'Session has timed out. Please log in again.';
});

Then('the user should be logged out', function () {
  expect(loginStatus).to.equal('timeout');
});

Then('a session timeout message should be displayed on the next attempt to access a protected page', function () {
  expect(message).to.equal('Session has timed out. Please log in again.');
});


### Explanation:

1. **Given Steps**: These functions set up the necessary preconditions for the scenarios, such as navigating to the login page or simulating a logged-in user.

2. **When Steps**: These functions execute the actions taken by the user, like entering credentials or clicking buttons.

3. **Then Steps**: These functions verify the outcome of the actions performed, such as checking redirection, displaying messages, and validating layout conditions.

4. **Utility Functions**: These support modularization by allowing repeated logic to be defined in one place, making the code cleaner and easier to maintain.

Make sure to fill in the relevant implementation details for page element interactions (like actual UI framework calls) as per your testing environment.